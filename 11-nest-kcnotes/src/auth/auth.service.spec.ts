import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { BadRequestException } from '@nestjs/common';

describe('AuthService', () => {
  let authService: AuthService;
  let prismaService: PrismaService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let jwtService: JwtService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        PrismaService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockImplementation(() => 'mockToken'),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    prismaService = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
  });

  const existingUser = {
    id: '1',
    username: 'kodecamp',
    password: 'password',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  describe('signup', () => {
    it('should throw error if user already exists', async () => {
      jest
        .spyOn(prismaService.user, 'findUnique')
        .mockResolvedValue(existingUser);

      await expect(authService.signup(existingUser)).rejects.toThrow(
        new BadRequestException(
          `User with username '${existingUser.username}' already exists.`,
        ),
      );
    });

    it('should create a new user and return a token', async () => {
      const newUser = {
        username: 'kodecamp',
        password: 'password',
      };

      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);
      jest
        .spyOn(bcrypt, 'hash')
        .mockImplementation(async () => 'hashedPassword');
      jest.spyOn(prismaService.user, 'create').mockResolvedValue({
        ...newUser,
        id: '1',
        password: 'hashedPassword',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      const result = await authService.signup(newUser);
      expect(result).toEqual({
        token: 'mockToken',
      });
    });
  });

  describe('signin', () => {
    it('should throw an error if user does not exist', async () => {
      const nonExistingUser = {
        username: 'wronguser',
        password: 'wrongpassword',
      };

      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);
      await expect(authService.signin(nonExistingUser)).rejects.toThrow(
        new BadRequestException(`Invalid credentials.`),
      );
    });

    it('should throw error if password is incorrect', async () => {
      const mockUser = {
        username: 'kodecamp',
        password: 'password',
      };
      const hP = 'wrongPassword';

      jest.spyOn(bcrypt, 'hash').mockImplementation(async () => hP);
      const user = {
        ...existingUser,
        password: hP,
      };
      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(user);
      jest.spyOn(bcrypt, 'compare').mockImplementation(async () => false);

      await expect(authService.signin(mockUser)).rejects.toThrow(
        new BadRequestException(`Invalid credentials.`),
      );
    });

    it('should return a user if exists and password is correct', async () => {
      const hP = 'hashedPassword';
      jest.spyOn(bcrypt, 'hash').mockImplementation(async () => hP);
      const mockUser = {
        id: '1',
        username: existingUser.username,
        password: hP,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(mockUser);
      jest.spyOn(bcrypt, 'compare').mockImplementation(async () => true);

      const result = await authService.signin(existingUser);
      expect(result).toEqual({
        token: 'mockToken',
      });
    });
  });
});
