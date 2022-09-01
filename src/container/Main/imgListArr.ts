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
    id: 1,
    img: '/img/bridge.jpg',
    nameCategory: 'LIFESTYLE',
    title: 'Clarins Mascara',
    readMore: 'READ MORE',
    alt: 'bridge',
  },
  {
    id: 2,
    img: 'img/wooman-face.jpg',
    nameCategory: 'BEAUTY',
    title: 'Cobalt Leather',
    readMore: 'READ MORE',
    alt: 'wooman-face',
  },
  {
    id: 3,
    img: '/img/man-with-board.jpg',
    nameCategory: 'FASHION',
    title: 'Dress Like a Parisian',
    readMore: 'READ MORE',
    alt: 'man-with-board',
  },

]

export default imgList
