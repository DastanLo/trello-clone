import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    try {
      const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
      const user = new this.userModel({
        password: hash,
        username: createUserDto.username,
      });
      await user.save();
      return user;
    } catch (e) {
      throw new HttpException('such user exist', HttpStatus.BAD_REQUEST);
    }
  }

  async login(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.userModel.findOne({
      username: createUserDto.username,
    });
    if (!user) {
      throw new HttpException('no user found', HttpStatus.BAD_REQUEST);
    }
    const isMatch = await bcrypt.compare(createUserDto.password, user.password);
    if (!isMatch) {
      throw new HttpException(
        'username or password is not correct',
        HttpStatus.BAD_REQUEST,
      );
    }
    user.token = nanoid();
    await user.save();
    delete user.password;
    return user;
  }
}
