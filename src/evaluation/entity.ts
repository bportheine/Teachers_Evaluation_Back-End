import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm'
import { IsString, IsDate } from 'class-validator'
import Teacher from '../teacher/entity'
import Student from '../student/entity'

export type Color = 'red' | 'yellow' | 'green'

@Entity()
export default class Evaluation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    color: Color

    @IsString()
    @Column('text')
    comment: string

    @IsDate()
    @CreateDateColumn()
    createdDate: Date;

    @ManyToOne(_ => Teacher, teacher => teacher.evaluations)
    teacher: Teacher

    @ManyToOne(_ => Student, student => student.evaluations)
    student: Student

}
