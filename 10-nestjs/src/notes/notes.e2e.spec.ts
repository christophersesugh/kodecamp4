import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';
import * as request from 'supertest';

describe('Notes', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('/notes (GET)', async () => {
    const res = await request(app.getHttpServer())
      .get('/notes')
      .expect(200)
      .expect([
        {
          id: 1,
          title: 'first note',
          description: 'first note desc',
        },
        {
          id: 2,
          title: 'second note',
          description: 'second note desc',
        },
      ]);
    return res;
  });

  afterAll(async () => {
    await app.close();
  });
});
