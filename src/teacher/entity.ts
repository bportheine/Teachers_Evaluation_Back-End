import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Exclude } from 'class-transformer'
import { MinLength, IsString, IsEmail } from 'class-validator'
//import * as bcrypt from 'bcrypt'
import Evaluation from '../evaluation/entity'


@Entity()
export default class Teacher extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @IsEmail()
    @Column('text', { nullable: false })
    email: string

    @IsString()
    @MinLength(6)
    @Column('text')
    @Exclude({ toPlainOnly: true })
    password: string

    @OneToMany(_ => Evaluation, evaluation => evaluation.teacher)
    evaluations: Evaluation[]


//   async setPassword(rawPassword: string) {
//     const hash = await bcrypt.hash(rawPassword, 10)
//     this.password = hash
// }

// checkPassword(rawPassword: string): Promise<boolean> {
//     return bcrypt.compare(rawPassword, this.password)
//   }
}
