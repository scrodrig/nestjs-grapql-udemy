import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HelloworldModule } from './helloworld/helloworld.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault() as any],
    }),
    HelloworldModule,
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
