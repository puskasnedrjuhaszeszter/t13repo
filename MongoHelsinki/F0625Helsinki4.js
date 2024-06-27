var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://papaverrhoheas:mGgXHh5nUnU4EM@cluster0.suygeoz.mongodb.net/"

async function dobogosMagyar() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");
        const eredmeny = await collection.find({ Helyezes: { $lte:3}},
    {projection:{_id:0, Helyezes:1, VersenySzam:1}}).toArray();
        console.log("A magyar csapat dobogós helyezést ért el az alábbi versenyszámokban: ", eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba.", err)
    }
}

dobogosMagyar();