var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://papaverrhoheas:mGgXHh5nUnU4EM@cluster0.suygeoz.mongodb.net/"

async function tornaEsUszas() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");
        const eredmeny = await collection.find({
            $or:[{
                Sportag: "torna"
            },
            {
                Sportag: "uszas"
            }
        ]
        },
    {projection:{_id:0, Sportag:1, VersenySzam:1}}).toArray();
        console.log("Torna és úszás versenyszámok:", eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba.", err)
    }
}

tornaEsUszas();