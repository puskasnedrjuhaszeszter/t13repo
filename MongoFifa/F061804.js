var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://papaverrhoheas:mGgXHh5nUnU4EM@cluster0.suygeoz.mongodb.net/"

async function legjobb3() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Fifa");
        const rendezes = {Helyezes: 1}
        const eredmeny = await collection.find().sort(rendezes).limit(3).toArray();
        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba.", err)
      }
}

legjobb3();