import {Link, type To} from "react-router";

import {cn} from "../lib/stylesUtils.ts";
import {Button} from "./Button.tsx";

interface BookItemProps {
  className?: string;
  imageSrc?: string;
  title: string;
  price?: string | number;
  currencySign?: string;
  buyButtonText: string;
  linkTo?: To;
  disabled?: boolean;
}

export function BookItem(props: BookItemProps) {
  const {className, imageSrc, title, price, buyButtonText, linkTo = "#", disabled} = props;
  return (
    <div
      className={cn(
        'bg-[#EBEDF3D6] w-[18rem] h-[32rem] flex justify-between flex-col px-12 py-10 gap-8',
        className,
      )}
    >
      <div className='flex flex-col justify-between gap-2'>
        <img
          src={imageSrc} alt={title}
          className='max-w-full h-[271px] object-contain'
        />

        <div className='flex flex-col text-lg text-[#171838]'>
          {title && <p>{title}</p>}
          {price && <p>{price}</p>}
        </div>
      </div>

      <Link to={linkTo} className={cn(disabled && 'cursor-not-allowed')}>
        <Button.Primary className='w-full' disabled={disabled}>
          {buyButtonText}
        </Button.Primary>
      </Link>
    </div>
  );
}
