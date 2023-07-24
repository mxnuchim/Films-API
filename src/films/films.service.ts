import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IResponse } from 'src/common/interfaces/response.interface';
import { handleResponse } from 'src/utils/handleResponse';
import { Film } from './interfaces/film.interface';

@Injectable()
export class FilmsService {
  constructor(@InjectModel('Film') private readonly filmModel: Model<Film>) {}

  async createMany(films: Film[]): Promise<IResponse> {
    try {
      /**
       * Check if film esists by mapping through the array and fetching films that exist based on their title
       */
      const existingFilms = await this.filmModel.find({
        title: { $in: films.map((film) => film.title) },
      });

      /**
       *  Store the titles of the films that already exist in the database in a Set
       */
      const existingFilmTitles = new Set(
        existingFilms.map((film) => film.title),
      );

      /**
       * Array containing films that do not exist in the database ie. films to be created
       */
      const filmsToCreate = films.filter(
        (film) => !existingFilmTitles.has(film.title),
      );

      /**
       * If empty, return success message indicating that there are no new films
       */
      if (filmsToCreate.length === 0) {
        return handleResponse({
          success: true,
          message: 'No new films to add',
          data: [],
        });
      }

      /**
       * Creating films and returning a response
       */
      const createdFilms = await this.filmModel.insertMany(filmsToCreate);

      if (!createdFilms) {
        return handleResponse({
          success: false,
          message: 'Something went wrong. Please try again',
          data: [],
        });
      }
      return handleResponse({
        success: true,
        message: 'Films created successfully',
        data: createdFilms,
      });
    } catch (error) {
      return handleResponse({
        success: false,
        message: error?.message || 'Something went wrong',
        data: error,
      });
    }
  }

  async getAllFilms(): Promise<IResponse> {
    try {
      const films = await this.filmModel
        .find()
        .select('_id episode_id title release_date comments')
        .sort({ release_date: 1 })
        .exec();

      if (!films || films.length === 0) {
        return handleResponse({
          success: true,
          message: 'No films found',
          data: [],
        });
      }

      return handleResponse({
        success: true,
        message: 'Films retrieved successfully',
        data: films,
      });
    } catch (error) {
      return handleResponse({
        success: false,
        message: error?.message || 'Something went wrong',
        data: error,
      });
    }
  }
}
