import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, Validate } from 'class-validator';
import { BotTakenRule } from '../bots.validations';
import { CreateBotDto } from './create-bot.dto';

export class UpdateBotDto extends PartialType(CreateBotDto) {
  @ApiProperty({
    description: 'Name of the bot.',
  })
  @IsString()
  @Length(4)
  @Validate(BotTakenRule)
  name?: string;

  @ApiProperty({
    description: 'Purpose of the bot.',
  })
  @IsString()
  @Length(5)
  purpose?: string;
}
