import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skin, SkinDocument } from 'src/schemas';
import { CreateSkinDto } from './dto/create-skin.dto';
import { UpdateSkinDto } from './dto/update-skin.dto';

@Injectable()
export class SkinsService {
  constructor(
    @InjectModel(Skin.name) private readonly skinModel: Model<SkinDocument>,
  ) {}
  
  /**
   * Create skin
   * @param {CreateSkinDto} data - data to create
   * @returns {Promise<Skin>}
   */
  async create(data: CreateSkinDto): Promise<Skin> {
    const skin = await this
      .skinModel
      .create(data)
      .catch(
        () => {
          throw new InternalServerErrorException({
            success: false,
            message: 'Failed to create skin',
          });
        }
      );
    return skin;
  }

  /**
   * Find skin by id 
   * @param {string} id 
   * @returns {Promise<Skin>}
   */
  async findOne(id: string): Promise<Skin> {
    const skin = await this
      .skinModel
      .findById({_id: id})
      .catch(() => {
        throw new InternalServerErrorException(
          {
            success: false,
            message: 'Skin not exist',
          }
        );
      });
    return skin;
  }

  /**
   * Find by champions
   * @param {string} champion - champion to search
   * @returns {Promise<Skin[]>}
   */
  async findAllByChampion(champion: string): Promise<Skin[]> {    
    const skins = await this.skinModel
    .aggregate(
      [
        {
          $lookup: {
            from: 'champions',
            localField: 'champion',
            foreignField: 'name',
            as: 'champion'
          }
        }
      ]
    )

    return skins;
  }

  /**
   * Update skin by id
   * @param {string} id - id skin
   * @param {UpdateSkinDto} data - data to update
   * @returns {Promise<Skin>}
   */
  async update(id: string, data: UpdateSkinDto): Promise<Skin> {
    await this.findOne(id);    
    await this
      .skinModel
      .findByIdAndUpdate({_id: id}, data)
      .catch(
        () => {
          throw new InternalServerErrorException(
            {
              success: false,
              message: 'Failed to update skin',
            }
          );
        }
      );
    return await this.findOne(id);
  }

  /**
   * Remove skin by id
   * @param {string} id - id skin
   * @returns {Promise<string>}
   */
  async remove(id: string): Promise<string> {
    await this.findOne(id);    
    await this
      .skinModel
      .findByIdAndDelete({_id: id})
      .catch(
        () => {
          throw new InternalServerErrorException(
            {
              success: false,
              message: 'Failed to create skin',
            }
          );
        }
      );
    return 'Skins Delete'
  }
}
