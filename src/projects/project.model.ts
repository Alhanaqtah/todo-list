import { ApiProperty } from '@nestjs/swagger';
import { Col } from 'src/columns/column.model';
import { User } from 'src/users/user.model';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'projects' })
export class Project {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'The unique identifier of the project' })
    id: string;

    @Column({ type: 'text', unique: true })
    @ApiProperty({ example: 'My Project', description: 'The title of the project' })
    title: string;

    @Column({ type: 'text' })
    @ApiProperty({ example: 'This is a sample project', description: 'The description of the project' })
    description: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    @ApiProperty({ example: '2024-06-28T12:34:56.789Z', description: 'The creation time of the project', type: 'string', format: 'date-time' })
    creation_time: Date;

    @OneToMany(type => Col, list => list.project, { onDelete: 'CASCADE' })
    @ApiProperty({ type: () => [Col], description: 'The columns associated with the project' })
    columns: Col[];

    @ManyToOne(type => User, user => user.projects)
    // @ApiProperty({ type: () => User, description: 'The user who owns the project' })
    user: User;
}
