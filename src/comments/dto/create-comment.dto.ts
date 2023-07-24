import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    example: 'This is the best movie of the year!!!',
    type: String,
    description: 'The content of your comment',
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 500, {
    message: 'Comment content must be between 1 and 500 characters',
  })
  readonly content: string;

  @ApiProperty({
    example: '64be404ae7f78b20e05eba36',
    type: String,
    description:
      'MongoDB Object Film ID for which you want to create your comment',
  })
  @IsString()
  @IsNotEmpty()
  readonly film_id: string;
}
