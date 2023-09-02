import { EventParams, FormErrors } from '../types';

export const isEmptyObject = (obj: FormErrors) => Object.keys(obj).length === 0;

export const validateEvent = (event: EventParams) => {
  const errors: FormErrors = {};

  Object.keys(event).forEach((key) => {
    if (event[key as keyof EventParams] === '') {
      errors[key as keyof FormErrors] = `You must enter a ${key}`;
    }
  });

  return errors;
};
