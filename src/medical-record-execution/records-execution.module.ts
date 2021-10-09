import { Module } from '@nestjs/common';
import { RecordsModule } from 'src/medical-record/records.module';
import { RecordsExecutionController } from './records-execution.controller';
import { RecordsExecutionService } from './records-execution.service';

@Module({
  imports: [RecordsModule],
  controllers: [RecordsExecutionController],
  providers: [RecordsExecutionService]
})
export class RecordsExecutionModule {}
