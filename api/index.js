import express from "express";
const app = express();
import { company } from "./company.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["primayText", "headLine", "description", "CTA"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  res.json(company.splice(0, 10));
});

app.listen(5000, () => console.log("API is working!"));
