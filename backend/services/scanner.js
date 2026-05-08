const axios = require("axios");

const cheerio = require("cheerio");

const db = require("../lib/db");

const hashContent = require("../utils/hash");

const sendTelegram = require("./telegram");

const scanMonitor = async (monitor) => {
  try {
    const response = await axios.get(
      monitor.url
    );

    const html = response.data;

    const $ = cheerio.load(html);

    const text = $("body")
      .text()
      .replace(/\s+/g, " ")
      .trim();

    const currentHash =
      hashContent(text);

    // FIRST SAVE
    if (!monitor.last_hash) {
      await db.query(
        `
        UPDATE monitors
        SET
          last_hash = $1,
          last_content = $2,
          last_scan_at = NOW()
        WHERE id = $3
      `,
        [
          currentHash,
          text,
          monitor.id,
        ]
      );

      return;
    }

    // CHANGE DETECTED
    if (
      monitor.last_hash !== currentHash
    ) {
      await db.query(
        `
        INSERT INTO events (
          monitor_id,
          type,
          severity,
          old_hash,
          new_hash,
          changes
        )
        VALUES ($1, $2, $3, $4, $5, $6)
      `,
        [
          monitor.id,
          "policy_change",
          "warning",
          monitor.last_hash,
          currentHash,
          "Legal content modified",
        ]
      );

      await sendTelegram(`
🚨 <b>Policy Updated</b>

🌐 ${monitor.url}

⚠️ Changes detected automatically.
      `);

      await db.query(
        `
        UPDATE monitors
        SET
          last_hash = $1,
          last_content = $2,
          last_scan_at = NOW(),
          last_change_at = NOW()
        WHERE id = $3
      `,
        [
          currentHash,
          text,
          monitor.id,
        ]
      );

      console.log(
        "Change detected:",
        monitor.url
      );
    }

    // UPDATE LAST SCAN
    await db.query(
      `
      UPDATE monitors
      SET last_scan_at = NOW()
      WHERE id = $1
    `,
      [monitor.id]
    );
  } catch (err) {
    console.log(err.message);
  }
};

const startScanner = async () => {
  try {
    const result = await db.query(`
      SELECT *
      FROM monitors
      WHERE active = true
    `);

    const monitors = result.rows;

    for (const monitor of monitors) {
      await scanMonitor(monitor);
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = startScanner;
