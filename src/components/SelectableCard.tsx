import type {ReactNode} from "react";

import {cn} from "../lib/stylesUtils.ts";

interface SelectableCardProps {
  isSelected: boolean;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  onClick?: () => void;
}

export function SelectableCard(props: SelectableCardProps) {
  return (
    <div
      className={cn(
        'p-0.5',
        props.isSelected ? 'bg-gradient-to-b from-[#ED639E] to-[#363986]' : 'border border-[#D0D1EB] p-0.25 bg-white',
        props.onClick && 'cursor-pointer',
        props.containerClassName,
      )}
      onClick={props.onClick}
    >
      <div className={cn('bg-white p-4.5 h-full', props.className)}>
        {props.children}
      </div>
    </div>
  );
}