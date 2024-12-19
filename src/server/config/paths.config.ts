import path from 'path';

export const paths = {
  root: path.resolve(__dirname, '../../../'),
  public: path.resolve(__dirname, '../../../public'),
  dist: path.resolve(__dirname, '../../../dist'),
  images: path.resolve(__dirname, '../../../public/images')
} as const;