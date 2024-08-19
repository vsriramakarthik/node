const express = require("express");
const app = express();
const router = express.Router();

// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token === "valid-token") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

// Apply the middleware to specific routes
//router.use('/protected', authenticate);

router.get("/protected", (req, res) => {
  res.send("This is a protected route");
});

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
