import {Trans, useTranslation} from "react-i18next";

import {cn} from "@/lib/stylesUtils.ts";

export function AuthorInfo() {
  useTranslation();

  return (
    <p
      className={cn(
        'border border-[#EBEBF3] bg-white text-black text-sm max-w-[30rem] p-10',
        '@max-md:self-end @max-md:ml-8 @max-md:max-w-[30rem]',
      )}
    >
      <Trans
        i18nKey='homePage.authorHighlight.aboutAuthor'
        components={{b: <strong/>}}
      />
    </p>
  );
}