var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://papaverrhoheas:mGgXHh5nUnU4EM@cluster0.suygeoz.mongodb.net/"

async function legtobbetRonto(){
    try{
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Fifa");
        const rendezes = {Valtozas: 1}
    
        const eredmeny = await collection.find({}, { projection: { _id:0, Csapat:1, Valtozas:1} }).sort(rendezes).limit(1).toArray();
        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba.", err)
      }
}

legtobbetRonto();