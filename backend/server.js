require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const supabase = require("./supabaseClient");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;


app.get("/api/verify-email", async (req, res) => {
  try {
    const email = req.query.email;

    const response = await axios.get(
      `https://api.kickbox.com/v2/verify?email=${email}&apikey=${process.env.KICKBOX_API_KEY}`
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Kickbox API failed" });
  }
});


app.post("/api/history", async (req, res) => {
  const { email, result } = req.body;

  const { data, error } = await supabase
    .from("email_history")
    .insert([{ email, result }]);

  if (error) return res.status(500).json(error);

  res.json({ success: true, data });
});


app.get("/api/history", async (req, res) => {
  const { data, error } = await supabase
    .from("email_history")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json(error);

  res.json(data);
});


app.get("/api/stats", async (req, res) => {
  const { data } = await supabase.from("email_history").select("result");

  let stats = {
    deliverable: 0,
    risky: 0,
    undeliverable: 0,
  };

  data.forEach((item) => {
    if (item.result === "deliverable") stats.deliverable++;
    else if (item.result === "risky") stats.risky++;
    else stats.undeliverable++;
  });

  res.json(stats);
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
