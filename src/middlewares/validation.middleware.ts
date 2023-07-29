import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';


export function handleInputErrors(req : Request, res : Response, next : NextFunction) {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array()});
  } else {
    next();
  }
}