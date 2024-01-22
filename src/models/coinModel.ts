import { model, Schema } from 'mongoose';

import { ICoin } from '../types';

const linksSchema = new Schema({
  homepage: {
    type: String,
  },
  github: {
    type: String,
  },
  facebook: {
    type: String,
  },
  twitter: {
    type: String,
  },
});

const coinSchema: Schema<ICoin> = new Schema({
  id: {
    type: String,
    require: true,
  },
  name: { type: String, require: true },
  symbol: {
    type: String,
  },
  description: {
    type: String,
  },
  current_price: {
    type: Number,
  },
  links: linksSchema,
  image: {
    type: String,
    require: true,
  },
});

export default model<ICoin>("Coin", coinSchema);
