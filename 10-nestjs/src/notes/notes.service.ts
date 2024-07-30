import { Injectable } from '@nestjs/common';
import { Note } from './interfaces/note.interface';

@Injectable()
export class NotesService {
  private readonly notes: Note[] = [
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
  ];

  getNotes() {
    return this.notes;
  }

  getNote(id: number) {
    return this.notes.find((note) => note.id === Number(id));
  }

  createNote(note: Note) {
    return this.notes.push(note);
  }
}
