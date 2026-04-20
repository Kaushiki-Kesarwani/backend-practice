use("eCommerce");

// db.products.find({  stock: NumberInt('120')})
// db.products.find().pretty()
// db.products.find({ price: { $gt: 1000 } }) 
// db.products.find({ price: { $gte: 1000, $lte: 50000 } })
// db.products.find({}, { name: 1, price: 1, _id: 0 })
db.products.find().sort({ price: -1 }).limit(2)