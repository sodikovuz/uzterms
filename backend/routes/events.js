const express = require("express");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const db = require("../lib/db");

const router = express.Router();

router.post(
  "/register",
  async (req, res) => {
    try {
      const { email, password } =
        req.body;

      const hashed =
        await bcrypt.hash(password, 10);

      const result = await db.query(
        `
        INSERT INTO users (
          email,
          password
        )
        VALUES ($1, $2)
        RETURNING *
      `,
        [email, hashed]
      );

      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } =
      req.body;

    const result = await db.query(
      `
      SELECT *
      FROM users
      WHERE email = $1
    `,
      [email]
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const valid =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!valid) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    res.json({
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
