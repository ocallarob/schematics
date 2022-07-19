import { Gender } from '@prisma/client';
import { createdAthleteDtoStub } from '../__tests__/stubs';

export const AthletesRepository = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(createdAthleteDtoStub()),
  findOne: jest.fn().mockResolvedValue(createdAthleteDtoStub()),
  findById: jest.fn().mockResolvedValue(createdAthleteDtoStub()),
  find: jest.fn().mockResolvedValue([createdAthleteDtoStub()]),
  update: jest.fn().mockResolvedValue(createdAthleteDtoStub()),
  updateById: jest.fn().mockResolvedValue(createdAthleteDtoStub()),
  delete: jest.fn().mockResolvedValue(createdAthleteDtoStub()),
  deleteById: jest.fn().mockResolvedValue(createdAthleteDtoStub()),
  listGender: jest.fn().mockReturnValue(Object.keys(Gender)),
});
