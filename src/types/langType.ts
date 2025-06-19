export enum Languages  {
  EN = 'en',
  BG = 'bg',
}

type LandMapType = {
  [key in Languages]: {
    displayCode: string;
    name: string;
  };
};

export const langMap: LandMapType = {
  en: {
    displayCode: 'EN',
    name: 'English',
  },
  bg: {
    displayCode: 'БГ',
    name: 'Български',
  },
}