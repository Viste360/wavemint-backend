import express from "express";
import cors from "cors";

import authRoute from "./routes/auth.js";
import artworkRoute from "./routes/artwork.js";
import enhanceRoute from "./routes/enhance.js";
import smartCropRoute from "./routes/smartcrop.js";

const app = express();

// CORS (temporary wide-open)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(express.json({ limit: "200mb" }));

// Routes
app.use("/auth", authRoute);
app.use("/artwork", artworkRoute);
app.use("/enhance", enhanceRoute);
app.use("/smartcrop", smartCropRoute);

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Backend OK" });
});

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log("AI Backend running on port", PORT);
});
