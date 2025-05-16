export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
  };
  images: string[];
}

// [
//   {
//     "id": 4,
//     "title": "Handmade Fresh Table",
//     "slug": "handmade-fresh-table",
//     "price": 687,
//     "description": "Andy shoes are designed to keeping in...",
//     "category": {
//       "id": 5,
//       "name": "Others",
//       "image": "https://placehold.co/600x400",
//       "slug": "others"
//     },
//     "images": [
//       "https://placehold.co/600x400",
//       "https://placehold.co/600x400",
//       "https://placehold.co/600x400"
//     ]
//   }
//   // ...
// ]
