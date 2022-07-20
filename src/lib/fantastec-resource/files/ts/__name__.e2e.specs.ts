import { HttpServer } from '@nestjs/common';
import * as request from 'supertest';

import { Created<%= singular(classify(name)) %>Dto } from '../../clcs/dto';
import {
  clearDb,
  create<%= singular(classify(name)) %>,
  create<%= singular(classify(name)) %>DtoStub,
  get<%= singular(classify(name)) %>,
  get<%= classify(name) %>,
  startTestApp,
  stopTestApp,
  stringifyDates,
} from '../utils';

const baseEndpoint = '/clcs';

describe(`${baseEndpoint}`, () => {
  let server: HttpServer;

  beforeAll(async () => {
    await clearDb();
    const app = await startTestApp();
    server = app.getHttpServer();
  });

  afterAll(async () => {
    await clearDb();
    await stopTestApp();
  });

  describe(`GET`, () => {
    describe(`when DB is empty`, () => {
      beforeAll(async () => {
        await clearDb();
      });

      it('should return empty array', async () => {
        return request(server).get(baseEndpoint).expect(200).expect([]);
      });
    });

    describe(`when DB has entries`, () => {
      beforeAll(async () => {
        await create<%= singular(classify(name)) %>();
      });

      it('should return the entries', async () => {
        const db<%= classify(name) %> = await get<%= classify(name) %>();
        expect(db<%= classify(name) %>.length).toBeGreaterThan(0);
        return request(server)
          .get(baseEndpoint)
          .expect(200)
          .expect((res) => expect(res.body.length).toBe(db<%= classify(name) %>.length));
      });
    });
  });

  describe(`POST`, () => {
    describe(`when data is sent`, () => {
      beforeAll(async () => {
        await clearDb();
      });

      it('should create and return the new DB entry', async () => {
        const existing<%= classify(name) %> = await get<%= classify(name) %>();
        expect(existing<%= classify(name) %>.length).toBe(0);
        await request(server)
          .post(baseEndpoint)
          .send(create<%= singular(classify(name)) %>DtoStub())
          .expect(201)
          .expect((res) => expect(res.body.id).toBeDefined());
        const db<%= classify(name) %> = await get<%= classify(name) %>();
        expect(db<%= classify(name) %>.length).toBeGreaterThan(0);
      });
    });
  });

  describe(`/{id}`, () => {
    describe(`GET`, () => {
      describe(`when id is not found`, () => {
        beforeAll(async () => {
          await clearDb();
        });

        it('should return 404 Not Found', async () => {
          return request(server).get(`${baseEndpoint}/1`).expect(404);
        });
      });

      describe(`when id exists`, () => {
        it('should return the entry', async () => {
          const db<%= singular(classify(name)) %> = await create<%= singular(classify(name)) %>();
          return request(server)
            .get(`${baseEndpoint}/${db<%= singular(classify(name)) %>.id}`)
            .expect(200)
            .expect((res) =>
              expect(res.body).toStrictEqual(stringifyDates(db<%= singular(classify(name)) %>)),
            );
        });
      });
    });

    describe(`PATCH`, () => {
      describe(`when id is not found`, () => {
        beforeAll(async () => {
          await clearDb();
        });

        it('should return 404 Not Found', async () => {
          return request(server).patch(`${baseEndpoint}/1`).expect(404);
        });
      });

      describe(`when data is sent`, () => {
        beforeAll(async () => {
          await create<%= singular(classify(name)) %>();
        });

        it('should update and return the updated DB entry', async () => {
          const name = 'T. Ester';
          const [existing<%= singular(classify(name)) %>] = await get<%= classify(name) %>();
          expect(existing<%= singular(classify(name)) %>.name).not.toBe(name);
          await request(server)
            .patch(`${baseEndpoint}/${existing<%= singular(classify(name)) %>.id}`)
            .send({ name })
            .expect(200)
            .expect((res) =>
              expect(res.body).toMatchObject<Created<%= singular(classify(name)) %>Dto>(
                stringifyDates({
                  ...existing<%= singular(classify(name)) %>,
                  name,
                }),
              ),
            );
          const updated<%= singular(classify(name)) %> = await get<%= singular(classify(name)) %>(existing<%= singular(classify(name)) %>.id);
          expect(updated<%= singular(classify(name)) %>.name).toBe(name);
        });
      });
    });

    describe(`DELETE`, () => {
      describe(`when id is not found`, () => {
        beforeAll(async () => {
          await clearDb();
        });

        it('should return 404 Not Found', async () => {
          return request(server).delete(`${baseEndpoint}/1`).expect(404);
        });
      });

      describe(`when data is sent`, () => {
        beforeAll(async () => {
          await create<%= singular(classify(name)) %>();
        });

        it('should update and return the updated DB entry', async () => {
          const [existing<%= singular(classify(name)) %>] = await get<%= classify(name) %>();
          await request(server)
            .delete(`${baseEndpoint}/${existing<%= singular(classify(name)) %>.id}`)
            .expect(200)
            .expect((res) =>
              expect(res.body).toMatchObject<Created<%= singular(classify(name)) %>Dto>(
                stringifyDates(existing<%= singular(classify(name)) %>),
              ),
            );
          const deleted<%= singular(classify(name)) %> = await get<%= singular(classify(name)) %>(existing<%= singular(classify(name)) %>.id);
          expect(deleted<%= singular(classify(name)) %>).toBe(null);
        });
      });
    });
  });
});
