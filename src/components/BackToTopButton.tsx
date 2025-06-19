import {Button, type ButtonProps} from "./Button.tsx";
import {cn} from "../lib/stylesUtils.ts";

export function BackToTopButton(props: ButtonProps) {
  const {className, ...rest} = props;

  return (
    <Button.Primary
      className={cn(
        "sticky bottom-6 self-end size-11 border-2 border-white rounded-full m-6 flex items-center justify-center",
        className
      )}
      {...rest}
    >
      ↑
    </Button.Primary>
  );
}