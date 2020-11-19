import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Order} from '../orders/order.entity'

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phoneNumber: string;

    @OneToMany(type => Order, order => order.customer)
    public order!: Order[];
}