const express = require("express");
//const { default: mongoose } = require("mongoose");
const app = express();
 
const cors = require("cors");
require('dotenv').config()
const PORT = process.env.PORT || 6009

app.use(cors());
app.use(express.json());
// db connection
// mongoose
//   .connect(process.env.URL)
//   .then(() => {
//     console.log("db connection succesfully");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//user schema
// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);

// create user

app.get("/",async(req,res)=>{
  res.status(200).json("api working")
})
// app.post("/createuser", async (req, res) => {
//   try {
//     const bodyData = req.body;
//     const user = new User(bodyData);
//     const userData = await user.save();
//     res.send(userData);
//   } catch (error) {
//     res.send(error);
//   }
// });
// // read all user

// app.get("/readalluser", async (req, res) => {
//   try {
//     const userData = await User.find({});
//     res.send(userData);
//   } catch (error) {
//     res.send(error);
//   }
// });
// app.get("/read/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await User.findById({ _id: id });
//     res.send(user);
//   } catch (error) {
//     res.send(error);
//   }
// });

// // update user

// app.put("/updateuser/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
//       new: true,
//     });
//     res.send(user);
//   } catch (error) {
//     res.send(error);
//   }
// });

// app.delete("/delete/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await User.findByIdAndDelete({ _id: id });
//     res.send(user);
//   } catch (error) {
//     res.send(error);
//   }
// });

app.listen(PORT, () => {
  console.log(`server ise running on ...${PORT}`);
});
