import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { INote } from './interfaces/note.interface';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  /**
   * Create a note
   * @param {CreateNoteDto} note - CreateNoteDto
   * @param {string} userId - User ID
   * @returns {Promise<INote>} - Note
   */
  async createNote(note: CreateNoteDto, userId: string): Promise<INote> {
    const existingNote = await this.prisma.note.findUnique({
      where: { title: note.title },
    });
    if (existingNote)
      throw new BadRequestException({
        message: `Note with title '${note.title}' alsready exists.`,
      });
    return await this.prisma.note.create({
      data: {
        ...note,
        user: { connect: { id: userId } },
      },
    });
  }

  /**
   * Get all notes
   * @returns {Promise<INote[]>} - Notes
   */
  async getNotes(): Promise<INote[]> {
    return await this.prisma.note.findMany();
  }

  /**
   * Get a note
   * @param {Param} noteId - Note ID
   * @param {string} userId - User ID
   * @returns {Promise<INote>} - Note
   */
  async getNote(noteId: string, userId: string) {
    const note = await this.prisma.note.findFirst({
      where: { id: noteId, userId },
    });
    if (!note) throw new BadRequestException({ message: 'Note not found' });
    return note;
  }

  /**
   * Update a note by ID
   * @param note  - CreateNoteDto
   * @param id - Note ID
   * @param userId  - User ID
   * @returns {Promise<INote>} - Note
   */
  async updateNote(
    note: CreateNoteDto,
    id: string,
    userId: string,
  ): Promise<INote> {
    const existingNote = await this.prisma.note.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!existingNote)
      throw new BadRequestException({
        message: `Note with id '${id}' not found.`,
      });
    return await this.prisma.note.update({
      where: { id, userId },
      data: note,
    });
  }

  /**
   * Delete a note by ID
   * @param {string} id - Note ID
   * @param {string} userId - User ID
   * @returns {Promise<INote>} - Note
   */
  async deleteNote(id: string, userId: string): Promise<INote> {
    const existingNote = await this.prisma.note.findUnique({
      where: { id },
      select: { id: true },
    });
    if (!existingNote)
      throw new BadRequestException({
        message: `Note with id '${id}' not found.`,
      });
    return await this.prisma.note.delete({ where: { id, userId } });
  }
}
