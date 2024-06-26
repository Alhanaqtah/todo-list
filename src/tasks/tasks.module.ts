import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.model';
import { Project } from 'src/projects/project.model';
import { Col } from 'src/columns/column.model';
import { ColumnsModule } from 'src/columns/columns.module';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [
    TypeOrmModule.forFeature([Task, Project, Col]),
    ColumnsModule
  ]
})
export class TasksModule {}
