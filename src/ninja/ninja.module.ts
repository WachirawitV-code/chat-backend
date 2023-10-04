import { Module } from '@nestjs/common';
import { NinjaService } from './ninja.service';
import { NinjaController } from './ninja.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [NinjaService],
  controllers: [NinjaController],
})
export class NinjaModule {}
