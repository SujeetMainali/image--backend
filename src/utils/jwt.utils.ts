import { DotenvConfig } from '../config/env.config';
import jwt from 'jsonwebtoken';

export class JwtUtils {
  static sign(payload: any, secret: string) {
    const expiresIn = DotenvConfig.ACCESS_TOKEN_EXPIRES_IN;
    return jwt.sign(payload, secret, {
      expiresIn,
    });
  }

  static verify(token: string, secret: string): any {
    return jwt.verify(token, secret);
  }
}
