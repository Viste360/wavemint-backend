import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.js";
app.use("/auth", authRoute);
import artworkRoute from "./routes/artwork.js";
import enhanceRoute from "./routes/enhance.js";
import smartCropRoute from "./routes/smartcrop.js";

const app = express();
app.use(cors());
app.use(express.json());
import authRoute from "./routes/auth.js";
app.use("/auth", authRoute);

app.use("/artwork", artworkRoute);
app.use("/enhance", enhanceRoute);
app.use("/smartcrop", smartCropRoute);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log("AI Backend running on port", PORT);
});
