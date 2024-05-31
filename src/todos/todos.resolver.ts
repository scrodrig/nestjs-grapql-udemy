import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Todo } from './entity/todo.entity';
import { TodosService } from './todos.service';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';

@Resolver(() => Todo)
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
  findOne(@Args('id', { type: () => Int }) id: number): Todo {
    return this.todosService.findOne(id);
  }

  @Mutation(() => Todo, {
    name: 'createTodo',
    description: 'Creates a new todo',
  })
  createTodo(
    @Args('createTodoInput', { type: () => CreateTodoInput })
    createTodoInput: CreateTodoInput,
  ) {
    return this.todosService.createTodo(createTodoInput);
  }

  @Mutation(() => Todo, {
    name: 'updateTodo',
    description: 'Updates a new todo',
  })
  updateTodo(
    @Args('updateTodoInput', { type: () => UpdateTodoInput })
    updateTodoInput: UpdateTodoInput,
  ) {
    return this.todosService.updateTodo(updateTodoInput.id, updateTodoInput);
  }

  @Mutation(() => Todo, {
    name: 'deleteTodo',
    description: 'Deletes a todo',
  })
  deleteTodo(@Args('id', { type: () => Int }) id: number): Todo {
    return this.todosService.deleteTodo(id);
  }
}
