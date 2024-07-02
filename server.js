const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const dbURI =
  "mongodb+srv://sumitabh1710:rNja7cbgpu2AysWT@coffeeshop.mrh2wgp.mongodb.net/?retryWrites=true&w=majority&appName=coffeeShop";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const coffeeShopRoutes = require("./routes/coffeeShop");
app.use("/api/coffeeshops", coffeeShopRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
