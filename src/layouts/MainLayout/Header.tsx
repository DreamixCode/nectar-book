import {Link} from "react-router";
import {useTranslation} from "react-i18next";

import {AppRoutes} from "@/appRoutes.ts";
import {Button} from "@/components";
import {headerLinks} from "@/constants";
import {cn} from "@/lib/stylesUtils.ts";
import {langMap, Languages} from "@/types";
import {HeaderLink} from "./Header/HeaderLink.tsx";
import {HeaderMenu} from "@/layouts/MainLayout/Header/HeaderMenu.tsx";

export function Header() {
  const {t, i18n} = useTranslation();

  function toggleLanguage() {
    const newLanguage = i18n.language === 'bg' ? 'en' : 'bg';
    i18n.changeLanguage(newLanguage).finally();
  }

  return (
    <div className='header-height sticky top-0 z-100 bg-white flex justify-center items-center px-6 uppercase'>
      <div className='flex items-center gap-8 growl basis-[90rem] @container'>
        <div className='grow text-2xl font-semibold tracking-[0.48px]'>
          <Link
            className={cn(
              'bg-gradient-to-b from-[#ED639E] to-[#363986] bg-clip-text text-transparent ml-8',
              '@max-md:ml-0',
            )}
            to={AppRoutes.HOME}
          >
            {t('header.title')}
          </Link>
        </div>

        <div className={cn('flex gap-8 items-center', '@max-md:gap-4')}>
          <div className={cn('flex gap-8 items-center', '@max-md:hidden')}>
            {headerLinks.map((headerLink) => (
              <HeaderLink key={headerLink.translationKey} headerLink={headerLink}/>
            ))}
          </div>

          <Button.Text
            onClick={toggleLanguage}
            className='p-0 size-8 hover:bg-gradient-to-r hover:from-[#ED639E] hover:to-[#363986] hover:bg-clip-text hover:text-transparent'
          >
            {langMap[i18n.language as Languages].displayCode}
          </Button.Text>

          <HeaderMenu
            headerLinks={headerLinks}
            className='@md:hidden size-8 flex items-center justify-center'
          />
        </div>
      </div>
    </div>
  );
}
