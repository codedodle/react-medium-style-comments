const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const faker = require("faker");
const serveStatic = require("serve-static");

const port = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(
  serveStatic("build", {
    index: ["index.html"],
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/comments", (req, res) => {
  let data = [];

  for (let i = 0; i < 5; i++) {
    data.push({
      id: faker.random.number(),
      body: faker.lorem.sentences(),
      like_count: faker.random.number(),
      comment_count: faker.random.number(),
      user: {
        id: faker.random.number(),
        name: faker.name.firstName(),
        timestamp: faker.date.past(),
        avatar: `${faker.image.nature()}?random=${Date.now() + Math.random()}`,
      },
    });
  }

  res.json(data);
});

app.listen(port, () => {
  console.log("Server listening at " + port);
});
