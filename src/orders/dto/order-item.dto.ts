import { IsNumber, IsPositive } from "class-validator";



export class OrderItemDto {

    @IsNumber()
    @IsPositive()
    productoId: number;


    @IsNumber()
    @IsPositive()
    quantity: number;


    @IsNumber()
    price: number;


    // size ejemplo 

}