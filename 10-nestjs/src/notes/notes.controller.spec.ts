import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

describe('NotesController', () => {
  let notesController: NotesController;
  let notesService: NotesService;

  beforeEach(() => {
    notesService = new NotesService();
    notesController = new NotesController(notesService);
  });

  describe('getNotes', () => {
    it('should return an array of notes', () => {
      const notes = [
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

      jest.spyOn(notesService, 'getNotes').mockImplementation(() => notes);
      expect(notesController.getNotes()).toBe(notes);
    });

    it('getNote', () => {
      const note = {
        id: 1,
        title: 'first note',
        description: 'first note desc',
      };

      jest.spyOn(notesService, 'getNote').mockImplementation(() => note);
      expect(notesService.getNote(1)).toBe(note);
    });
  });
});
