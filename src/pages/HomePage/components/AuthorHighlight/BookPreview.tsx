import {Trans, useTranslation} from "react-i18next";

import {Button} from "@/components";
import {cn} from "@/lib/stylesUtils.ts";

export function BookPreview() {
  const {t} = useTranslation();

  return (
    <div className={cn(
      'book-preview-background max-w-[30rem] flex flex-col gap-10 p-10 text-white',
      '@max-md:order-2 @max-md:max-w-[30rem]',
      )}
    >
      <Trans
        i18nKey='homePage.authorHighlight.shirtExcerpt'
      />
      <Button.Outlined className={cn(
        'self-start',
        '@max-md:order-1',
      )}>
        {t('homePage.authorHighlight.readExcerpt')}
      </Button.Outlined>
    </div>
  );
}