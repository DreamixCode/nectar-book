import nectarVideo from '../../../assets/videos/Nectar-9-16-2K-BULG.mp4';

export function BookVideo() {
  return (
    <div className='section-height book-video-background flex items-center justify-center text-white'>
      <div className='bg-blue-900 w-[278px] h-[494px]'>
        <video height='484px' width='278px' autoPlay loop muted controls>
          <source src={nectarVideo} type='video/mp4'/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
