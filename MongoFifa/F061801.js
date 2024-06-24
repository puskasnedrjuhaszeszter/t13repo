var MongoClient = require("mongodb").MongoClient;
var url ="mongodb+srv://papaverrhoheas:mGgXHh5nUnU4EM@cluster0.suygeoz.mongodb.net/"

async function kollekcioLetrehozas() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        await db.createCollection("Fifa");
        console.log("Az új kollekció a T13 adatbázisban létrejött.");
        client.close();
    }
    catch(err){
        console.error("Hiba", err);
    }
}

kollekcioLetrehozas();