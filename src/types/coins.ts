import { Document } from 'mongoose';

interface ICoin extends Document {
  id: string;
  symbol: string;
  name: string;
  description: string;
  current_price: number;
  links: {
    homepage: string;
    github: string;
  };
  image: string;
}

export default ICoin;
