import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { JwtAuthGuard } from '../auth/auth.guard';
import { CreateNoteDto } from './dto/create-note.dto';
import { Request } from 'express';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  async createNote(@Body() note: CreateNoteDto, @Req() req: Request) {
    const userId = (req as any).user.id;
    return await this.notesService.createNote(note, userId);
  }

  @Get()
  async getNotes() {
    return this.notesService.getNotes();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getNote(@Param('id') id: string, @Req() req: Request) {
    const userId = (req as any).user.id;
    return await this.notesService.getNote(id, userId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateNote(
    @Body() note: CreateNoteDto,
    @Req() req: Request,
    @Param('id') id: string,
  ) {
    const userId = (req as any).user.id;
    return await this.notesService.updateNote(note, id, userId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteNote(@Param('id') id: string, @Req() req: Request) {
    const userId = (req as any).user.id;
    return await this.notesService.deleteNote(id, userId);
  }
}
