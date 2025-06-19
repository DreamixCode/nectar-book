import {AppRoutes} from "../appRoutes.ts";

export interface IHeaderLink {
  translationKey: string;
  to: AppRoutes;
  id?: string;
}