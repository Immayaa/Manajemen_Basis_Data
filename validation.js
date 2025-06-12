db.createCollection("Barang", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "jumlah", "lokasi", "kategori"],
      properties: {
        nama: { bsonType: "string" },
        jumlah: { bsonType: "int", minimum: 0 },
        lokasi: { bsonType: "string" },
        kategori: { bsonType: "string" }
      }
    }
  }
});
