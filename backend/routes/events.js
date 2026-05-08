const express = require("express");

const auth = require("../middleware/auth");
const supabase = require("../lib/supabase");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
});

module.exports = router;