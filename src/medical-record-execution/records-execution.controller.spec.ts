import { Test, TestingModule } from '@nestjs/testing';
import { RecordsExecutionController } from './records-execution.controller';

describe('RecordsExecutionController', () => {
  let controller: RecordsExecutionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordsExecutionController],
    }).compile();

    controller = module.get<RecordsExecutionController>(RecordsExecutionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
