import { Injectable } from '@nestjs/common';
import Hashids from 'hashids/cjs/hashids';
import { Connection } from 'typeorm';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { Bot } from './entities/bot.entity';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';

@Injectable()
export class BotsService {
  constructor(private connection: Connection) {}

  async create(createBotDto: CreateBotDto): Promise<Bot> {
    return await this.connection.transaction(async (manager) => {
      const newBot = new Bot();
      newBot.name = createBotDto.name;
      newBot.purpose = createBotDto.purpose;

      await manager.save(newBot);

      const hashids = new Hashids(
        '',
        10,
        'abcdefghijklmnopqrstuvwxyz0123456789',
      );
      // create the hashid from the db id
      newBot.hashid = hashids.encode(newBot.id);

      let svg = createAvatar(style, {
        seed: newBot.hashid,
      });

      await manager.update(Bot, newBot.id, {
        hashid: newBot.hashid,
        image: svg,
      });

      return newBot;
    });
  }

  findAll() {
    // TODO: implement pagination
    return Bot.find();
  }

  async findOne(hashid: string): Promise<Bot> {
    const bot = await Bot.findOneOrFail({ hashid });

    return bot;
  }

  async update(hashid: string, updateBotDto: UpdateBotDto) {
    return await this.connection.transaction(async (manager) => {
      const bot = await manager.findOneOrFail(Bot, { hashid });
      await manager.update(Bot, { id: bot.id }, updateBotDto);
    });
  }

  async remove(hashid: string) {
    Bot.delete({ hashid });
  }
}
