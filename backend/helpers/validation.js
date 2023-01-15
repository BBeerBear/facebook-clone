exports.validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
};
exports.validateLength = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};
