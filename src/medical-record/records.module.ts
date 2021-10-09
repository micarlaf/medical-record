import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { RecordsController } from './records.controller';
import { RecordsRepository } from './records.repository';
import { RecordsService } from './records.service';


@Module({
  imports: [
  TypeOrmModule.forFeature([RecordsRepository]),
  AuthModule
  ],
  controllers: [RecordsController],
  providers: [RecordsService],
  exports: [RecordsService]
})
export class RecordsModule {}
