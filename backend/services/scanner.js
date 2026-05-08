const axios = require("axios");
const cheerio = require("cheerio");

const supabase = require("../lib/supabase");
const hashContent = require("../utils/hash");
const sendTelegram = require("./telegram");

const scanMonitor = async (monitor) => {
  try {
    const response = await axios.get(monitor.url);

    const html = response.data;

    const $ = cheerio.load(html);

    const text = $("body")
      .text()
      .replace(/\s+/g, " ")
      .trim();

    const currentHash = hashContent(text);

    if (!monitor.last_hash) {
      await supabase
        .from("monitors")
        .update({
          last_hash: currentHash,
          last_content: text,
        })
        .eq("id", monitor.id);

      return;
    }

    if (monitor.last_hash !== currentHash) {
      await supabase
        .from("events")
        .insert([
          {
            monitor_id: monitor.id,
            type: "policy_change",
            old_hash: monitor.last_hash,
            new_hash: currentHash,
            changes: "Legal content modified",
          },
        ]);

      await sendTelegram(`
🚨 <b>Policy Updated</b>

🌐 ${monitor.url}

⚠️ Changes detected automatically.
      `);

      await supabase
        .from("monitors")
        .update({
          last_hash: currentHash,
          last_content: text,
        })
        .eq("id", monitor.id);

      console.log("Change detected:", monitor.url);
    }
  } catch (err) {
    console.log(err.message);
  }
};

const startScanner = async () => {
  const { data: monitors } = await supabase
    .from("monitors")
    .select("*")
    .eq("active", true);

  for (const monitor of monitors || []) {
    await scanMonitor(monitor);
  }
};

module.exports = startScanner;