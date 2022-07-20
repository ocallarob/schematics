import { HttpServer } from '@nestjs/common';
import * as request from 'supertest';

// TODO: Check is correct
const baseEndpoint = '/<%= lowercased(name) %>';

describe(`${baseEndpoint}`, () => {
  let server: HttpServer;

  beforeAll(async () => {
    // TODO: Global Set Up
    // await clearDb();
    // const app = await startTestApp();
    // server = app.getHttpServer();
  });

  afterAll(async () => {
    // TODO: Global Tear Down
    // await clearDb();
    // await stopTestApp();
  });

  describe(`GET`, () => {
    describe(`when DB is empty`, () => {
      beforeAll(async () => {
        // TODO: Set Up
      });

      it('should return empty array', async () => {
        // TODO: Write Test
        // return request(server).get(baseEndpoint).expect(200).expect([]);
      });
    });

    describe(`when DB has entries`, () => {
      beforeAll(async () => {
        // TODO: Set Up
      });

      it('should return the entries', async () => {
        // TODO: Write Test
        // return request(server)
        //   .get(baseEndpoint)
        //   .expect(200)
        //   .expect((res) => expect(res.body.length).not.toBe(0));
      });
    });
  });

  describe(`POST`, () => {
    describe(`when data is sent`, () => {
      beforeAll(async () => {
        // TODO: Set Up
      });

      it('should create and return the new DB entry', async () => {
        // TODO: Write Test
        // await request(server)
        //   .post(baseEndpoint)
        //   .send(create<%= singular(classify(name)) %>Dto)
        //   .expect(201)
      });

      describe(`when data is incorrect`, () => {
        beforeAll(async () => {
          // TODO: Set Up
        });

        it('should return 400 Bad Request', async () => {
          // TODO: Write Test
          // await request(server)
          //   .post(baseEndpoint)
          //   .send(bad<%= singular(classify(name)) %>Dto)
          //   .expect(400)
        });
      });
    });
  });

  describe(`/{id}`, () => {
    describe(`GET`, () => {
      describe(`when id is not found`, () => {
        beforeAll(async () => {
          // TODO: Set Up
        });

        it('should return 404 Not Found', async () => {
          // TODO: Write Test
          // return request(server).get(`${baseEndpoint}/1234`).expect(404);
        });
      });

      describe(`when id exists`, () => {
        beforeAll(async () => {
          // TODO: Set Up
        });

        it('should return the entry', async () => {
          // TODO: Write Test
          // return request(server)
          // .get(`${baseEndpoint}/${id}`)
          // .expect(200)
        });
      });
    });

    describe(`PATCH`, () => {
      describe(`when id is not found`, () => {
        beforeAll(async () => {
          // TODO: Set Up
        });

        it('should return 404 Not Found', async () => {
          // TODO: Write Test
          // return request(server).patch(`${baseEndpoint}/1234`).expect(404);
        });
      });

      describe(`when data is sent`, () => {
        beforeAll(async () => {
          // TODO: Set Up
        });

        it('should update and return the updated DB entry', async () => {
          // TODO: Write Test
          // await request(server)
          //   .patch(`baseEndpoint/${id}`)
          //   .send(update<%= singular(classify(name)) %>Dto)
          //   .expect(200)
        });

        describe(`when data is incorrect`, () => {
          beforeAll(async () => {
            // TODO: Set Up
          });

          it('should return 400 Bad Request', async () => {
            // TODO: Write Test
            // await request(server)
            //   .patch(`baseEndpoint/${id}`)
            //   .send(bad<%= singular(classify(name)) %>Dto)
            //   .expect(400)
          });
        });
      });
    });

    describe(`DELETE`, () => {
      describe(`when id is not found`, () => {
        beforeAll(async () => {
          // TODO: Set Up
        });

        it('should return 404 Not Found', async () => {
          // TODO: Write Test
          // return request(server).delete(`${baseEndpoint}/1234`).expect(404);
        });
      });

      describe(`when data is sent`, () => {
        beforeAll(async () => {
          // TODO: Set Up
        });

        it('should update and return the updated DB entry', async () => {
          // TODO: Write Test
          // await request(server)
          // .delete(`${baseEndpoint}/${id}`)
          // .expect(200)
        });
      });
    });
  });
});
