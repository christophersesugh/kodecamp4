import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNoteDTS } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { Note } from './interfaces/note.interface';

@Controller('notes')
export class NotesController {
  constructor(private readonly noteService: NotesService) {}
  @Post()
  async createNote(@Body() createNoteDto: CreateNoteDTS): Promise<void> {
    this.noteService.createNote(createNoteDto);
  }

  @Get()
  getNotes(): Note[] {
    return this.noteService.getNotes();
  }

  @Get(':id')
  getNote(@Param('id') id: string) {
    return `This note has an id of ${id}`;
  }

  @Patch()
  updateNote() {
    return 'this updates notes';
  }

  @Delete()
  deleteNote() {
    return 'this delete a note';
  }
}
