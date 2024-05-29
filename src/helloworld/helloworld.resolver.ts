import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
  @Query(() => String, {
    name: 'hello',
    description: 'Hello world is what is returned',
  })
  helloWorld(): string {
    return 'Hello World!';
  }

  @Query(() => Float, {
    name: 'randomNumber',
  })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomFromZeroTo',
    description: 'Random number from zero to value',
  })
  getRandomFromZeroTo(
    @Args('to', { type: () => Int, nullable: true, defaultValue: 10 })
    to: number,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
