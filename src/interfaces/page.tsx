export interface useType{
      id: number,
      email: string,
      username: string,
      password: string,
      name: {
        firstname: string,
        lastname: string,
      }
} 
export interface cartType {
  id: number
  userId: number
  date: string
  products: {
    productId: number
    quantity: number
  }[]
}
