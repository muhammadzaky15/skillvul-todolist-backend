import { body, ValidationChain } from 'express-validator';

export const userValidators: ValidationChain[]= [
    body('name').notEmpty().withMessage('Nama harus diisi'),
    body('email').isEmail().withMessage('Invalid email'),
]

export const productValidators: ValidationChain[] = [
  body('name').notEmpty().withMessage('Nama harus diisi'),
  body('price').isFloat({ min: 0 }).withMessage('Harga harus angka positif'),
  body('satuan').notEmpty().withMessage('satuan harus diisi'),
];
