import { ApiProperty } from '@nestjs/swagger';

export class UpdateFilmsDTO {
  @ApiProperty({
    type: Object,
    example: { event: 'films.created' },
    description: 'Event to be added to database',
  })
  event: string;
}
