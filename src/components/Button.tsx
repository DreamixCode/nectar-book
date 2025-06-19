import {type ButtonHTMLAttributes} from "react";

import {cn} from "../lib/stylesUtils.ts";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  childrenClassName?: string;
}

export function Button(props: ButtonProps) {
  const { className, childrenClassName, disabled, ...rest } = props;

  return (
    <button
      className={cn(
        'cursor-pointer uppercase px-4 py-2',
        disabled && 'cursor-not-allowed',
        className
      )}
      onClick={rest.onClick}
    >
      <span className={childrenClassName}>{rest.children}</span>
    </button>
  )
}

function Primary(props: ButtonProps) {
  const { className, ...rest } = props;

  return (
    <Button
      className={cn(
        'bg-gradient-to-r from-[#ED639E] from-[-17.65%] to-[#363986] to-[81.93%] text-white',
        props.disabled ? 'bg-gray-400' : 'hover:from-[#363886] hover:to-[#363886]',
        className
      )}
      {...rest}
    />
  )
}

function Outlined(props: ButtonProps) {
  const { className, childrenClassName, ...rest } = props;

  return (
    <Button
      className={cn(
        'p-0 bg-transparent hover:bg-white flex justify-center items-center',
        className)}
      childrenClassName={cn(
        'px-4 py-2 border border-white hover:bg-gradient-to-r hover:from-[#ED639E] hover:to-[#363986] hover:bg-clip-text hover:text-transparent',
        childrenClassName
      )}
      {...rest}
    />
  )
}

function Text(props: ButtonProps) {
  const { className, ...rest } = props;

  return (
    <Button
      className={cn('bg-transparent  text-black', className)}
      {...rest}
    />
  )
}

interface ButtonIconProps extends ButtonProps {
  src: string;
  alt?: string;
}

function Icon(props: ButtonIconProps) {
  const { className, ...rest } = props;

  return (
    <Button
      className={cn(
        'bg-[#FFFFFF40] hover:bg-[#FFFFFF60] flex justify-center items-center rounded-full size-10 p-0',
        className
      )}
      {...rest}
    >
      <img src={props.src} alt={props.alt || 'icon'} />
    </Button>
  )
}

Button.Primary = Primary;
Button.Outlined = Outlined;
Button.Text = Text;
Button.Icon = Icon;