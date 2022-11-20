import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionsModule } from './modules/champions/champions.module';
import { SkinsModule } from './modules/skins/skins.module';
require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.DATABASE}?retryWrites=true&w=majority`,
    ),
    //MongooseModule.forRoot(
    //  'mongodb://localhost/champions_lol',
    //),
    ChampionsModule,
    SkinsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
