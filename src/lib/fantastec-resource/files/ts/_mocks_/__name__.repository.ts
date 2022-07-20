import { created<%= singular(classify(name)) %>DtoStub } from '../__tests__/stubs';

export const <%= classify(name) %>Repository = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(created<%= singular(classify(name)) %>DtoStub()),
  findById: jest.fn().mockResolvedValue(created<%= singular(classify(name)) %>DtoStub()),
  find: jest.fn().mockResolvedValue([created<%= singular(classify(name)) %>DtoStub()]),
  updateById: jest.fn().mockResolvedValue(created<%= singular(classify(name)) %>DtoStub()),
  deleteById: jest.fn().mockResolvedValue(created<%= singular(classify(name)) %>DtoStub()),
});
