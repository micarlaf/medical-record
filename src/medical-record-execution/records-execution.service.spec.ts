import { Test, TestingModule } from '@nestjs/testing';
import { RecordsExecutionService } from './records-execution.service';


describe('RecordsExecutionService', () => {
  let service: RecordsExecutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordsExecutionService],
    }).compile();

    service = module.get<RecordsExecutionService>(RecordsExecutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
