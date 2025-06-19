import {Trans, useTranslation} from "react-i18next";

import frontCoverBg from '../../../assets/images/front-cover-bg.jpg';
import frontCoverEn from '../../../assets/images/front-cover-en.jpg';
import {Languages} from "@/types";
import {cn} from "@/lib/stylesUtils.ts";

export function BookInfo() {
  const {i18n} = useTranslation();

  const frontCoverSrc = i18n.language === Languages.EN ? frontCoverEn : frontCoverBg;

  return (
    <div className='section-height bg-white flex items-center justify-center px-6 py-9 text-black @container'>
      <div
        className={cn(
          'max-w-[50rem] min-h-[40rem] flex justify-start overflow-hidden',
          '@max-md:flex-col-reverse @max-md:max-w-md'
        )}
      >
        <p
          className={cn(
            'self-end bg-white max-w-[30.75rem] p-10 pr-32 border border-[#EBEBF3] text-sm',
            '@max-md:mr-8 @max-md:pr-10 @max-md:-mt-10 @max-md:bg-[#FFFFFFF2]',
          )}
        >
          <Trans i18nKey='homePage.bookInfo.bookDescription' />
        </p>

        <div
          className={cn(
            'bg-blue-900 w-[342px] h-[485px] -ml-8.5',
            '@max-md:ml-8 @max-md:self-end',
            )}
        >
          <img src={frontCoverSrc} alt='book cover'/>
        </div>
      </div>
    </div>
  );
}


