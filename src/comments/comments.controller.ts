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
      'Create a comment for a film. film id and content of the comment are required fields',
  })
  @ApiCreatedResponse({ description: 'Created comment successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @Post('/create-comment')
  create(@Body() createCommentDto: CreateCommentDto): Promise<IResponse> {
    return this.commentsService.createComment(createCommentDto);
  }

  @ApiOperation({
    summary: 'Get comments for a film',
    description: 'Get comments for film using film id',
  })
  @ApiOkResponse({ description: 'Retrieved comments successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  @ApiNotFoundResponse({
    description: 'Film does not exist or has been taken down',
  })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @Get('/get/:filmId')
  async getCommentsForFilm(
    @Param('filmId') film_id: string,
  ): Promise<IResponse> {
    return this.commentsService.getCommentsForFilm(film_id);
  }
}
