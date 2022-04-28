import { TProduct } from "./TProduct"

export default interface IDashboard
{
	products: TProduct[]
	productItem: TProduct | null
} 