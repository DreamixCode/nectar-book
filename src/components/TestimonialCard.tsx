import {type ReactElement} from "react";

import {cn} from "../lib/stylesUtils.ts";

interface TestimonialCardProps {
  children: ReactElement<typeof Quote | typeof Author>[];
  className?: string;
}

export function TestimonialCard(props: TestimonialCardProps) {
  const TextComponent = props.children.find(child => child.type === Quote);
  const AuthorComponent = props.children.find(child => child.type === Author);

  return (
    <div className={cn(
      'self-start',
      'flex flex-col justify-between gap-4 px-10 py-6',
      'basis-72 text-sm text-[#171838] bg-[#FFFFFFE5]',
      props.className
    )}>
      {TextComponent}
      {AuthorComponent}
    </div>
  );
}

interface TextProps {
  className?: string;
  children: React.ReactNode;
}

function Quote(props: TextProps) {
  return (
    <p className={props.className}>
      {props.children}
    </p>
  );
}

interface AuthorProps {
  className?: string;
  children: React.ReactNode;
}

function Author(props: AuthorProps) {
  return (
    <p className={cn('font-bold', props.className)}>
      {props.children}
    </p>
  );
}

TestimonialCard.Quote = Quote;
TestimonialCard.Author = Author;
