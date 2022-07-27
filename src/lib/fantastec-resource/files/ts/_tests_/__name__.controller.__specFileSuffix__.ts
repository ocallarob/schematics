import { Test, TestingModule } from '@nestjs/testing';
import { LoggerModule, PinoLogger } from 'nestjs-pino';
import { <%= classify(name) %>Controller } from '../<%= name %>.controller';
import { <%= classify(name) %>Service } from '../<%= name %>.service';
import { Create<%= singular(classify(name)) %>Dto, Created<%= singular(classify(name)) %>Dto, Update<%= singular(classify(name)) %>Dto } from '../dto';
import {
  create<%= singular(classify(name)) %>DtoStub,
  created<%= singular(classify(name)) %>DtoStub,
  update<%= singular(classify(name)) %>DtoStub,
  updated<%= singular(classify(name)) %>DtoStub,
} from './stubs';

jest.mock('../<%= name %>.service');

describe('<%= classify(name) %>Controller', () => {
  let <%= lowercased(name) %>Controller: <%= classify(name) %>Controller;
  let <%= lowercased(name) %>Service: <%= classify(name) %>Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [<%= classify(name) %>Controller],
      providers: [<%= classify(name) %>Service, PinoLogger],
      imports: [
        LoggerModule.forRoot({
          pinoHttp: {
            name: 'fantastec-swap-api',
            level: 'fatal',
          },
        }),
      ],
    }).compile();

    <%= lowercased(name) %>Controller = module.get<<%= classify(name) %>Controller>(<%= classify(name) %>Controller);
    <%= lowercased(name) %>Service = module.get<<%= classify(name) %>Service>(<%= classify(name) %>Service);
  });

  describe(`create`, () => {
    const create<%= singular(classify(name)) %>: Create<%= singular(classify(name)) %>Dto = create<%= singular(classify(name)) %>DtoStub();

    describe(`when create is called`, () => {
      it(`should call <%= lowercased(name) %>Service`, async () => {
        await <%= lowercased(name) %>Controller.create(create<%= singular(classify(name)) %>);
        expect(<%= lowercased(name) %>Service.create).toHaveBeenCalledWith(create<%= singular(classify(name)) %>);
      });
      it(`should return a <%= singular(lowercased(name)) %>`, async () => {
        expect(<%= lowercased(name) %>Controller.create(create<%= singular(classify(name)) %>)).resolves.toEqual(
          created<%= singular(classify(name)) %>DtoStub(),
        );
      });
    });
  });

  describe(`findOne`, () => {
    describe(`when findOne is called`, () => {
      it(`should call <%= lowercased(name) %>Service`, async () => {
        await <%= lowercased(name) %>Controller.findOne(1);
        expect(<%= lowercased(name) %>Service.findOne).toHaveBeenCalledWith(1);
      });
      it(`should return a <%= singular(lowercased(name)) %>`, async () => {
        expect(
          <%= lowercased(name) %>Controller.findOne(created<%= singular(classify(name)) %>DtoStub().id),
        ).resolves.toEqual(created<%= singular(classify(name)) %>DtoStub());
      });
    });
  });

  describe(`findAll`, () => {
    describe(`when findAll is called`, () => {
      it(`should call <%= lowercased(name) %>Service`, async () => {
        await <%= lowercased(name) %>Controller.findAll();
        expect(<%= lowercased(name) %>Service.findAll).toHaveBeenCalled();
      });
      it(`should return a <%= singular(lowercased(name)) %> array`, async () => {
        expect(<%= lowercased(name) %>Controller.findAll()).resolves.toEqual([
          created<%= singular(classify(name)) %>DtoStub(),
        ]);
      });
    });
  });

  describe(`update`, () => {
    const created<%= singular(classify(name)) %>: Created<%= singular(classify(name)) %>Dto = created<%= singular(classify(name)) %>DtoStub();
    const update<%= singular(classify(name)) %>: Update<%= singular(classify(name)) %>Dto = update<%= singular(classify(name)) %>DtoStub();

    describe(`when update is called`, () => {
      it(`should call <%= lowercased(name) %>Service`, async () => {
        await <%= lowercased(name) %>Controller.update(created<%= singular(classify(name)) %>.id, update<%= singular(classify(name)) %>);
        expect(<%= lowercased(name) %>Service.update).toHaveBeenCalledWith(
          created<%= singular(classify(name)) %>.id,
          update<%= singular(classify(name)) %>,
        );
      });
      it(`should return a <%= singular(lowercased(name)) %>`, async () => {
        expect(
          <%= lowercased(name) %>Controller.update(created<%= singular(classify(name)) %>.id, update<%= singular(classify(name)) %>),
        ).resolves.toEqual(updated<%= singular(classify(name)) %>DtoStub());
      });
    });
  });

  describe(`remove`, () => {
    describe(`when remove is called`, () => {
      it(`should call <%= lowercased(name) %>Service`, async () => {
        await <%= lowercased(name) %>Controller.remove(created<%= singular(classify(name)) %>DtoStub().id);
        expect(<%= lowercased(name) %>Service.remove).toHaveBeenCalled();
      });
      it(`should return the deleted <%= singular(lowercased(name)) %>`, async () => {
        expect(
          <%= lowercased(name) %>Controller.remove(created<%= singular(classify(name)) %>DtoStub().id),
        ).resolves.toEqual(created<%= singular(classify(name)) %>DtoStub());
      });
    });
  });

  describe(`listGender`, () => {
    describe(`when listGender is called`, () => {
      it('should call <%= lowercased(name) %>Service - listGender', () => {
        <%= lowercased(name) %>Controller.listGender();
        expect(<%= lowercased(name) %>Service.listGender).toHaveBeenCalled();
      });
    });
  });
});
