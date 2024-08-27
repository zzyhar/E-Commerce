export class VOCategories {
  _id?: string;

  parent_key: string = "";
  group_key: string = "";
  name: string = "";
  description: string = "";
  key: string = "";
  value: string = "";
  icon: string;
  order: number | null;

  createdAt?: Date;
  updatedAt?: Date;
}
