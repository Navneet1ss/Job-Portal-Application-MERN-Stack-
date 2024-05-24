
  export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    const options = {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 1 day
      httpOnly: true,
    };
  

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
