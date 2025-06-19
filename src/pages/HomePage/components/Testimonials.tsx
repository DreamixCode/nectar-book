import {useMemo} from "react";
import {useTranslation} from "react-i18next";

import {TestimonialCard} from "../../../components";

const keyPrefix = 'homePage.testimonials.testimonial';

export function Testimonials(){

  const {t, i18n} = useTranslation();
  const testimonialKeys = useMemo(() => {
    const allTestimonials = [];
    let count = 1;

    while (i18n.exists(keyPrefix + count)) {
      const key = keyPrefix + count;
      allTestimonials.push(key)
      count++;
    }

    return allTestimonials;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <div
      id='testimonials'
      className='section-height testimonials-background flex justify-center items-center px-6 py-9'
    >
      <div className='basis-[59rem] testimonials-items-container justify-items-center gap-6'>
        {testimonialKeys.map((key) => (
          <TestimonialCard key={key}>
            <TestimonialCard.Quote>
              {t(`${key}.quote`)}
            </TestimonialCard.Quote>
            <TestimonialCard.Author>
              {t(`${key}.author`)}
            </TestimonialCard.Author>
          </TestimonialCard>
        ))}
      </div>
    </div>
  );
}
