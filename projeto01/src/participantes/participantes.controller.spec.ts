import { Test, TestingModule } from '@nestjs/testing';
import { ParticipantesController } from './participantes.controller';
import { ParticipantesService } from './participantes.service';

describe('ParticipantesController', () => {
  let controller: ParticipantesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParticipantesController],
      providers: [ParticipantesService],
    }).compile();

    controller = module.get<ParticipantesController>(ParticipantesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
