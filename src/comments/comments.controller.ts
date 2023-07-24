import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { IResponse } from 'src/common/interfaces/response.interface';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({
    summary: 'Create a comment',
    description:
      'Create a comment for a film using film id and content of the comment are required fields',
  })
  @ApiCreatedResponse({ description: 'Created comment successfully' })
  @Post('/create-comment')
  create(@Body() createCommentDto: CreateCommentDto): Promise<IResponse> {
    return this.commentsService.createComment(createCommentDto);
  }

  @ApiOperation({
    summary: 'Get comments for a film',
    description: 'Get comments for film using film id',
  })
  @ApiOkResponse({ description: 'Retrieved comments successfully' })
  @ApiNotFoundResponse({
    description: 'Film does not exist or has been taken down',
  })
  @Get('/get/:filmId')
  async getCommentsForFilm(
    @Param('filmId') film_id: string,
  ): Promise<IResponse> {
    return this.commentsService.getCommentsForFilm(film_id);
  }

  @ApiOperation({
    summary: 'Delete a comment',
    description: 'Delete a comment for a film',
  })
  @ApiCreatedResponse({ description: 'Created comment successfully' })
  @Delete('/delete-comment/:commentId')
  deleteCommennt(@Param('commentId') commentId: string): Promise<IResponse> {
    return this.commentsService.deleteComment(commentId);
  }
}
