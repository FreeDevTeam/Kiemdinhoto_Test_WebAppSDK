const BASE_URL = `https://ttdk-sandbox-api.service.makefamousapp.com`;
const TEST_ACCOUNT = {
  superadmin: {
    username: 'superadmin',
    password: 'string',
  },
};
const RESPONSE_STATUS = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};
const TEST_ACCOUNT_PERSONAL = {
  phoneNumber: '0942423640',
  firstName: 'Nguyen Van A',
  password: '0942423640Aa@',
  email: 'nguyenvana@example.com'
};
const TEST_ACCOUNT_REGISTER = {
  phoneNumber: '0123456789',
  firstName: 'Nguyen Van A', 
  password: '0123456789Aa@', 
  vehiclePlateNumber: '29A-123.45', 
  email: 'newemail@gmail.com' 
};
module.exports = {
  TEST_ACCOUNT,
  RESPONSE_STATUS,
  BASE_URL,
  TEST_ACCOUNT_PERSONAL,
  TEST_ACCOUNT_REGISTER,
};
