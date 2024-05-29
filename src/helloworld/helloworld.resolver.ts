import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
  @Query(() => String, {
    name: 'hello',
    description: 'Hello world is what is returned',
  })
  helloWorld(): string {
    return 'Hello World!';
  }
}
