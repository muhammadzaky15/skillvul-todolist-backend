import jwt from "jsonwebtoken";
import moment, { Moment } from "moment";

export interface TokenResponse {
  token: string;
  expires: Date;
}

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

const salt = "123abcd";

const generateToken = (
  user: User,
  expires: Moment,
  secret = salt
): string => {
  const payload = {
    user: user,
    iat: moment().unix(),
    exp: expires.unix(),
  };
  return jwt.sign(payload, secret);
};

export const generateAuthTokens = async (user: User): Promise<TokenResponse> => {
  const accessTokenExpires = moment().add(1440, "minutes");
  const accessToken = generateToken(user, accessTokenExpires, salt);
  return {
    token: accessToken,
    expires: accessTokenExpires.toDate(),
  };
};