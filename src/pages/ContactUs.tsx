import {useMemo, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {Trans, useTranslation} from "react-i18next";
import {type SubmitHandler, useForm} from "react-hook-form";

import {Button, SelectableCard} from "@/components";
import type {OptionKey, Options} from "@/types";
import {Languages} from "@/types";
import frontCoverBg from '../assets/images/front-cover-bg.jpg';
import bookCoverBg from '../assets/images/book-cover-bg.jpg';
import frontCoverEn from '../assets/images/front-cover-en.jpg';
import bookCoverEn from '../assets/images/book-cover-en.jpg';
import {initialOptions, optionsKeys} from "@/constants";
import {cn} from "../lib/stylesUtils.ts";

interface IContactForm {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}

interface EmailData {
  formData: IContactForm;
  bookData?: Partial<Options>;
}

export function ContactUsPage(){
  const {t, i18n} = useTranslation();
  const params = useParams<{bookLanguage: string}>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>();

  const [options, setOptions] = useState<Options>(initialOptions);
  const price = useMemo(() => {
    return Object.values(options).reduce((total, option) => {
      return total + (option.selected ? option.price : 0);
    }, 0);
  }, [options]);

  function toggleOption(key: OptionKey) {
    return () => setOptions((prevOptions) => ({
      ...prevOptions,
      [key]: {
        ...prevOptions[key],
        selected: !prevOptions[key].selected,
      },
    }));
  }

  const onSubmit: SubmitHandler<IContactForm> = (data) => {
    const emailData: EmailData = {
      formData: data
    };

    if (params.bookLanguage) {
      emailData.bookData = Object.keys(options)
        .filter((key) => options[key as OptionKey].selected)
        .reduce((acc, key) => {
        acc[key as OptionKey] = options[key as OptionKey];
        return acc;
        }, {} as Partial<Options>);
    }
    console.log('Form submitted', emailData);
  }

  const frontCoverSrc = i18n.language === Languages.EN ? frontCoverEn : frontCoverBg;
  const bookCoverSrc = i18n.language === Languages.EN ? bookCoverEn : bookCoverBg;

  return (
    <div className='section-height contact-background flex items-start justify-center px-6 py-9'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-[#EBEBF3] max-w-[50rem] grow flex flex-col gap-6 p-6 @container'
      >
        <Button.Outlined
          className='self-start text-black bg-white'
          childrenClassName='border-black'
          onClick={() => navigate(-1)}
        >
          {t('contactUs.backButton')}
        </Button.Outlined>


        <div className={cn('grid @mobile:grid-cols-5 grid-cols-2 gap-6', !params.bookLanguage && 'hidden')}>
          <SelectableCard
            isSelected={options.book.selected}
            className='flex justify-start flex-wrap items-end gap-6'
            containerClassName='@mobile:col-span-5 col-span-2'
          >
            <img src={frontCoverSrc} alt='book cover' width='114' height='161' />
            <img src={bookCoverSrc} alt='book cover' width='247' height='161' className='@max-mobile:hidden' />
            <p className='text-3xl'>{t('contactUs.bookPrice')}</p>
          </SelectableCard>

          {optionsKeys.map((key) => (
            <SelectableCard
              key={key}
              isSelected={options[key as OptionKey].selected}
              onClick={toggleOption(key as OptionKey)}
              containerClassName={options[key as OptionKey].containerClassName}
            >
              <OptionCard
                title={'contactUs.' + key + '.title'}
                description={'contactUs.' + key + '.description'}
              />
            </SelectableCard>
          ))}
        </div>

        <p className={cn('self-end', !params.bookLanguage && 'hidden')}>
          {t('contactUs.totalPrice', { price: price.toFixed(2) })}
        </p>

        <h3>{t('contactUs.orderBook')}</h3>

        <input
          className={cn('border border-[#D4D4DF] p-2', errors.name && 'border-red-600')}
          placeholder={t('contactUs.form.name')}
          {...register('name', { required: true })}
        />

        <input
          className={cn('border border-[#D4D4DF] p-2', errors.email && 'border-red-600')}
          placeholder={t('contactUs.form.email')}
          {...register('email', { required: true })}
        />

        <input
          className={cn('border border-[#D4D4DF] p-2', errors.address && 'border-red-600')}
          placeholder={t('contactUs.form.phoneNumber')}
          {...register('phoneNumber', { required: true })}
        />

        <textarea
          className={cn('border border-[#D4D4DF] p-2', errors.address && 'border-red-600')}
          placeholder={t('contactUs.form.address')}
          rows={4}
          {...register('address', { required: true })}
        />

        <Button.Primary className='self-end' type='submit'>
          {t('contactUs.sendButton')}
        </Button.Primary>
      </form>
    </div>
  )
}

interface ContactUsPageProps {
  title: string;
  description: string;
}

function OptionCard(props: ContactUsPageProps) {
  const {title, description} = props;

  return (
      [<p key={1} className='font-semibold bg-gradient-to-b from-[#ED639E] to-[#363986] bg-clip-text text-transparent'>
        <Trans i18nKey={title}/>
      </p>,
      <p key={2} className='text-xs'>
        <Trans i18nKey={description}/>
      </p>]
  );
}
