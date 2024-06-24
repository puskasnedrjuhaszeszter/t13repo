var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://papaverrhoheas:mGgXHh5nUnU4EM@cluster0.suygeoz.mongodb.net/"

async function tobbMint1600Pontuak(){
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Fifa");
        const rendezes = {Pontszam: 1}
        const eredmeny = await collection.find({Pontszam:{$gt: 1600}}, { projection: { _id:0, Csapat:1, Pontszam:1} }).sort(rendezes).toArray();
        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba.", err)
      }
}

tobbMint1600Pontuak();