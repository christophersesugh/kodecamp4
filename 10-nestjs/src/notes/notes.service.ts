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

  createNote(note: Note) {
    this.notes.push(note);
  }
}
