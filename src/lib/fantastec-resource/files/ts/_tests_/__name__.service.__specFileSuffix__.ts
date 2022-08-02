import { Test, TestingModule } from '@nestjs/testing';

import { LoggerModule } from 'nestjs-pino';
import { <%= classify(name) %>Repository } from '../<%= name %>.repository';
import { <%= classify(name) %>Service } from '../<%= name %>.service';
import { Create<%= singular(classify(name)) %>Dto, Created<%= singular(classify(name)) %>Dto, Update<%= singular(classify(name)) %>Dto } from '../dto';
import {
  create<%= singular(classify(name)) %>DtoStub,
  created<%= singular(classify(name)) %>DtoStub,
  update<%= singular(classify(name)) %>DtoStub,
  updated<%= singular(classify(name)) %>DtoStub,
} from './stubs';

jest.mock('../<%= name %>.repository');

describe('<%= classify(name) %>Service', () => {
  let <%= lowercased(name) %>Service: <%= classify(name) %>Service;
  let <%= lowercased(name) %>Repo: <%= classify(name) %>Repository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [<%= classify(name) %>Service],
      providers: [<%= classify(name) %>Repository],
      imports: [
        LoggerModule.forRoot({
          pinoHttp: {
            name: 'fantastec-swap-api',
            level: 'fatal',
          },
        }),
      ],
    }).compile();

    <%= lowercased(name) %>Service = module.get<<%= classify(name) %>Service>(<%= classify(name) %>Service);
    <%= lowercased(name) %>Repo = module.get<<%= classify(name) %>Repository>(<%= classify(name) %>Repository);
  });

  describe(`create`, () => {
    const create<%= singular(classify(name)) %>: Create<%= singular(classify(name)) %>Dto = create<%= singular(classify(name)) %>DtoStub();

    describe(`when create is called`, () => {
      it(`should call <%= lowercased(name) %>Repo`, async () => {
        await <%= lowercased(name) %>Service.create(create<%= singular(classify(name)) %>);
        expect(<%= lowercased(name) %>Repo.create).toHaveBeenCalledWith(create<%= singular(classify(name)) %>);
      });
      it(`should return a <%= singular(lowercased(name)) %>`, async () => {
        expect(<%= lowercased(name) %>Service.create(create<%= singular(classify(name)) %>)).resolves.toEqual(
          created<%= singular(classify(name)) %>DtoStub(),
        );
      });
    });
  });

  describe(`findOne`, () => {
    describe(`when findOne is called`, () => {
      it(`should call <%= lowercased(name) %>Repo`, async () => {
        await <%= lowercased(name) %>Service.findOne(1);
        expect(<%= lowercased(name) %>Repo.findById).toHaveBeenCalledWith(1);
      });
      it(`should return a <%= singular(lowercased(name)) %>`, async () => {
        expect(
          <%= lowercased(name) %>Service.findOne(created<%= singular(classify(name)) %>DtoStub().id),
        ).resolves.toEqual(created<%= singular(classify(name)) %>DtoStub());
      });
    });
  });

  describe(`findAll`, () => {
    describe(`when findAll is called`, () => {
      it(`should call <%= lowercased(name) %>Repo`, async () => {
        await <%= lowercased(name) %>Service.findAll();
        expect(<%= lowercased(name) %>Repo.find).toHaveBeenCalled();
      });
      it(`should return a <%= singular(lowercased(name)) %> array`, async () => {
        expect(<%= lowercased(name) %>Service.findAll()).resolves.toEqual([
          created<%= singular(classify(name)) %>DtoStub(),
        ]);
      });
    });
  });

  describe(`update`, () => {
    const created<%= singular(classify(name)) %>: Created<%= singular(classify(name)) %>Dto = created<%= singular(classify(name)) %>DtoStub();
    const update<%= singular(classify(name)) %>: Update<%= singular(classify(name)) %>Dto = update<%= singular(classify(name)) %>DtoStub();

    describe(`when update is called`, () => {
      it(`should call <%= lowercased(name) %>Repo`, async () => {
        await <%= lowercased(name) %>Service.update(created<%= singular(classify(name)) %>.id, update<%= singular(classify(name)) %>);
        expect(<%= lowercased(name) %>Repo.updateById).toHaveBeenCalledWith(
          created<%= singular(classify(name)) %>.id,
          update<%= singular(classify(name)) %>,
        );
      });
      it(`should return a <%= singular(lowercased(name)) %>`, async () => {
        expect(
          <%= lowercased(name) %>Service.update(created<%= singular(classify(name)) %>.id, update<%= singular(classify(name)) %>),
        ).resolves.toEqual(updated<%= singular(classify(name)) %>DtoStub());
      });
    });
  });

  describe(`remove`, () => {
    describe(`when remove is called`, () => {
      it(`should call <%= lowercased(name) %>Repo`, async () => {
        await <%= lowercased(name) %>Service.remove(created<%= singular(classify(name)) %>DtoStub().id);
        expect(<%= lowercased(name) %>Repo.deleteById).toHaveBeenCalled();
      });
      it(`should return the deleted <%= singular(lowercased(name)) %>`, async () => {
        expect(
          <%= lowercased(name) %>Service.remove(created<%= singular(classify(name)) %>DtoStub().id),
        ).resolves.toEqual(created<%= singular(classify(name)) %>DtoStub());
      });
    });
  });
});
