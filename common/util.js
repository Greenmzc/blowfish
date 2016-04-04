function validateMaker(type) {
  const regMap = {
    email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,9}$/i,
    username: /^[a-z0-9~_]+[a-z0-9]{1,8}$/i
  };

  return function(content) {
    return regMap[type].test(content);
  }
};

exports.emailValidate = validateMaker('email');

exports.usernameValidate = validateMaker('username');

exports.passwordValidate = function(password) {
  return password.length > 6 && password.length < 12 ? true: false;
};
