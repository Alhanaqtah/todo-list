import { Project } from "src/projects/project.model";
import { Role } from "src/roles/roles.model";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'varchar', unique: true})
    email: string

    @Column({type: 'bytea', name: 'pass_hash'})
    password: string

    @Column({type: 'boolean', default: true})
    isActive: boolean

    @OneToMany(type => Project, project => project.user)
    projects: Project[]

    @ManyToMany(type => Role, role => role.users, {onDelete: 'CASCADE'})
    @JoinTable()
    roles: Role[]    
}