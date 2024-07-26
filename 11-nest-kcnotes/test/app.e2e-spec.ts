import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { NotesService } from '../src/notes/notes.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  const mockNote = {
    id: '1',
    title: 'Test note',
    content: 'content of test note',
    userId: 'user-1',
  };

  const mockNotesService = {
    createNote: jest.fn().mockResolvedValue(mockNote),
    getNotes: jest.fn().mockResolvedValue([mockNote]),
    getNote: jest.fn().mockResolvedValue(mockNote),
    updateNote: jest.fn().mockResolvedValue(mockNote),
    deleteNote: jest.fn().mockResolvedValue(mockNote),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(NotesService)
      .useValue(mockNotesService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  const mockToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsejJuaDV3NzAwMDBqanRvaXlyMjZrNTciLCJpYXQiOjE3MjE5OTUxOTIsImV4cCI6MTcyMjU5OTk5Mn0.qak-oZTZir_zUmrnd7sRPBqStNOyoNs-PzY3aScP6MM';

  it('/notes (POST)', async () => {
    const createNotesDto = {
      title: 'Test note',
      content: 'content of test note',
    };
    const response = await request(app.getHttpServer())
      .post('/notes')
      .set('Authorization', `Bearer ${mockToken}`)
      .send(createNotesDto)
      .expect(201);
    expect(response.body).toEqual(mockNote);
  });

  it('/notes (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/notes')
      .expect(200);
    expect(response.body).toEqual([mockNote]);
  });

  it('/notes/:id (GET)', async () => {
    const noteId = '1';
    const response = await request(app.getHttpServer())
      .get(`/notes/${noteId}`)
      .set('Authorization', `Bearer ${mockToken}`)
      .expect(200);
    expect(response.body).toEqual(mockNote);
  });

  it('/notes/:id (PATCH)', async () => {
    const noteId = '1';
    const updateNoteDto = {
      title: 'Updated note',
      content: 'content of updated note',
    };
    const response = await request(app.getHttpServer())
      .patch(`/notes/${noteId}`)
      .send(updateNoteDto)
      .set('Authorization', `Bearer ${mockToken}`)
      .expect(200);
    expect(response.body).toEqual(mockNote);
  });

  it('/notes/:id (DELETE)', async () => {
    const noteId = '1';

    const response = await request(app.getHttpServer())
      .delete(`/notes/${noteId}`)
      .set('Authorization', `Bearer ${mockToken}`)
      .expect(200);

    expect(response.body).toEqual(mockNote);
  });
});
