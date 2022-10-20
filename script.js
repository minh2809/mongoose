const mongoose = require("mongoose");
const { populate } = require("./User");
const User = require("./User");

mongoose.connect("mongodb://localhost/testdb");

run();

async function run() {
  try {
    const user = await User.findOne({ name: "Kyle", email: "test@test.com" });
    console.log(user);
    await user.save();
    console.log(user);

    // const user = await User.where("age")
    //   .gt(12)
    //   .where("name")
    //   .equals("Kyle")
    //   .populate("bestFriend")
    //   .limit(1)
    //   .select("age");
    // user[0].bestFriend = "61855d47a47309cbd95da3a1";
    // await user[0].save();
    // console.log(user);

    // const user = await User.create({
    //   name: "Kyle",
    //   age: 26,
    //   email: "Test@test.com",
    //   hobbies: ["Weight Lifting", "Bowling"],
    //   address: {
    //     street: "Main St",
    //   },
    // });
    // console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
