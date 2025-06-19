import type {OptionKey, Options} from "../types";

import {
  additionalBookPriceBNG,
  authorReadsPriceBGN,
  bookPriceBGN,
  coursePriceBGN,
  freeOptionPriceBGN,
  giftBoxPriceBGN
} from "./prices.ts";

export const optionsKeys: OptionKey[] = [
  'freeOption',
  'authorReads',
  'additionalBook',
  'giftBox',
  'course',
];
export const initialOptions: Options = {
  book: {
    price: bookPriceBGN,
    selected: true,
  },
  freeOption: {
    price: freeOptionPriceBGN,
    selected: true,
  },
  authorReads: {
    price: authorReadsPriceBGN,
    selected: false,
    containerClassName: 'order-2 @mobile:order-1 col-span-2 @mobile:col-span-1',
  },
  additionalBook: {
    price: additionalBookPriceBNG,
    selected: false,
    containerClassName: 'order-1 @mobile:order-2',
  },
  giftBox: {
    price: giftBoxPriceBGN,
    selected: false,
    containerClassName: 'order-last',
  },
  course: {
    price: coursePriceBGN,
    selected: false,
    containerClassName: 'order-last',
  },
}