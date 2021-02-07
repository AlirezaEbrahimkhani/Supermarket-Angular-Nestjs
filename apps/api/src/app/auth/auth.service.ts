import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseData } from '../shared/response.model';
import { RegisterDto, LoginDto, JwtPayload } from './auth.dto';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async register(authCredentialsDto: RegisterDto): Promise<ResponseData> {
    const { username, password, roleID } = authCredentialsDto;
    let userExisting = await this.findUser(username);
    if (userExisting) {
      return {
        Data: [],
        Message: 'Username Already Taken ... !',
        Success: false,
      };
    } else {
      let salt = await bcrypt.genSalt();
      let pass = await this.hashPassword(password, salt);
      const newUser = new this.userModel({
        username,
        password: pass,
        roleID,
        salt,
      });
      await newUser.save();
      return { Data: [], Message: '', Success: true };
    }
  }

  async login(loginDTO: LoginDto): Promise<{ accessToken }> {
    const user: User = await this.validateUserPassword(loginDTO);
    if (!user) {
      throw new UnauthorizedException('invalid credential !');
    }
    const { username, roleID } = user[0];
    const payload: JwtPayload = { username, roleID };
    console.log(payload);
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken };
  }

  async findUser(username: string): Promise<boolean> {
    let user;
    user = await this.userModel.find({ username }).exec();
    if (user.length != 0) {
      return true;
    } else {
      return false;
    }
  }

  async validateUserPassword(loginDTO: LoginDto): Promise<any> {
    const { username, password } = loginDTO;
    let user;
    user = await this.userModel.find({ username }).exec();
    if (user.length != 0) {
      let result = await this.validatePassword(user, password);
      if (result) return user;
      else return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async validatePassword(user: User, password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, user[0].salt);
    return hash === user[0].password;
  }
}
