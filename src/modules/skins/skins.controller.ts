import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SkinsService } from './skins.service';
import { CreateSkinDto } from './dto/create-skin.dto';
import { UpdateSkinDto } from './dto/update-skin.dto';

@Controller('skins')
export class SkinsController {
  constructor(private readonly skinsService: SkinsService) {}

  @Post()
  async create(@Body() createSkinDto: CreateSkinDto) {
    return {
      success: true,
      message: 'Skin create',
      skin: await this.skinsService.create(createSkinDto)
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      success: true,
      message: 'Skin found',
      skin: await this.skinsService.findOne(id)
    };
  }

  @Get('champion/:champion')
  async findAllByChampion(@Param('champion') champion: string) {
    return {
      success: true,
      message: 'Skins found',
      skins: await this.skinsService.findAllByChampion(champion)
    };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSkinDto: UpdateSkinDto) {
    return {
      success: true,
      message: 'Skin updated',
      skin: await this.skinsService.update(id, updateSkinDto)
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return {
      success: true,
      message: 'Skin removed',
      skin: await this.skinsService.remove(id)
    };
  }
}
