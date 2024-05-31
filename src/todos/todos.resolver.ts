import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { Todo } from './entity/todo.entity';
import { TodosService } from './todos.service';

@Resolver()
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => [Todo], {
    name: 'todos',
    description: 'Returns a list of todos',
  })
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Query(() => Todo, {
    name: 'todo',
    description: 'Returns a single todo',
  })
  findById(
    @Args('id', { type: () => Int })
    id: number,
  ): Todo {
    return this.todosService.findById(id);
  }
}
