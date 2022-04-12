const express = require("express");
const bodyParser = require("body-Parser");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const path = require("path");
var key = require("../keys/key.json");
const { response } = require("express");
const { request } = require("http");

admin.initializeApp({
  credential: admin.credential.cert(key),
});

const firestore = admin.firestore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (request, response) => {
  //   response.send({
  //     message: "Hello World!!!",
  //   });
  console.log(path.join(__dirname, "index.html"));
  response.sendFile(path.join(__dirname, "index.html"));
});

// //get item with params
//postman: localhost:3000/item/Game
app.get("/api/:name", async function (request, response) {
  let params = request.params.name;
  console.log("API 1 " + params);
  let querySnapshot = await firestore.collection(params).get();

  let data = await querySnapshot.docs.map((value) => {
    let temp = value.data();
    return temp;
  });
  console.log(data);
  response.send(data);
});

// //params cần "<path>/:<tên thuộc tính cần truyền>/" trong code back-end
// // trên browser thì tuân thủ "<url/path/<tên thuộc tính>"

// //query thì back-end k cần khai báo trước thuộc tính query
// // trên browser thì tuân thủ "url/path?<tên thuộc tính>=<giá trị thuộc tính>"
// //query nếu có nhiều hơn 1 thuộc tính thì cách nhau bằng ký tự "&"

// //Get with query
//postman: localhost:3000/item?data=Game
app.get("/api", async function (request, response) {
  let temp = request.query;
  console.log("API 2 " + JSON.stringify(temp));
  try {
    let querySnapshot = await (
      await firestore.collection(temp.data).get()
    ).docs.map((value) => {
      let temp = value.data();
      return temp;
    });
    response.send(querySnapshot);
  } catch (error) {
    console.log("Có cứt lấy được data");
  }
});

//get data with id
// app.get("/item/:id", async function (request, response) {
//   let params = request.params.id;
//   let querySnapshot = await firestore.collection("Game").doc(params);
//   let data = await querySnapshot.get();
//   console.log(data);
//   response.send(data);
// });

app.post("/api", async (req, res) => {
  let body = req.body;
  console.log(body);

  let docName = body.data.id + "-" + Math.round(Math.random() * 10).toString();

  let result = await firestore
    .collection(body.collectionName)
    .doc(docName)
    .set(body.data);

  res.send({
    message: "Loot đồ thành công!!!",
  });
});

//update 1 item trên hệ thống có time
app.put("/item", async (request, response) => {
  let collectionName = request.body.collectionId;
  let docId = request.body.docId;
  try {
    let result = await firestore
      .collection(collectionName)
      .doc(docId)
      .update(request.body.data);
    console.log(result);
    response.send({
      message: "Update successful!!",
      updateTime: result.writeTime,
    });
  } catch (error) {
    response.send({
      error: error.toString(),
    });
  }
});

//update mới hoàn toàn item
app.put("/item/update", async (request, response) => {
  let collectionName = request.body.collectionId;
  let docId = request.body.docId;
  try {
    let data = await firestore
      .collection(collectionName)
      .doc(docId)
      .set(request.body.data);
    response.send(data);
  } catch (error) {
    response.send({
      error: error.toString(),
    });
  }
});

//delete field đang tồn tại trong document
app.put("/item/delete", async (request, response) => {
  let collectionName = request.body.collectionId;
  let docId = request.body.docId;
  let fields = request.body.fields;

  for (let field of fields) {
    let result = await firestore
      .collection(collectionName)
      .doc(docId)
      .update({ [field]: admin.firestore.FieldValue.delete() });
    console.log(result);
  }
  response.send("ahihihihih!!!!!");
});

//delete 1 document
app.delete("/item/deleteDoc", async (request, response) => {
  let collectionName = request.body.collectionName;
  let docId = request.body.docId;
  let data = await firestore.collection(collectionName).doc(docId).delete();
  response.send(data);
});

//delete nhiều document
app.delete("/item/deleteDocs", async (request, response) => {
  let collectionName = request.body.collectionName;
  let docIds = request.body.docIds;
  for (let docId of docIds) {
    let data = await firestore.collection(collectionName).doc(docId).delete();
    response.send(data);
  }
});

//delete tất cả document trong collection
app.delete("/item/deleteAllDoc/:name", async function (request, response) {
  let params = request.params.name;
  let querySnapshot = firestore
    .collection(params)
    .get()
    .then((res) => {
      res.forEach((element) => {
        element.ref.delete();
      });
    });
  response.send(querySnapshot);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
