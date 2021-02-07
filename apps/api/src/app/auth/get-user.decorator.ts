import { createParamDecorator, UnauthorizedException } from '@nestjs/common';
import jwt_decode from 'jwt-decode';
import { GetUserDTO } from './auth.dto';

export const GetUser = createParamDecorator(
  (data, req): GetUserDTO => {
    if (req.args[0].headers.authorization) {
      let token = req.args[0].headers.authorization.split(' ')[1];
      if (token) {
        let decoded: any = jwt_decode(token);
        if (decoded) {
          return { username: decoded.username, roleID: decoded.roleID };
        } else {
          return null;
        }
      } else {
        throw new UnauthorizedException('Invalid Credential !');
      }
    } else {
      throw new UnauthorizedException('Invalid Credential !');
    }
  }
);
