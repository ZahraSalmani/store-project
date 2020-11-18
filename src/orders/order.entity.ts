import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "../customers/customer.entity";
import { Product } from "../products/product.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    public orderId!: number;

    @Column()
    public customerId!: number;

    @Column()
    public productId!: number;

    @Column()
    public count!: number;

    @ManyToOne(type => Customer, customer => customer.order)
    public customer!: Customer;

    @ManyToOne(type => Product, product => product.order)
    public product!: Product;
}