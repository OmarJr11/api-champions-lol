import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { Skin } from 'src/schemas';
import { ChampionsService } from './champions.service';
import { AddSkinDto } from './dto/add-skin.dto';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@Controller('champions')
export class ChampionsController {
  constructor(private readonly championsService: ChampionsService) {}

  @Post()
  async create(@Body() createChampionDto: CreateChampionDto) {
    return {
        status: true,
        message: 'Champion Saved',
        champion: await this.championsService.create(createChampionDto)
    };
  }

  @Get()
  async findAll() {
    return {
      status: true,
      message: 'Champion found',
      champions: await this.championsService.findAll()
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      status: true,
      message: 'Champion found',
      champion: await this.championsService.findOne(id)
    };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateChampionDto: UpdateChampionDto) {
    return {
      status: true,
      message: 'Champion updated',
      champion: await this.championsService.update(id, updateChampionDto)
    };
  }

  @Put('add-skin/:id')
  async addSkin(@Param('id') id: string, @Body() addSkinDto: Skin) {
    return {
      status: true,
      message: 'Skin added',
      champion: await this.championsService.addSkin(id, addSkinDto)
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return {
      status: true,
      message: await this.championsService.remove(id)
    };
  }
}
