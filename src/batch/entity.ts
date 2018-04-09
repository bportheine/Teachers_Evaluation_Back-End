import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { IsNumber, IsDate } from 'class-validator'
import Student from '../student/entity'


@Entity()
export default class Batche extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @IsDate()
    @Column('date', { nullable: false })
    start_date: Date

    @IsDate()
    @Column('date', { nullable: true })
    end_date: Date

    @OneToMany(_ => Student, student => student.evaluations)
    students: Student[]


}
