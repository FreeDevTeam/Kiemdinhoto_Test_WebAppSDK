const chai = require('chai');
const expect = chai.expect;

const { TEST_ACCOUNT_PERSONAL, TEST_ACCOUNT_REGISTER, RESPONSE_STATUS } = require('../../src/Common/Constants');
const { shouldBeAnObject } = require('../../src/common/Utils');
const { loginUser,registerUser } = require('../../src/Functions/TTDK');

describe('Kiểm tra login user TTDK', function () {
  it('TC_TTDK_USER_001 Đăng nhập thành công tài khoản user', async function () {
    let data;
    let response = await loginUser(TEST_ACCOUNT_PERSONAL.phoneNumber, TEST_ACCOUNT_PERSONAL.password, RESPONSE_STATUS.SUCCESS);

    shouldBeAnObject(response.body);
    shouldBeAnObject(response.body.data);

    data = response.body.data;
    expect(data.phoneNumber).equal(TEST_ACCOUNT_PERSONAL.phoneNumber, 'Sai phoneNumber');
  });
  it('TC_TTDK_USER_002 Đăng nhập thất bại với password sai', async function () {
    let response = await loginUser(TEST_ACCOUNT_PERSONAL.phoneNumber, 'WrongPass', RESPONSE_STATUS.INTERNAL_SERVER_ERROR);

    shouldBeAnObject(response.body);
    data = response.body;
    expect(data).to.have.property('statusCode').equal(RESPONSE_STATUS.INTERNAL_SERVER_ERROR, 'Trạng thái phản hồi không phải 500');
    expect(data).to.have.property('message').equal('An internal server error occurred', 'Thông báo lỗi không đúng');
  });
  it('TC_TTDK_USER_004 Đăng nhập thất bại với thông tin không hợp lệ', async function () {
    let response = await loginUser ('', '', RESPONSE_STATUS.BAD_REQUEST);

    shouldBeAnObject(response.body);
    if (response.body.data) {
      shouldBeAnObject(response.body.data);
    } 
    data = response.body;
    expect(data).to.have.property('statusCode').equal(RESPONSE_STATUS.BAD_REQUEST, 'Trạng thái phản hồi không phải 400');
    expect(data.message).to.include('password', 'Thông báo lỗi không đúng'); 
});
});
// ĐĂNG KÝ USER
describe('Kiểm tra đăng ký tài khoản người dùng', function () {

  it('TC_TTDK_USER_001 Đăng ký tài khoản đã có', async function () {
    const response = await registerUser  (
      TEST_ACCOUNT_REGISTER.firstName,
      TEST_ACCOUNT_REGISTER.phoneNumber,
      TEST_ACCOUNT_REGISTER.password,
      TEST_ACCOUNT_REGISTER.email,
      RESPONSE_STATUS.INTERNAL_SERVER_ERROR 
    );

    shouldBeAnObject(response.body);
    const data = response.body; 

    if (data) {
      expect(data).to.have.property('statusCode').equal(RESPONSE_STATUS.INTERNAL_SERVER_ERROR, 'Trạng thái phản hồi không phải 500');
      expect(data).to.have.property('message').equal('An internal server error occurred', 'Thông báo lỗi không đúng');
    } 
  });

});