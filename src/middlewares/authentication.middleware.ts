import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AppError } from '../utils/appError.utils';
import { JwtUtils } from '../utils/jwt.utils';
import { DotenvConfig } from '../config/env.config';
import { UserRole } from '../constants/enums';

class AuthMiddleware {
  async isAdmin(req: Request, res: Response, next: NextFunction) {
    let token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
      return next(new AppError('You are not authorized to access this site', StatusCodes.UNAUTHORIZED));
    }
    try {
      const decoded = await JwtUtils.verify(token, DotenvConfig.ACCESS_TOKEN_SECRET);

      if (decoded.role !== UserRole.ADMIN) {
        throw AppError.unauthorized('Get the hell out of here');
      }
      next();
    } catch (error) {
      return next(new AppError('You are not authorized to access this resource', StatusCodes.UNAUTHORIZED));
    }
  }
}

export default new AuthMiddleware();