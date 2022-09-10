// const adminUser = require("./models/adminUser");
// const mongoose = require("mongoose");

// var adminuser = new adminUser({
//   email: "bharathkumargoda12@gmail.com",
//   password: "Bharath@123",
//   role: "admin",
// });

// const email = "gbharath1220@gmail.com";
// const password = "Bharath@120102";
// const role = "restricted";


// const dbURI = process.env.DB_URL || "mongodb://localhost:27017/interview-prep";


// mongoose
//   .connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   })
//   .then(async (result) => {
//     console.log("connection made!!");
//     adminuser.save().then(function () {
//       console.log("admin created suceesfully");
//     });
//     const adminuser_ = await adminUser.create({ email, password, role });
//     console.log(adminuser_);
//   })
//   .catch((err) => console.log(err));
