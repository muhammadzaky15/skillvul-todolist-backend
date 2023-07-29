import passport from 'passport';
import passportJWT from 'passport-jwt';
import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const prisma = new PrismaClient();
const salt = "123abcd";

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: salt
}, async (jwtPayload, cb) => {
  try {
    return cb(null, jwtPayload.user);
  } catch (err) {
    return cb(err);
  }
}));

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: any, user: any) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = user;
    next();
  })(req, res, next);
};

export default authenticateJWT;