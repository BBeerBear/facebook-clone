const jwt = require('jsonwebtoken');

exports.authUser = (req, res, next) => {
  try {
    let tmp = req.header('Authorization');
    const token = tmp ? tmp.slice(7, tmp.length) : '';
    if (!token) {
      return res.status(401).json({ messsage: 'Invalid Authorization' });
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
      if (error) {
        return res.status(401).json({ messsage: 'Invalid Authorization' });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
