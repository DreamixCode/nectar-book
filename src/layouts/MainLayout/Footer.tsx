import amazonLogo from '../../assets/icons/amazon.svg';
import instagramLogo from '../../assets/icons/instagram.svg';
import tiktokLogo from '../../assets/icons/tiktok.svg';
import {Button} from "../../components/Button.tsx";


export function Footer() {
  return (
    <div className='min-h-[11.5rem] bg-[#10114C] flex justify-center items-center mt-auto'>
      <div className='max-w-[90rem] grow grid grid-cols-3 items-center px-16 py-12 text-white'>
        <div>
          <p>
            Контакти
          </p>

          <div>
            <p>+359 885 654 09</p>
            <p>k.krisalis@gmail.com</p>
          </div>
        </div>

        <div className='text-center underline'>
          Политика за поверителност
        </div>

        <div className='flex justify-end gap-2'>
          <Button.Icon src={instagramLogo} alt='instagram-button' />
          <Button.Icon src={tiktokLogo} alt='tiktok-button' />
          <Button.Icon src={amazonLogo} alt='amazon-button' />
        </div>
      </div>
    </div>
  );
}