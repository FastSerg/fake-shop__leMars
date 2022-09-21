
export type ArrProductsProps = {
  id:number,
  img: string,
  alt: string,
  nameProduct:string,
  price: number,
  discount?: number,
}

export const arrProducts:ArrProductsProps[] = [
  {
    id:1,
    img: '/img/productList/pinkJ.jpg',
    alt: 'pinkJ',
    nameProduct:'Jacket Female Pink',
    price: 379,
    discount: 5,
  }, {
    id:2,
    img: '/img/productList/grennPullover.jpg',
    alt: 'Sweater',
    nameProduct:'Surround Sweater',
    price: 79,
  }, {
    id:3,
    img: '/img/productList/blueShirt.jpg',
    alt: 'blueShirt',
    nameProduct:'Blue Flower Shirt',
    price: 90,
    discount: 10,
  }, 
  {
    id:4,
    img: '/img/productList/braceletChain.jpg',
    alt: 'braceletChain',
    nameProduct:'Bracelet Chain',
    price: 100,
    discount: 33,
  }, 
  {
    id:5,
    img: '/img/productList/brouwnGloves.jpg',
    alt: 'brouwnGloves',
    nameProduct:'Brown Leather Gloves',
    price: 60,
  }, {
    id:6,
    img: '/img/productList/ScarfHomut.jpg',
    alt: 'ScarfHomut',
    nameProduct:'Scarf Homut',
    price: 70,
  },
  {
    id:7,
    img: '/img/productList/PurseMans.jpg',
    alt: 'PurseMans',
    nameProduct:`Purse Man's Black`,
    price: 70,
    discount: 22,
  },
  {
    id:8,
    img: '/img/productList/womensSandals.jpg',
    alt: 'womensSandals',
    nameProduct:`Women's Sandals`,
    price: 250,
    discount: 16,
  },
  {
    id:9,
    img: '/img/productList/capCamouflage.jpg',
    alt: 'capCamouflage',
    nameProduct:'Cap Camouflage',
    price: 60,

  },

] 