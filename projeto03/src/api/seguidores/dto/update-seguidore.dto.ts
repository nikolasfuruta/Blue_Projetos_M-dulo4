import { PartialType } from '@nestjs/mapped-types';
import { CreateSeguidoreDto } from './create-seguidore.dto';

export class UpdateSeguidoreDto extends PartialType(CreateSeguidoreDto) {}
