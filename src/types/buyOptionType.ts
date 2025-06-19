export type OptionKey = 'book' | 'freeOption' | 'authorReads' | 'additionalBook' | 'giftBox' | 'course';

interface OptionDetails {
  price: number;
  selected: boolean;
  containerClassName?: string;
}

export type Options = Record<OptionKey, OptionDetails>;