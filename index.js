import express from "express";
import ways_of_making_change_2 from "./ways_of_making_change_2.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ways of Making Change API");
});

// ✅ GET endpoint (URL params)
// Example: http://localhost:3000/solve?array=1,2,5&queries=5,10
app.get("/solve", (req, res) => {
  const { array, queries } = req.query;

  if (!array || !queries) {
    return res.status(400).json({ error: "Provide 'array' and 'queries'" });
  }

  const arr = array.split(",").map(Number);
  const qrs = queries.split(",").map(Number);

  const bz = new ways_of_making_change_2();
  const result = bz.solve(arr, qrs, arr.length, qrs.length);

  res.json({ result });
});

// ✅ POST endpoint (JSON body)
// Example body: { "array": [1,2,5], "queries": [5,10] }
app.post("/solve", (req, res) => {
  const { array, queries } = req.body;

  if (!array || !queries) {
    return res.status(400).json({ error: "Provide 'array' and 'queries'" });
  }

  const bz = new ways_of_making_change_2();
  const result = bz.solve(array, queries, array.length, queries.length);

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});