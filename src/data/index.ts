import {SneakersType} from '../types';

import nikeMain from './../../assets/images/nikeMain.png';
import nikeWhite from './../../assets/images/nikeAirMaxWhite.png';
import adidas from './../../assets/images/adidas.png';
import adidas2 from './../../assets/images/adidas2.png';
import puma from './../../assets/images/puma.png';
import asics from './../../assets/images/asics.png';
import asics2 from './../../assets/images/asics2.png';
import nikeAirRed from './../../assets/images/nikeAirRed.png';

export const sneakersData: SneakersType[] = [
  {
    id: '1',
    icon: '',
    img: nikeMain,
    title: 'Nike Air Max 3 Plus',
    price: 189,
    rating: 5,
    firma: 'nike',
    description:
      'When performance is what you’re looking for, look no further than the all-new Nike Tuned 3. These sneakers are designed to provide maximum comfort and support during your workouts or everyday activities. With their stylish design and innovative features, the Nike Air Max 3 Plus is a must-have for any sneaker enthusiast.',
    delivery: 'Free shipping on all orders',
    reviews: [
      {id: '1', rating: 5, comment: 'Great sneakers, highly recommend!', author: 'Vladimir'},
      {id: '2', rating: 4, comment: 'Comfortable and stylish.', author: 'Leonid'},
    ],
  },
  {
    id: '2',
    icon: '',
    img: nikeWhite,
    title: 'Nike Ultra Boost',
    price: 199,
    rating: 4,
    firma: 'nike',
    description:
      'Step up your running game with the Nike Ultra Boost. These sneakers are engineered to deliver exceptional cushioning and energy return, allowing you to run faster and longer. The lightweight and breathable design ensures maximum comfort, while the stylish look makes a statement wherever you go.',
    delivery: 'Fast delivery within 3-5 business days',
    reviews: [
      {id: '1', rating: 4, comment: 'Great shoes for running.', author: 'Denis'},
      {id: '2', rating: 5, comment: 'Very comfortable, love the design.', author: 'Alex'},
    ],
  },
  {
    id: '3',
    icon: '',
    img: nikeAirRed,
    title: 'Nike Future Rider',
    price: 129,
    rating: 4,
    firma: 'nike',
    description:
      'Get ready to conquer the streets with the Nike Future Rider. These sneakers combine retro style with modern technology for a perfect blend of comfort and performance. The durable construction and responsive cushioning make them ideal for everyday wear, while the eye-catching design adds a touch of flair to any outfit.',
    delivery: 'Available for international shipping',
    reviews: [
      {id: '1', rating: 4, comment: 'Love the retro look of these sneakers.', author: 'Anna'},
      {
        id: '2',
        rating: 3,
        comment: 'Decent shoes, but not the most comfortable.',
        author: 'Elena',
      },
    ],
  },
  {
    id: '4',
    icon: '',
    img: adidas2,
    title: 'Adidas',
    price: 204,
    rating: 3,
    firma: 'adidas',
    description: 'dddd',
    delivery: 'Available for international shipping',
    reviews: [
      {id: '1', rating: 4, comment: 'Love the retro look of these sneakers.', author: 'Helin'},
      {
        id: '2',
        rating: 3,
        comment: 'Decent shoes, but not the most comfortable.',
        author: 'Vadim',
      },
    ],
  },
  {
    id: '5',
    icon: '',
    img: adidas,
    title: 'Adidas Ultra',
    price: 133,
    rating: 0,
    firma: 'adidas',
    description: 'aaddddididid',
    delivery: 'Available for international shipping',
    reviews: [
      {id: '1', rating: 4, comment: 'Love the retro look of these sneakers.', author: 'Denis'},
      {
        id: '2',
        rating: 3,
        comment: 'Decent shoes, but not the most comfortable.',
        author: 'Denis',
      },
    ],
  },
  {
    id: '6',
    icon: '',
    img: puma,
    title: 'Puma',
    price: 82,
    rating: 3,
    firma: 'puma',
    description: '232324',
    delivery: 'Available for international shipping',
    reviews: [
      {id: '1', rating: 4, comment: 'Love the retro look of these sneakers.', author: 'Denis'},
      {
        id: '2',
        rating: 3,
        comment: 'Decent shoes, but not the most comfortable.',
        author: 'Denis',
      },
    ],
  },
  {
    id: '7',
    icon: '',
    img: asics,
    title: 'Asics Bison',
    price: 102,
    rating: 5,
    firma: 'asics',
    description: '42323',
    delivery: 'Available for international shipping',
    reviews: [
      {id: '1', rating: 4, comment: 'Love the retro look of these sneakers.', author: 'Denis'},
      {
        id: '2',
        rating: 3,
        comment: 'Decent shoes, but not the most comfortable.',
        author: 'Denis',
      },
    ],
  },
  {
    id: '8',
    icon: '',
    img: asics2,
    title: 'Asics Air',
    price: 93,
    rating: 2,
    firma: 'asics',
    description: '42232323232',
    delivery: 'Available for international shipping',
    reviews: [
      {id: '1', rating: 4, comment: 'Love the retro look of these sneakers.', author: 'Denis'},
      {
        id: '2',
        rating: 3,
        comment: 'Decent shoes, but not the most comfortable.',
        author: 'Denis',
      },
    ],
  },
];
