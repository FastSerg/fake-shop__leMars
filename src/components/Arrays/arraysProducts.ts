export type ArrProductsProps = {
  id:number,
  img: string,
  alt: string,
  nameProduct:string,
  price: number,
  discount?: number,
  namePage?:string
}

export const getProductObject = (array:ArrProductsProps[]) => {
  return array.reduce((object,product) => ({
    ...object,
    [product.id]:product
  }),{})
}


