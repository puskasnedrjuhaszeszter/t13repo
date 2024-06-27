var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://papaverrhoheas:mGgXHh5nUnU4EM@cluster0.suygeoz.mongodb.net/"

async function egyeniAranyermesSportagak() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");
        const eredmeny = await collection.find({
            $and: [{
                Helyezes: 1
            },
            {
                CsapatMeret: 1
            }]

        }, { projection: { _id: 0, Sportag: 1 } }).toArray();
        console.log("A magyarok egyéniben szereztek aranyérmet az alábbi sportágakban:", eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba.", err)
    }
}

egyeniAranyermesSportagak();