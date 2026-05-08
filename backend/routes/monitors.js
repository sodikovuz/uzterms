const express = require("express");

const supabase = require("../lib/supabase");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const { data, error } = await supabase
    .from("monitors")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
});

router.post("/", auth, async (req, res) => {
  const { url, title } = req.body;

  const { data, error } = await supabase
    .from("monitors")
    .insert([{ url, title }])
    .select()
    .single();

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
});

router.delete("/:id", auth, async (req, res) => {
  const { error } = await supabase
    .from("monitors")
    .delete()
    .eq("id", req.params.id);

  if (error) {
    return res.status(400).json(error);
  }

  res.json({ success: true });
});

module.exports = router;