import { Column, Entity } from "typeorm"

@Entity()
export class Client {

    @Column({ primary: true, unique: true, nullable: false, length: 20 })
    private id: string

    @Column({ name: "first_name", nullable: false })
    private firstName: string

    @Column({ name: "last_name", nullable: false })
    private lastName: string

    @Column({ name: "phone_number", unique: true, nullable: false })
    private phoneNumber: string

    @Column({ name: "email", unique: true, nullable: false, length: 100 })
    private email: string

    @Column({ name: "age", nullable: false})
    private age: number

}
