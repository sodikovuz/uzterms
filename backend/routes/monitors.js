const express = require("express");

const db = require("../lib/db");

const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const result = await db.query(`
      SELECT *
      FROM monitors
      ORDER BY created_at DESC
    `);

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const { title, url } =
      req.body;

    const result = await db.query(
      `
      INSERT INTO monitors (
        title,
        url,
        user_id
      )
      VALUES ($1, $2, $3)
      RETURNING *
    `,
      [
        title,
        url,
        req.user.id,
      ]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.delete(
  "/:id",
  auth,
  async (req, res) => {
    try {
      await db.query(
        `
        DELETE FROM monitors
        WHERE id = $1
      `,
        [req.params.id]
      );

      res.json({
        success: true,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);

module.exports = router;
