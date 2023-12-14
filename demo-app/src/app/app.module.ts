import { TodosModule } from '@nest-plus-io-ts-experiment/modul-in-todos';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TodosModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
