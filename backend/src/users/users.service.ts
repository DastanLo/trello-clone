import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../models/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async getAll(): Promise<Array<UserDocument>> {
    return this.userModel.find().exec();
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    const user = new this.userModel({
      password: hash,
      username: createUserDto.username,
    });
    return user.save();
  }
  async login(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.userModel.findOne({
      username: createUserDto.username,
    });
    if (!user) {
      return new Error('no user found');
    }
    const isMatch = await bcrypt.compare(createUserDto.password, user.password);
    if (!isMatch) {
      return new Error('Wrong password');
    }

  }
}
