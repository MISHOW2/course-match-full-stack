const users = require('../config/db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


const signUp = async (req, res) => {

  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = users.find(user => user.email === email);

    if (user) {
      return res.status(400).json(
        {
          msg: "User already exists"
        }
      );

    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    users.push({
      email,
      password: hashedPassword
    });


    const token = jwt.sign(
      { email }, "lskdjglsjgdslsdgs", { expiresIn: "1h" })

    res.status(201).json({
      msg: "User signed up successfully", token
    });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ msg: "Server error" });
  }
}

const login = async (req, res) => {

  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (!user) return res.statusjson({ error: "invalid credentials" });
  try {

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ success: false, msg: "invalid credentials" })


    // Generate JWT
    const token = jwt.sign(
      { email },
      "gdsaflkhsdghskdghlsdfgldka",
      { expiresIn: "1h" }
    );

    res.json({success:true, token})
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ msg: "Server error" });
  }

}



module.exports = { signUp, login }