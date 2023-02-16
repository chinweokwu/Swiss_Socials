import {body} from 'express-validator';
 
export const signupValidation = [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required').isLength({ min: 6 }),
  body('firstName').notEmpty().withMessage('FirstName is required'),
  body('lastName').notEmpty().withMessage('LastName is required'),
  body('email').notEmpty().withMessage('Email is required').isEmail().normalizeEmail({ gmail_remove_dots: true })
]
 
export const loginValidation = [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required')
]