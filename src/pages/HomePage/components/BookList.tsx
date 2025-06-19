import {useTranslation} from "react-i18next";

import {BookItem} from "../../../components";
import frontCoverBg from '../../../assets/images/front-cover-bg.jpg';
import frontCoverEn from '../../../assets/images/front-cover-en.jpg';
import {generatePath} from "react-router";
import {AppRoutes} from "../../../appRoutes.ts";
import {Languages} from "../../../types";

const amazonLink = 'https://www.amazon.com/NECTAR-Breaking-Literary-Fiction-Intimacy/dp/B0F7L6C9MS/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.qAxk_GoW5T6OIlFCKoDqw5eHzRuW3NPSspwcwivjGjqfSXOAWBiZt7tPFpcrRTbvi_XdafI8XjB9mdICqeqC_yrgVfajtHNnKHscX1058QWgK29DHWAcIvnqbc6vw5edu0O2PEkOzXNCZRdBD0qpJXf8r6289_r03nQGxnawRTOoah5BipgTbVbRtoB5pVoip7F4BJromP2V9rA7K_xcBHCHDb-aFjUfJGH69Wz7u-k.J3rb99iqTlriWBlavM0ABIojnU5I50Be45W5VLsuars&qid=1748823171&sr=8-1';

export function BookList() {
  const {t} = useTranslation(undefined, {keyPrefix: "homePage.bookList"});

  return (
    <div id='books' className='section-height bg-white flex justify-center items-center px-13 py-16'>
      <div className='basis-[90rem] justify-items-center gap-10 book-items-container'>
        <BookItem
          title={t('bulgarianEdition.title')}
          price={t('bulgarianEdition.price')}
          buyButtonText={t('bulgarianEdition.buttonText')}
          imageSrc={frontCoverBg}
          linkTo={generatePath(AppRoutes.CONTACT, {bookLanguage: Languages.BG})}
        />
        <BookItem
          title={t('englishEdition.title')}
          price={t('englishEdition.price')}
          buyButtonText={t('englishEdition.buttonText')}
          imageSrc={frontCoverEn}
          linkTo={generatePath(AppRoutes.CONTACT, {bookLanguage: Languages.EN})}
        />
        <BookItem
          title={t('storytelEdition.title')}
          buyButtonText={t('storytelEdition.buttonText')}
          imageSrc={frontCoverBg}
          disabled
        />
        <BookItem
          title={t('amazonEdition.title')}
          price={t('amazonEdition.price')}
          buyButtonText={t('amazonEdition.buttonText')}
          imageSrc={frontCoverEn}
          linkTo={amazonLink}
        />
      </div>
    </div>
  );
}
