import { created<%= singular(classify(name)) %>DtoStub } from '../_tests_/stubs';

export const <%= classify(name) %>Service = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(created<%= singular(classify(name)) %>DtoStub()),
  findOne: jest.fn().mockResolvedValue(created<%= singular(classify(name)) %>DtoStub()),
  findAll: jest.fn().mockResolvedValue([created<%= singular(classify(name)) %>DtoStub()]),
  update: jest.fn().mockResolvedValue(created<%= singular(classify(name)) %>DtoStub()),
  remove: jest.fn().mockResolvedValue(created<%= singular(classify(name)) %>DtoStub()),
});
