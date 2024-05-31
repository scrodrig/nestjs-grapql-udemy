import { Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';

@Resolver()
export class TodosResolver {
  @Query(() => [Todo], {
    name: 'todos',
    description: 'Returns a list of todos',
  })
  findAll(): Todo[] {
    return [];
  }
}
