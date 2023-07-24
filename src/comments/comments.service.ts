import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IResponse } from 'src/common/interfaces/response.interface';
import { Film } from 'src/films/interfaces/film.interface';
import { handleResponse } from 'src/utils/handleResponse';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './interfaces/comment.interface';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel('Comment') private readonly commentModel: Model<Comment>,
    @InjectModel('Film') private readonly filmModel: Model<Film>,
  ) {}

  async createComment(createCommentDto: CreateCommentDto): Promise<IResponse> {
    const { film_id, content } = createCommentDto;
    try {
      if (!film_id || !content) {
        return handleResponse({
          message: 'Please enter a valid comment',
          success: false,
          data: [new HttpException('Invalid request', HttpStatus.BAD_REQUEST)],
        });
      }

      const film = await this.filmModel.findOne({ _id: film_id });

      if (!film) {
        return handleResponse({
          message: 'Film not found or has been taken down',
          success: false,
          data: [new HttpException('Not found', HttpStatus.NOT_FOUND)],
        });
      }

      const createdComment = await this.commentModel.create(createCommentDto);
      if (!createdComment) {
        return handleResponse({
          message: 'Failed to create comment. Please try again',
          success: false,
          data: [],
        });
      }

      // Update the film's comments count
      await this.filmModel.updateOne(
        { _id: film_id },
        { $inc: { comments: 1 } },
      );

      return handleResponse({
        message: 'Successfully created your comment',
        success: true,
        data: [createdComment],
      });
    } catch (error) {
      return handleResponse({
        message: error?.message || 'Something went wrong',
        success: false,
        data: [new HttpException('Invalid request', HttpStatus.BAD_REQUEST)],
      });
    }
  }

  async getCommentsForFilm(film_id: string): Promise<IResponse> {
    try {
      if (!film_id) {
        return handleResponse({
          message: 'Please enter a valid film id',
          success: false,
          data: [new HttpException('Invalid request', HttpStatus.BAD_REQUEST)],
        });
      }

      const film = await this.filmModel.findOne({ _id: film_id });

      if (!film) {
        return handleResponse({
          message: 'Film not found or has been taken down',
          success: false,
          data: [new HttpException('Not found', HttpStatus.NOT_FOUND)],
        });
      }

      const comments = await this.commentModel
        .find({ film_id })
        .sort({ createdAt: 1 })
        .exec();
      return handleResponse({
        message: 'Fetched comments successfully',
        success: true,
        data: comments,
      });
    } catch (error) {
      return handleResponse({
        message: `Couldn't fetch comments. Something went wrong`,
        success: false,
        data: [],
      });
    }
  }

  async deleteComment(commentId: string): Promise<IResponse> {
    try {
      const comment: Comment = await this.commentModel.findOne({
        _id: commentId,
      });

      if (!comment) {
        return handleResponse({
          message: 'Comment not found',
          success: false,
          data: [new HttpException('Not found', HttpStatus.NOT_FOUND)],
        });
      }

      const filmId = comment?.film_id;
      const deletedComment = await this.commentModel.findByIdAndDelete(
        commentId,
      );

      if (!deletedComment) {
        return handleResponse({
          message: 'Failed to delete comment. Please try again',
          success: false,
          data: [],
        });
      }

      // Update the film's comments count
      await this.filmModel.updateOne(
        { _id: filmId },
        { $inc: { comments: -1 } },
      );

      return handleResponse({
        message: 'Successfully deleted the comment',
        success: true,
        data: [deletedComment],
      });
    } catch (error) {
      return handleResponse({
        message: error?.message || 'Something went wrong',
        success: false,
        data: [new HttpException('Invalid request', HttpStatus.BAD_REQUEST)],
      });
    }
  }
}
