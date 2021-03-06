const users = require("../models/users");
const bcrypt = require("bcrypt");
// update name
exports.UpdateUser = async (req, res) => {
  try {
    const user = await users.findByIdAndUpdate(
      req.user.id,
      { ...req.body },
      { new: true }
    );

    await user.save();
    res.status(200).send({ msg: "User is upadated", user });
  } catch (error) {
    res.status(500).send("User not updated");
  }
};
// update email
// exports.UpdateEmail = async (req, res) => {
//   const { actuelEmail, newEmail } = req.body;
//   console.log(req.body);
//   try {
//     // if (user.email === actuelEmail) {
//     const found = await users.findOne({ newEmail }).exec();
//     console.log("found", found);
//     if (found) {
//       res.status(400).send({ erros: [{ msg: "user is already exist" }] });
//     } else {
//       const user = await users.findById(req.user.id);
//       console.log(user);
//       user.email = newEmail;
//       await user.save();
//     }
//     // } else res.status(400).send({ errors: [{ msg: "Wrong email" }] });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ msg: "Server Error" });
//   }
// };

//update password
exports.UpdatePassword = async (req, res) => {
  try {
    const user = await users.findById(req.user.id, {});
    const match = await bcrypt.compare(req.body.actualpassword, user.password);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "Wrong password" }] });
    }
    if (req.body.newPassword !== req.body.confirmPassword) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Passwords don't match" }] });
    } //crypter le nouveau mot de passe
    const salt = 10;
    const hashPassword = bcrypt.hashSync(req.body.newPassword, salt);
    user.password = hashPassword;
    user.save();
    res.status(200).json("Passeword is updated!");
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ msg: "Server Error" });
  }
};

// update phone
// exports.UpdatePhone = async (req, res) => {
//   try {
//     const user = await users.findById(req.user.id, {});
//     user.phone = req.body.phone;
//     await user.save();
//     res.status(200).send({ msg: "phone is upadated", user });
//   } catch (error) {
//     res.status(500).send("phone not updated");
//   }
// };
// add address
// exports.AddAddress = async (req, res) => {
//   try {
//     const user = await users.findById(req.user.id, {});
//     user.address = req.body.address;
//     await user.save();
//     res.status(200).send({ msg: "address is added", user });
//   } catch (error) {
//     res.status(500).send("address not added");
//   }
// };
//add facebook
// exports.AddFacebook = async (req, res) => {
//   try {
//     const user = await users.findById(req.user, {});
//     user.facebook = req.body.facebook;
//     await user.save();
//     res.status(200).send({ msg: "facebook is added", user });
//   } catch (error) {
//     res.status(500).send("facebok not added");
//   }
// };
// add instagram
// exports.AddInstagram = async (req, res) => {
//   try {
//     const user = await users.findById(req.user, {});
//     user.instagram = req.body.instagram;
//     await user.save();
//     res.status(200).send({ msg: "instagram is added", user });
//   } catch (error) {
//     res.status(500).send("instagram not added");
//   }
// };
// add pronumber
// exports.AddPronumber = async (req, res) => {
//   try {
//     const user = await users.findById(req.user, {});
//     user.proNumber = req.body.proNumber;
//     await user.save();
//     res.status(200).send({ msg: "proNumber is added", user });
//   } catch (error) {
//     res.status(500).send("proNumber not added");
//   }
// };
