const app = require("./src/server");
const Database = require("./src/database/mongo.js");
const Item = require("./src/models/item.model.js");
const { request, response } = require("./src/server");
const mongodb = require("mongodb");
const connectionString = require("./src/database/key.json").connectionString;

async function main() {
  let db = await Database.instance.createDatabase(connectionString);

  app.get("/", (request, response) => {
    // Item.find({}, (error, docs) => {
    //   if (!error) {
    //     response.json(docs);
    //   }
    // });
    Item.find({ price: { $gte: 9000 }, quantity: { $gt: 1 } }).then((value) => {
      console.log(value);
    });
  });
  //create item
  app.post("/api/item", (request, response) => {
    let body = request.body;
    let data = body.data;
    console.log(body);
    let temp = new Item(data);
    try {
      temp.save((error, value) => {
        response.json({
          message: "Success!!",
          data: value,
        });
      });
    } catch (error) {
      response.status(404).json({
        message: error.toString(),
      });
    }
  });

  app.put("/api/item", (request, response) => {
    let body = request.body;
    let docId = body.docId;
    let data = body.data;
    Item.findByIdAndUpdate(docId, data, (error, value, result) => {
      response.json(value);
    });
  });

  //delete collection
  app.delete("/api/db", (request, response) => {
    let collection = request.headers.collection;
    db.dropCollection(collection);
    response.send("Droped!!!");
  });

  app.listen(3000, "0.0.0.0", () => {
    console.log("server is running on http://127.0.0.1:3000/");
  });
}
main();
