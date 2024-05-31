import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { Todo } from './entity/todo.entity';
import { UpdateTodoInput } from './dto/inputs/update-todo.input';

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    {
      id: 1,
      description: 'Create a new project',
      done: true,
    },
    {
      id: 2,
      description: 'Add a README file',
      done: false,
    },
    {
      id: 3,
      description: 'Push to GitHub',
      done: false,
    },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }

  createTodo(createTodoInput: CreateTodoInput): Todo {
    const newTodo: Todo = {
      ...createTodoInput,
      id: Math.max(...this.todos.map((todo) => todo.id), 0) + 1,
      done: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  updateTodo(updateTodoInput: UpdateTodoInput) {
    const todo = this.findOne(updateTodoInput.id);
    const updatedTodo = { ...todo, ...updateTodoInput };
    this.todos = this.todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo,
    );
    return updatedTodo;
  }

  deleteTodo(id: number) {
    const todo = this.findOne(id);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return todo;
  }
}
