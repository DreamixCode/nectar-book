import authorImage from '../../../assets/images/author.jpg';
import {BookPreview} from "./AuthorHighlight/BookPreview.tsx";
import {AuthorInfo} from "./AuthorHighlight/AuthorInfo.tsx";
import {cn} from "@/lib/stylesUtils.ts";

export function AuthorHighlight() {
  return (
    <div
      id='author-highlight'
      className='section-height author-highlight-background flex items-center justify-center px-6 py-9 @container'
    >
      <div className={cn(
        'max-w-[50rem] basis-[50rem] min-h-[43rem] flex items-center @container',
        '@max-md:flex-col @max-md:max-w-[24rem]',
      )}>
        <div
          className={cn(
            'flex flex-col gap-16 self-start',
            '@max-md:order-2 @max-md:w-full @max-md:-mt-10',
          )}
        >
          <BookPreview/>
          <AuthorInfo/>
        </div>

        <div className={cn(
          'w-[22.75rem] h-[545px] -ml-9',
          '@max-md:order-1 @max-md:self-start @max-md:ml-0',
        )}>
          <img src={authorImage} alt='author' />
        </div>
      </div>
    </div>
  );
}
