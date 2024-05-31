import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Todo } from './entity/todo.entity';
import { TodosService } from './todos.service';
import { CreateTodoInput, StatusArgs, UpdateTodoInput } from './dto';
import { AgregationType } from './types/aggregations.type';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => [Todo], {
    name: 'todos',
    description: 'Returns a list of todos',
  })
  findAll(@Args() statusArgs: StatusArgs): Todo[] {
    return this.todosService.findAll(statusArgs);
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

  @Query(() => Int, {
    name: 'totalTodos',
    description: 'Returns the total number of todos',
  })
  totalTodos(): number {
    return this.todosService.totalTodos;
  }

  @Query(() => Int, {
    name: 'pendingTodos',
    description: 'Returns the number of pending todos',
  })
  pendingTodos(): number {
    return this.todosService.pendingTodos;
  }

  @Query(() => Int, {
    name: 'completedTodos',
    description: 'Returns the number of completed todos',
  })
  completedTodos(): number {
    return this.todosService.completedTodos;
  }

  @Query(() => AgregationType, {
    name: 'agregations',
    description: 'Returns the total, pending and completed todos',
  })
  aggregations() {
    return {
      total: this.todosService.totalTodos,
      pending: this.todosService.pendingTodos,
      completed: this.todosService.completedTodos,
      toalTodosCompleted: this.todosService.totalTodos,
    };
  }
}
