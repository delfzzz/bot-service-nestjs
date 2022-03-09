import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, Validate } from 'class-validator';
import { BotTakenRule } from '../bots.validations';

export class CreateBotDto {
  @ApiProperty({
    description: 'Name of the bot.',
  })
  @IsNotEmpty()
  @IsString()
  @Length(4)
  @Validate(BotTakenRule)
  name: string;

  @ApiProperty({
    description: 'Purpose of the bot.',
  })
  @IsNotEmpty()
  @IsString()
  @Length(5)
  purpose: string;
}
