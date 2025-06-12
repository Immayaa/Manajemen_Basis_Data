db.Barang.aggregate([
  {
    $group: {
      _id: "$kategori",
      totalBarang: { $sum: "$jumlah" }
    }
  }
]);
