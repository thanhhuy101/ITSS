const mongoose = require("mongoose");
const connectionString = require("./key.json").connectionString;

class Database {
  /**
   * @type {Database}
   */
  static _db = null;

  /**
   *
   * @returns {Database}
   */
  static get instance() {
    if (this._db == null) {
      this._db = new Database("");
      return this._db;
    }
    return this._db;
  }

  constructor(database) {
    this.database = database;
  }

  /**
   *
   @param {string} connectionString
   @param {string} dbName
   @returns {Promise<mongoose.Connection>}
   */
  async createDatabase(connectionString) {
    return new Promise((resolve, reject) => {
      mongoose.connect(connectionString, {
        waitQueueTimeoutMS: 2000,
      });

      let db = mongoose.connection;

      db.on("error", (error) => {
        console.log("Connection to MongoDB have error!!!");
        console.log(error);
        reject(error);
      });

      db.once("connected", (stream) => {
        console.log("Database connected!!");
        resolve(db);
      });
    });
  }
}
module.exports = Database;
