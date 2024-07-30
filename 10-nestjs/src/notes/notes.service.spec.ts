import { Test, TestingModule } from '@nestjs/testing';
import { NotesService } from './notes.service';

describe('NotesService', () => {
  let service: NotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesService],
    }).compile();

    service = module.get<NotesService>(NotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of notes', () => {
    expect(service.getNotes()).toEqual([
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
  });

  it('should create a note', () => {
    expect(
      service.createNote({
        id: 3,
        title: 'third note',
        description: 'third note desc',
      }),
    ).toEqual(3);
  });
});
