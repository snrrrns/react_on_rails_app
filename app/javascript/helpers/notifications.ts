import { toast, Flip, ToastOptions } from 'react-toastify';

const defaults: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Flip,
};

export const success = (message: string, options?: ToastOptions) => {
  toast.success(message, Object.assign(defaults, options));
};

export const info = (message: string, options?: ToastOptions) => {
  toast.info(message, Object.assign(defaults, options));
};

export const warn = (message: string, options?: ToastOptions) => {
  toast.warn(message, Object.assign(defaults, options));
};

export const error = (message: string, options?: ToastOptions) => {
  toast.error(message, Object.assign(defaults, options));
};
