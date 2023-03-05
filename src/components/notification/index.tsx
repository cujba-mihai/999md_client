import React from 'react';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import baseConfig from './baseConfig';

interface INotificationProps {
    message: React.ReactNode;
    type: 'info' | 'success' | 'error' | 'warning' | 'default';
    config?: ToastOptions;
}

const notification = ({ message, type, config = {} }: INotificationProps) => {

    const configuration = {
        ...baseConfig,
        ...config,
    }

    // toast.default() is not a function
    if(type !== 'default') {
        return toast[type](message, configuration)
    }

    return toast(message, configuration);
};

export default notification;