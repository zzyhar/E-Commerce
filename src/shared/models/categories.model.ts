export class VOCategories {
  _id?: string;

  parent_key: string = "";
  group_key: string = "";
  name: string = "";
  description: string = "";
  key: string = "";
  value: string = "";
  order: number | null;

  createdAt?: Date;
  updatedAt?: Date;
}
