import { Module } from '@nestjs/common';
import { ChampionsService } from './champions.service';
import { ChampionsController } from './champions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Champion, ChampionsSchema } from '../../schemas';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { 
          name: Champion.name, schema: ChampionsSchema, 
        },
      ],
    ),
  ],
  controllers: [ChampionsController],
  providers: [ChampionsService]
})
export class ChampionsModule {}
