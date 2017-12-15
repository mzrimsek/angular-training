export const PI = 3.1415927;

export interface Food {
  name: string;
  calories: number;
}

export const isEven = (n: number) => n % 2 === 0;

export * from './customer';
export * from './vendor';
