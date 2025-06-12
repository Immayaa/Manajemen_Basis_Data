const database = 'InventarisSekolah';
const collection = 'Barang';

use(database);

if (!db.getCollectionNames().includes(collection)) {
  db.createCollection(collection);
}

db[collection].insertMany([
  { nama: "Proyektor", jumlah: 5, lokasi: "Ruang Multimedia", kategori: "Elektronik" },
  { nama: "Kursi Lipat", jumlah: 30, lokasi: "Aula", kategori: "Furnitur" },
  { nama: "Papan Tulis", jumlah: 10, lokasi: "Ruang Kelas", kategori: "Alat Tulis" }
]);
