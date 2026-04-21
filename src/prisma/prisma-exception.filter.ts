import {
  ArgumentsHost,
  Catch,
  ConflictException,
  ExceptionFilter,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    switch (exception.code) {
      case 'P2002':
        throw new ConflictException('Unique constraint failed.');
      case 'P2025':
        throw new NotFoundException('Record not found.');
      default:
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Unexpected database error.',
        });
        return;
    }
  }
}

