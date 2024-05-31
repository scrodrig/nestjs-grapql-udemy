import { Field, InputType } from '@nestjs/graphql';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => Number, {
    description: 'The id of the todo',
  })
  @IsInt()
  @Min(1)
  id: number;

  @Field(() => String, {
    description: 'The description of the todo',
    nullable: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @IsOptional()
  description: string;

  @Field(() => Boolean, {
    description: 'The done status of the todo',
    nullable: true,
  })
  @IsOptional()
  done: boolean;
}
