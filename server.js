const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "http://placeimg.com/64/64/1",
      name: "홍길동",
      birthday: "961212",
      gender: "male",
      job: "학생",
    },
    {
      id: 2,
      image: "http://placeimg.com/64/64/2",
      name: "장삐쭈",
      birthday: "961222",
      gender: "male",
      job: "학생",
    },
    {
      id: 3,
      image: "http://placeimg.com/64/64/3",
      name: "나천재",
      birthday: "961223",
      gender: "male",
      job: "학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on Port ${port}`));
