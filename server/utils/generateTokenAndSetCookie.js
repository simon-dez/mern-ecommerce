import jwt from 'jsonwebtoken';


// Generate token and set cookie
export const generateTokenAndSetCookie = (res, userId) => {
const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
expiresIn: '7d',
})
res.cookie('token', token, {
httpOnly: true, //cookie cannot be accessed by client side script-prevents XSS attacks
secure : process.env.NODE_ENV === 'production',
sameSite: "strict",//prevents CSRF attacks
maxAge: 7 * 24 * 60 * 60 * 1000, 
});
return token;
}
;
