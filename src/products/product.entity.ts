import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Order} from "../orders/order.entity"
@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Order, order => order.product)
    public order!: Order[];
}