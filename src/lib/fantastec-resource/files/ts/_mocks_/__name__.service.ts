import { Gender } from '@prisma/client';
import { createdAthleteDtoStub } from '../__tests__/stubs';

export const AthletesService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(createdAthleteDtoStub()),
  findOne: jest.fn().mockResolvedValue(createdAthleteDtoStub()),
  findAll: jest.fn().mockResolvedValue([createdAthleteDtoStub()]),
  update: jest.fn().mockResolvedValue(createdAthleteDtoStub()),
  remove: jest.fn().mockResolvedValue(createdAthleteDtoStub()),
  listGender: jest.fn().mockReturnValue(Object.keys(Gender)),
});
