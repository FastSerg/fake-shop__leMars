export type imgListProps = {
  id: number
  img: string
  nameCategory: string
  title: string
  readMore: string
  alt: string
}


const imgList = [
  {
    id: 10,
    img: '/img/bridge.jpg',
    nameCategory: 'LIFESTYLE',
    title: 'Clarins Mascara',
    readMore: 'READ MORE',
    alt: 'bridge',
  },
  {
    id: 11,
    img: 'img/wooman-face.jpg',
    nameCategory: 'BEAUTY',
    title: 'Cobalt Leather',
    readMore: 'READ MORE',
    alt: 'wooman-face',
  },
  {
    id: 12,
    img: '/img/man-with-board.jpg',
    nameCategory: 'FASHION',
    title: 'Dress Like a Parisian',
    readMore: 'READ MORE',
    alt: 'man-with-board',
  },

]

export default imgList
