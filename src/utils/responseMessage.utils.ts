export const Message = {
  passwordShouldStrong: 'Use 8 or more characters with at least one uppercase letter, numbers & symbols',
  passwordShouldMatch: 'Both password needs to be same',
  validPhoneNumber: 'Phone number should be valid',
  notFound: 'Not found',
  invalidCredentials: 'Invalid credentials',
  emailOrPhoneAlreadyInUse: 'Email or phone already in use',
  loginSuccessfully: 'Login successfully',
  invalidOTP: 'Invalid OTP',
  OTPExpired: 'OTP has expired',
  accountVerified: 'Account verified successfully',
  accountAlreadyVerified: 'Account already verified',
  accountNotVerified: 'Account not verified',
  invalidOldPassword: 'Invalid old password',
  checkYourEmailForOTP: 'Please check your email for OTP',
  passwordReset: 'Your password reset successfully',
  server: 'Internal Server Error',
  unAuthorized: 'You are not authorized to perform this action',
  mediaUploaded: 'Media Uploaded Successfully',
};

export const getNotFoundMessage = (title: string) => {
  return `${title} not found`;
};
export const deletedMessage = (title: string) => {
  return `${title} deleted successfully`;
};
export const UpdatedMessage = (title: string) => {
  return `${title} updated successfully`;
};
export const CreatedMessage = (title: string) => {
  return `${title} created successfully`;
};
