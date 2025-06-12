db.Barang.find({
  $or: [
    { lokasi: "Aula" },
    { jumlah: { $gt: 5 } }
  ]
});
