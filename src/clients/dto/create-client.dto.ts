import { IsEmail, IsNotEmpty, IsString, Min } from "class-validator"

export class CreateClientDto {

    @IsString()
    @IsNotEmpty( { message: "El docúmento es obligatorio." } )
    private id: string

    @IsString()
    @IsNotEmpty( { message: "El nombre es obligatorio." } ) 
    private firstName: string

    @IsString()
    @IsNotEmpty( { message: "El apellido es obligatorio." } )
    private lastName: string

    @IsString()
    @IsNotEmpty( { message: "El número de celular es obligatorio." } )
    private phoneNumber: string

    @IsString()
    @IsNotEmpty( { message: "El correo electrónico es obligatorio." } )
    @IsEmail( {}, { message: "Formato de correo electrónico invalido." } )
    private email: string

    @IsString()
    @Min(0, { message: "La edad no puede ser negativa." } )
    private age: number

}
