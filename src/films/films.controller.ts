import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmsDto } from './dto/create-films.dto';
import { films } from 'src/utils/data';
import { IResponse } from 'src/common/interfaces/response.interface';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { UpdateFilmsDTO } from './dto/update.films.dto';

@ApiTags('films')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  /**
   * Creates list of films in the database
   * @param createFilmsDto: array of films conforming to Film object
   * @returns handle response object with response information and films in data array
   */
  @ApiOperation({
    summary: 'Create films',
    description:
      'Adds films to the database. The array is the initial data gotten from the swapi api at https://swapi.dev/api/films. I have taken the data, made it into an array and uploaded it to the database in order to build on it to achieve the required functionality',
  })
  @ApiCreatedResponse({ description: 'Created films successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @Post('/create-films')
  create(@Body() createFilmsDto: CreateFilmsDto): Promise<IResponse> {
    return this.filmsService.createMany(films);
  }

  /**
   *
   * @returns array of all films stored in database
   */
  @ApiOperation({
    summary: 'Retrieve films',
    description:
      'Fetches films from the database and contains the id, title, release date and comment count for each',
  })
  @ApiOkResponse({ description: 'Retrieved films successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({
    description: 'No films found',
  })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @Get('/get-films')
  getFilms(): Promise<IResponse> {
    return this.filmsService.getAllFilms();
  }

  /**
   *
   * @body {event: string}
   * @returns gets the latest films and updates the db with them
   */
  @ApiOperation({
    summary: 'Listener for updating films',
    description: 'Fetches films from Swapi API and updates our database',
  })
  @ApiOkResponse({ description: 'Updated films successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({
    description: 'No films to add',
  })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @Post('/update-films')
  updateFilms(@Body() updateFilmsDTO: UpdateFilmsDTO): Promise<IResponse> {
    return this.filmsService.updateFilms(updateFilmsDTO);
  }
}
