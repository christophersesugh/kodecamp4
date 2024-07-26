import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required.' })
  @MinLength(5, { message: 'Title must be at least 5 characters.' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Content is required.' })
  @MinLength(10, { message: 'Content must be at least 10 characters.' })
  content: string;
}
