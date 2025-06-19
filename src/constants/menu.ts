import type {IHeaderLink} from "../types/menu.ts";
import {AppRoutes} from "../appRoutes.ts";

export const headerLinks: IHeaderLink[] = [
  {
    translationKey: 'header.forMe',
    to: AppRoutes.HOME,
    id: 'author-highlight',
  },
  {
    translationKey: 'header.books',
    to: AppRoutes.HOME,
    id: 'books',
  },
  {
    translationKey: 'header.testimonials',
    to: AppRoutes.HOME,
    id: 'testimonials',
  },
  {
    translationKey: 'header.contacts',
    to: AppRoutes.CONTACT
  },
];