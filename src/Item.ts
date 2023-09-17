export enum Tax {
  NORMAL = 0.21,
  FIRST_NECESSITY = 0.1
}

export type Item = {
  name: string;
  cost: number;
  revenue: number;
  tax: Tax;
};
