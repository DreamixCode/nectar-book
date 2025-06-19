import {generatePath, Link} from "react-router";
import {useTranslation} from "react-i18next";

import {Button} from "@/components";
import type {IHeaderLink} from "@/types";
import {useMemo} from "react";
import {cn} from "@/lib/utils.ts";

interface HeaderLinkProps {
  headerLink: IHeaderLink;
  className?: string;
  linkClassName?: string;
}

export function HeaderLink(props: HeaderLinkProps) {
  const {headerLink, className, linkClassName} = props;
  const {t} = useTranslation();

  const path = useMemo(() => {
    const to = headerLink.id ? `${headerLink.to}#${headerLink.id}` : headerLink.to;
    return generatePath(to);
  }, [headerLink.to, headerLink.id]);

  return (
    <Link
      to={path}
      className={cn('flex', linkClassName)}
    >
      <Button.Text
        key={headerLink.translationKey}
        className={cn(
          'p-0 hover:bg-gradient-to-r hover:from-[#ED639E] hover:to-[#363986] hover:bg-clip-text hover:text-transparent',
          className
        )}
      >
        {t(headerLink.translationKey)}
      </Button.Text>
    </Link>
  );
}