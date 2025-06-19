import {useState} from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui";
import hamburgerMenuIcon from "@/assets/icons/hamburgerMenu.svg";
import {HeaderLink} from "@/layouts/MainLayout/Header/HeaderLink.tsx";
import type {IHeaderLink} from "@/types";

interface HeaderMenuProps {
  open?: boolean;
  headerLinks: IHeaderLink[];
  className?: string;
}

export function HeaderMenu(props: HeaderMenuProps) {
  const {open = false, headerLinks, className} = props;
  const [menuOpen, setMenuOpen] = useState<boolean>(open);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <DropdownMenu open={menuOpen} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger className={className}>
        <img src={hamburgerMenuIcon} alt='menu-icon' />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {headerLinks.map((headerLink) => (
          <DropdownMenuItem key={headerLink.translationKey} onClick={closeMenu}>
            <HeaderLink headerLink={headerLink} className='grow flex justify-start' linkClassName='grow'/>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
