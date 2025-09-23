import { RowDataPacket } from "mysql2"

export interface IUser  extends RowDataPacket{
    id : number
    username : string
    email : string
    password : string
    address ?: string
    role : role
}
export enum role {
    CUSTOMER = "customer",
    ADMIN = "admin",
    VIEWER = "viewer"
}
export interface IItem {
    id :number
    name : string
    price : number
    category : category
    description : string
    imageURL ?: string
}
export enum category {
    PIZZA = "pizza",
    DRINK = "drink",
    SIDEDISH = "sidedish"
}
export interface IIngredient {
    id : number
    name : string
    stock : number
    imageURL ?: string
}

export interface IOrder {
    id : number
    user_id : number
    status : status
    type : deliveryType
    address ?: string
    orderedAt?:Date
}
enum status {
    PENDING = "pending",
    PREPARING = "preparing",
    DELIVERED = "delivered",
    CANCELLED = 'cancelled'
}
enum deliveryType {
    DELIVERY = "delivery",
    PICKUP = "pickup"
}

export interface ICartItem  {
  id:number,
  category : category,
  imageURL : string,
  name : string,
  price : string,
  quantity : number
}
