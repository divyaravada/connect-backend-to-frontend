# connect-backend-to-frontend


Frontend APP JS

import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return <div>{data} I love it </div>;
}

export default App;


Backend Index.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/getData", (req, res) => {
  res.send("Hello any of the data you can send here :)");
});

app.listen(5000, () => console.log("server is running at 5000 port"));
