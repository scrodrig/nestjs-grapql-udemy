import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AgregationType {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  pending: number;

  @Field(() => Int)
  completed: number;

  @Field(() => Int, { deprecationReason: 'Use total instead' })
  totalTodosCompleted: number;
}
