import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/getData", (req, res) => {
  res.send("Hello any of the data you can send here :)");
});

app.listen(5000, () => console.log("server is running at 5000 port"));
