import { NextFunction, Request, Response } from 'express';
import { DotenvConfig } from '../config/env.config';

import { Message } from '../utils/responseMessage.utils';
import { Environment } from '../constants/enums';

const ErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.debug('Error Handler');
  console.error(error);

  let statusCode = 500;

  let data = {
    success: false,
    message: Message.server,
    data: [],
    ...(DotenvConfig.NODE_ENV === Environment.DEVELOPMENT && {
      originalError: error.message,
    }),
  };
  if (error.isCustom) {
    statusCode = error.statusCode;
    data = {
      ...data,
      message: error.message,
    };
  }
  return res.status(statusCode).json(data);
};

export default ErrorHandler;
