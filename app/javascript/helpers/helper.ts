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

export const formatDate = (date: Date) => {
  const YYYY = date.getFullYear();
  const MM = `0${date.getMonth() + 1}`.slice(-2);
  const DD = `0${date.getDate()}`.slice(-2);

  return `${YYYY}-${MM}-${DD}`;
};
