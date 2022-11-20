import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Champion, ChampionDocument, Skin } from '../../schemas';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@Injectable()
export class ChampionsService {
  constructor(
    @InjectModel(Champion.name) private readonly championModel: Model<ChampionDocument>,
  ) {}

  /**
   * Create champion
   * @param {CreateChampionDto} data - data to create
   * @returns {Promise<Champion>}
   */
  async create(data: CreateChampionDto): Promise<Champion> {
    const champion = await this
      .championModel
      .create(data)
      .catch(
        () => {          
          throw new InternalServerErrorException({
            success: false,
            message: 'Failed to create champion',
          });
        }
      );
    return champion;
  }

  /**
   * Get all champions
   * @returns {Promise<Champion[]>}
   */
  async findAll(): Promise<Champion[]> {
    const champions = await this.championModel.find(
      {status: 'Active'},
    );
    return champions;
  }

  /**
   * Get champion by id
   * @param {string} id - champion id
   * @returns {Promise<Champion>}
   */
  async findOne(id: string): Promise<Champion> {
    const champion = await this
      .championModel
      .findById({_id: id})
      .catch(() => {
        throw new InternalServerErrorException(
          {
            success: false,
            message: 'Champion not exist',
          }
        );
      });
    return champion;
  }

  /**
   * Update champion 
   * @param {string} id - champion id
   * @param {UpdateChampionDto} data - data to update
   * @returns {Promise<Champion>}
   */
  async update(id: string, data: UpdateChampionDto): Promise<Champion> {
    await this.findOne(id);    
    await this
      .championModel
      .findByIdAndUpdate({_id: id}, data)
      .catch(
        () => {
          throw new InternalServerErrorException(
            {
              success: false,
              message: 'Failed to update champion',
            }
          );
        }
      );
    return await this.findOne(id);
  }

  /**
   * Add skin to a champion
   * @param {string} id 
   * @param {} skin 
   * @returns 
   */
  async addSkin(id: string, skin: Skin) {
    let champion = await this.championModel.findById(id); 
    champion.skins.push(skin); 
    await champion.save(); 
    return await this.championModel.findById(id);
  }

  /**
   * Remove champion 
   * @param {string} id - champion id
   * @returns {Promise<string>}
   */
  async remove(id: string): Promise<string> {
    await this.findOne(id);    
    await this
      .championModel
      .findByIdAndDelete({_id: id})
      .catch(
        () => {
          throw new InternalServerErrorException(
            {
              success: false,
              message: 'Failed to create champion',
            }
          );
        }
      );
    return 'Champions Delete'
  }
}

