var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://papaverrhoheas:mGgXHh5nUnU4EM@cluster0.suygeoz.mongodb.net/"

async function valtozatlanHelyezesuek(){
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Fifa");

        const eredmeny = await collection.find({ Valtozas: 0}, { projection: { _id:0, Csapat:1} }).toArray();
        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba.", err)
      }
}

valtozatlanHelyezesuek();