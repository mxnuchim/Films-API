import { ApiProperty } from '@nestjs/swagger';
import { Film } from '../interfaces/film.interface';
import { films } from 'src/utils/data';

export class CreateFilmsDto {
  @ApiProperty({
    type: Array<Film>,
    example: films,
    description:
      'Array of films to be added to the database. It must confirm to the specified film type for type safety',
  })
  films: Array<Film> = films;
}
