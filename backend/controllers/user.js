const { validateEmail, validateLength } = require('../helpers/validation');
const User = require('../models/User');
exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'invalid email address' });
    }
    const check = await User.findOne({ email: email });
    if (check) {
      return res.status(400).json({
        message:
          'This email address already exists, try with a different email address',
      });
    }

    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        message: 'first_name must between 3 and 30 characters.',
      });
    }
    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        message: 'first name must between 3 and 30 characters.',
      });
    }
    if (!validateLength(last_name, 3, 30)) {
      return res.status(400).json({
        message: 'last name must between 3 and 30 characters.',
      });
    }
    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
        message: 'password must be at least 6 characters long',
      });
    }
    const user = new User({
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
