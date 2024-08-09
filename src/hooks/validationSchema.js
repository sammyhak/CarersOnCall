import Joi from 'joi';

export const validationSchema = Joi.object({
  firstname: Joi.string().min(1).required().label('First Name'),
  lastname: Joi.string().min(1).required().label('Last Name'),
  email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
  phone: Joi.number().required().label('Phone'),
//   date: Joi.date().required().label('Date'),
//   time: Joi.string().required().label('Time'),
  message: Joi.string().optional().label('Message')
});
