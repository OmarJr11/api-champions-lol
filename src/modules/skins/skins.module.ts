import { Module } from '@nestjs/common';
import { SkinsService } from './skins.service';
import { SkinsController } from './skins.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Skin, SkinsSchema } from 'src/schemas/skin.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { 
          name: Skin.name, schema: SkinsSchema, 
        },
      ],
    ),
  ],
  controllers: [SkinsController],
  providers: [SkinsService]
})
export class SkinsModule {}
