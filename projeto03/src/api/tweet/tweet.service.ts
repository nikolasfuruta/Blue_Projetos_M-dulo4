/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Tweet } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Injectable()
export class TweetService {
  constructor(private readonly prisma: PrismaService) {}

  async create(info: CreateTweetDto): Promise<Tweet> {
    return await this.prisma.tweet.create({ data: info });
  }

  async findAll(): Promise<Tweet[]> {
    return await this.prisma.tweet.findMany();
  }

  async findOne(id: number): Promise<Tweet> {
    return await this.prisma.tweet.findUnique({ where: {id} });
  }

  async update(id: number, info: UpdateTweetDto): Promise<Tweet> {
    return await this.prisma.tweet.update(
      { where: { id }, data: info }
    );
  }

  async remove(id: number): Promise<Tweet> {
    return await this.prisma.tweet.delete({ where: {id} });
  }
}
