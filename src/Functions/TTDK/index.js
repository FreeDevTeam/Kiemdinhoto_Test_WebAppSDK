const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);

const { BASE_URL } = require('../../Common/Constants');
const { checkResponseStatus, sendPOSTrequest } = require('../../Common/Functions');

async function loginUser(phoneNumber, password, responseStatus = 200) {
  const body = {
    phoneNumber: phoneNumber,
    password: password,
  };
  let _result = await sendPOSTrequest(BASE_URL, '/AppUsers/loginUserByPhone', body);
  checkResponseStatus(_result, responseStatus);
  return _result;
}
async function registerUser(firstName,phoneNumber, password,email,responseStatus = 200) {
  const body = {
    email: email,
    firstName: firstName,
    password: password,
    phoneNumber: phoneNumber,
  };
  let _result = await sendPOSTrequest(BASE_URL, '/AppUsers/registerUserByPhone', body);
  checkResponseStatus(_result, responseStatus);
  return _result;
}

module.exports = {
  loginUser,
  registerUser,
};