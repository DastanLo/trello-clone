import {HttpException, HttpStatus, Injectable, Req, Res} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../models/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { nanoid } from 'nanoid';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto): Promise<any> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    try {
      const user = new this.userModel({
        password: hash,
        username: createUserDto.username,
      });
      await user.save();
    } catch (e) {
      return new HttpException('Such user exist', HttpStatus.BAD_REQUEST);
    }
    return { message: 'success' };
  }
  async login(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.userModel.findOne({
      username: createUserDto.username,
    });
    if (!user) {
      return null;
    }
    const isMatch = await bcrypt.compare(createUserDto.password, user.password);
    if (!isMatch) {
      return { error: 'password or username is not correct' };
    }
    user.token = nanoid();
    delete user.password;
    return user;
  }
}
