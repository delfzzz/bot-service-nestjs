import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Bot } from './entities/bot.entity';

@ValidatorConstraint({ name: 'BotTaken', async: true })
@Injectable()
export class BotTakenRule implements ValidatorConstraintInterface {
  // https://dev.to/avantar/custom-validation-with-database-in-nestjs-gao
  async validate(name: string) {
    try {
      await Bot.findOneOrFail({ name });
    } catch (e) {
      return true;
    }
    return false;
  }

  defaultMessage(args: ValidationArguments) {
    return `Bot already exist`;
  }
}
