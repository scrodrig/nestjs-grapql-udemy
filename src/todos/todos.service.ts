import { Injectable } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

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
}
