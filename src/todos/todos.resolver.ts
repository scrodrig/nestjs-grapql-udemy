import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TodosResolver {
  @Query(() => [String], {
    name: 'todos',
    description: 'Returns a list of todos',
  })
  findAll() {
    return ['A', 'B', 'C'];
  }
}
