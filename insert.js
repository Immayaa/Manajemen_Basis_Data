//NOMOR 1 Database NoSQL Model Key-Value
db.key_value_store.insertMany([
    { key: "user1", value: "Andi"},
    { key: "user2", value: "Andi"},
    { key: "user3", value: "Andi"},
    { key: "user4", value: "Andi"},
    { key: "user", value: "Andi"},
]);


//NOMOR 2 Lihat Hasil Input Data(Key-Value)
print("===== Data Key-Value =====");
db.key_value_store.find().pretty();

//NOMOR 3 Database NoSQL Model Wide-Column
db.wide_column_users.insertMany([
    { id: 1, name:"Andi", email: "andi@example.com,age: 22",gender: "L"},
    { id: 2, name:"Budi", email: "budi@example.com,age: 23",gender: "L"},
    { id: 3, name:"Citra", email: "citra@example.com,age: 24",gender: "P"},
    { id: 4, name:"Dina", email: "dina@example.com,age: 25",gender: "P"},
    { id: 5, name:"Eko", email: "eko@example.com,age: 26",gender: "L"},
]);

//NOMOR 4 Lihat Hasil Input Data(Wide-Column)
print("===== Data Wide-Column =====");
db.wide_column_users.find().pretty();