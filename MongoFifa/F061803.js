var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://papaverrhoheas:mGgXHh5nUnU4EM@cluster0.suygeoz.mongodb.net/"

async function pontszamSzerintiRendezes(){
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Fifa");
        const rendezes = {Pontszam: -1}
        const eredmeny = await collection.find({}, { projection: { _id:0, Helyezes:1, Csapat:1} }).sort(rendezes).toArray();
        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba.", err)
      }
}

pontszamSzerintiRendezes();