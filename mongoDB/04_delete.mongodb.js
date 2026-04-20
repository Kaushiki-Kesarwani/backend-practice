use("eCommerce")

// db.contacts.deleteOne({ name: "Alice" })

db.orders.deleteMany({ status: "Pending" })
