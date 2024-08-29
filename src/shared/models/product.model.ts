export class VOProducts {
  _id?: string;

  title: string = "";
  description: string = "";
  slug: string = "";
  categories: string[] = [];

  images: string[] = [];
  category: string[] = [];
  tags: string[] = [];

  variations: {
    _id?: string;
    size: string;
    color: string;
    rating: number;
    price: number;
    salePrice: number;
    images: string[];
  }[] = [];

  createdAt: Date;
  updatedAt: Date;
}
