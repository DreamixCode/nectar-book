import {cn} from "../lib/stylesUtils.ts";

interface IconProps {
  src: string;
  alt?: string;
  className?: string;
}

export function Icon(props: IconProps) {
  return(
    <div
      className={cn(
        'flex justify-center items-center size-10 rounded-full bg-[#FFFFFF40]',
        props.className
      )}
    >
      <img src={props.src} alt={props.alt || 'icon'}/>
    </div>
  )
}