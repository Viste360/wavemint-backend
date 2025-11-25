import express from "express";
const router = express.Router();

// placeholder
router.post("/generate", async (req, res) => {
  res.json({ status: "AI Artwork Placeholder" });
});

export default router;
