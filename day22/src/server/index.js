const { response } = require("express");
const express = require("express");
// const { request } = require("http");
const server = express();
const bodyParser = require("body-parser");
const { request } = require("http");
const path = require("path");
// server.use(bodyParser.urlencoded({ extended: false }));
// server.use(bodyParser.json());

server.use(bodyParser());
let arr = [
  {
    name: "Huy",
    age: 10,
  },
  {
    name: "Thanh",
    age: 20,
  },
  {
    name: "Xôi",
    age: 4,
  },
  {
    name: "Tom",
    age: 4,
  },
  {
    name: "Như",
    age: 4,
  },
];

server.get("/", (request, response) => {
  //   response.send({
  //     message: "Hello world",
  //   });
  console.log(path.join(__dirname, "index.html"));
  response.sendFile(path.join(__dirname, "index.html"));
});

server.get("/api", (request, response) => {
  let name = request.query.name;
  let age = request.query.age;
  if (parseInt(age <= 20)) {
    response.status(200).send({
      message: `Chào cu ${name}, mày còn non lém !!!`,
    });
  } else {
    response.status(200).send({
      message: `Chào chú ${name} đến vs hội người già !!`,
    });
  }
});

server.post("/api", (request, response) => {
  let temp = request.body;
  let name = temp.name;
  let age = temp.age;
  if (parseInt(age) <= 20) {
    arr.push(temp);
    response.status(200).send({
      message: `Chào cu ${name}, mày còn non lém !!!`,
      array: arr,
    });
  } else {
    response.status(200).send({
      message: `Chào chú ${name} đến vs hội người già !!`,
    });
  }
});

server.put("/api", (request, response) => {
  let temp = request.body;
  let name = temp.name;
  let age = temp.age;

  for (let i = 0; i < arr.length; i++) {
    if (name == arr[i].name) {
      arr[i] = { ...temp };
    }
  }
  response.send({
    response: arr,
  });
});

server.delete("/api", (request, response) => {
  let temp = request.body;
  let name = temp.name;
  let age = temp.age;
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (name == arr[i].name) {
      console.log(arr[i].name);
      arr.splice(i, 2);
    }
  }
  response.send({
    response: arr,
  });
});

server.listen(3000, () => {
  console.log("server is running");
});
