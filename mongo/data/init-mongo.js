db = db.getSiblingDB('ecommerce')
db.createUser(
    {
        user: "duong2824",
        pwd: "Duong_2824",
        roles: [
            {
                role: "readWrite",
                db: "ecommerce"
            }
        ]
    }
);
// db.createCollection("test23");