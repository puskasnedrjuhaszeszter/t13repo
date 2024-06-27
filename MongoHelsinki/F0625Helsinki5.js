var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://papaverrhoheas:mGgXHh5nUnU4EM@cluster0.suygeoz.mongodb.net/"

async function legnagyobbCsapat() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");
        const rendezes = {CsapatMeret: -1}
        const eredmeny = await collection.find().sort(rendezes).limit(1).toArray();
        console.log("A legnagyobb csapatlétszámmal rendelkező csapat:", eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba.", err)
    }
}

legnagyobbCsapat();