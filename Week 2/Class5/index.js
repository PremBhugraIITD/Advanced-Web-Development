import express from "express";
const app = express();
const port = 3000;

const users = [
  {
    user: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  let numberOfKidneys = johnKidneys.length,
    numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  res.json({
    numberOfKidneys: numberOfKidneys,
    numberOfHealthyKidneys: numberOfHealthyKidneys,
    numberOfUnhealthyKidneys: numberOfKidneys - numberOfHealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.healthy;
  console.log(isHealthy);
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    message: "Done!",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    message: "All healthy now!",
  });
});

app.delete("/", (req, res) => {
  let atLeastOneUnhealthyKidney = false;
  users[0].kidneys.forEach((kidney) => {
    if (!kidney.healthy) {
      atLeastOneUnhealthyKidney = true;
    }
  });
  if (atLeastOneUnhealthyKidney) {
    const onlyHealthy = users[0].kidneys.filter((kidney) => {
      return kidney.healthy;
    });
    users[0].kidneys = onlyHealthy;
    res.json({
      message: "All unhealthy kidneys removed!",
    });
  } else {
    console.log("No unhealthy kidneys to remove!");
    res.status(411).json({
      message: "No unhealthy kidneys to remove!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
