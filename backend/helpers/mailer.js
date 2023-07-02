const nodemailer = require('nodemailer');

const { google } = require('googleapis');

const { EMAIL_SENDER, CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, REFRESH_TOKEN } =
  process.env;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

exports.sendVerificationEmail = (email, name, activate_url) => {
  oAuth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
  });
  const accessToken = oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: EMAIL_SENDER,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  const mailOptions = {
    from: EMAIL_SENDER,
    to: email,
    subject: 'Verify your email',
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#3b5998"><img src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1645134414/logo_cs1si5.png" alt="" style="width:30px"><span>Action require: Activate your facebook account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently create an account on Facebook. To complete your registration, please confirm your account.</span></div><a href=${activate_url} style="display:block;width:200px;padding:10px 15px;color:#fff;background:#4c649b;text-decoration:none;font-weight:600;width:fit-content;margin-top:8px">Confirm your account</a><br><div><span style="color:#898f9c">Facebook allows you to stay in toucn with all your friends, once registered on facebook, you can share photos, organize events and much more.</span></div></div>`,
  };
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
