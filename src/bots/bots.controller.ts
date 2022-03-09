import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { EntityNotFoundError } from 'typeorm';
import { BotsService } from './bots.service';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { Bot } from './entities/bot.entity';

@Controller('bots')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('bots')
export class BotsController {
  constructor(private readonly botsService: BotsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a bot' })
  @ApiResponse({ status: 201, type: Bot })
  @ApiResponse({ status: 400, description: 'Bot already exist.' })
  async create(@Body() createBotDto: CreateBotDto) {
    return await this.botsService.create(createBotDto);
  }

  @Get()
  @ApiResponse({ status: 200, type: [Bot] })
  findAll() {
    return this.botsService.findAll();
  }

  @Get(':hashid')
  @ApiParam({
    name: 'hashid',
    required: true,
    description: "hashid of the bot you're looking for.",
  })
  @ApiResponse({ status: 200, type: Bot })
  @ApiNotFoundResponse()
  async findOne(@Param('hashid') hashid: string) {
    try {
      return await this.botsService.findOne(hashid);
    } catch (e) {
      if (e instanceof EntityNotFoundError) {
        throw new HttpException('', HttpStatus.NOT_FOUND);
      }
    }
  }

  @Patch(':hashid')
  @ApiParam({
    name: 'hashid',
    required: true,
    description: "hashid of the bot you're updating.",
  })
  @ApiOkResponse()
  @ApiResponse({ status: 400, description: 'Bot already exist.' })
  async update(
    @Param('hashid') hashid: string,
    @Body() updateBotDto: UpdateBotDto,
  ) {
    try {
      return await this.botsService.update(hashid, updateBotDto);
    } catch (e) {
      if (e instanceof EntityNotFoundError) {
        throw new HttpException('', HttpStatus.NOT_FOUND);
      }
    }
  }

  @Delete(':hashid')
  @ApiParam({
    name: 'hashid',
    required: true,
    description: "hashid of the bot you're deleting.",
  })
  @ApiOkResponse()
  remove(@Param('hashid') hashid: string) {
    return this.botsService.remove(hashid);
  }
}
