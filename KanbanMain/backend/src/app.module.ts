import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KanbanModule } from './kanban.module';
import { ColumnEntity } from './entities/column.entity';
import { Card } from './entities/card.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postdba',
      database: 'kanban',
      entities: [ColumnEntity, Card],
      autoLoadEntities: true,
      synchronize: true,
    }),
    KanbanModule,
  ],
})
export class AppModule {}
