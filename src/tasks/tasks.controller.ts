import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { OwnerGuard } from 'src/auth/owner.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @UseGuards(RolesGuard)
    @Roles('user', 'admin')
    @Post()
    async create(@Body() taskDto: CreateTaskDto) {
        return await this.taskService.create(taskDto);
    }

    @UseGuards(OwnerGuard)
    @Get(':id')
    async read(@Req() req: any) {
        return await this.taskService.read(req.resourceId);
    }

    @UseGuards(OwnerGuard)
    @Put(':id')
    async update(@Req() req: any, @Body() taskDto: UpdateTaskDto) {
        return await this.taskService.update(req.resourceId, taskDto);
    }

    @UseGuards(OwnerGuard)
    @Delete(':id')
    async delete(@Req() req: any) {
        return await this.taskService.remove(req.resourceId);
    }

    @Put()
    async move() {

    }
}
