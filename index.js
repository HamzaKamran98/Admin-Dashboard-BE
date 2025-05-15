const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/products");
const salesRoutes = require("./routes/sales");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/sales", salesRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
