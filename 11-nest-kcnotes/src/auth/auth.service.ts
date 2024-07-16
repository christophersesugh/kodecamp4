import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignupDto } from './dto/signup-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async signup(user: SignupDto): Promise<{ token: string }> {
    const existingUser = await this.prisma.user.findUnique({
      where: { username: user.username },
    });

    if (existingUser) {
      throw new BadRequestException(
        `User with username '${user.username}' already exist.`,
      );
    }

    const salt = 10;
    const passwordHash = await bcrypt.hash(user.password, salt);

    const createdUser = await this.prisma.user.create({
      data: {
        ...user,
        password: passwordHash,
      },
    });

    return {
      token: this.jwt.sign({
        id: createdUser.id,
      }),
    };
  }

  async signin(user: SignupDto): Promise<{ token: string }> {
    const existingUser = await this.prisma.user.findUnique({
      where: { username: user.username },
    });

    if (!existingUser) {
      throw new BadRequestException(`Invalid credentials.`);
    }

    const correctPassword = await bcrypt.compare(
      user.password,
      existingUser.password,
    );

    if (!correctPassword) {
      throw new BadRequestException(`Invalid credentials.`);
    }

    return {
      token: this.jwt.sign({
        id: existingUser.id,
      }),
    };
  }
}
