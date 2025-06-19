import {useEffect} from "react";
import {useLocation, useOutletContext} from "react-router";

import './HomePage.css';
import {AuthorHighlight} from "./components/AuthorHighlight.tsx";
import {BookInfo} from "./components/BookInfo.tsx";
import {BookVideo} from "./components/BookVideo.tsx";
import {Testimonials} from "./components/Testimonials.tsx";
import {BookList} from "./components/BookList.tsx";
import {BackToTopButton} from "../../components/BackToTopButton.tsx";

export function HomePage() {
  const {scrollToTop} = useOutletContext<{ scrollToTop: () => void }>();
  const {hash} = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.startsWith('#') ? hash.slice(1) : hash; // Remove the '#' if present
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className='flex flex-col relative'>
      <AuthorHighlight />
      <BookInfo />
      <BookVideo />
      <Testimonials />
      <BookList />
      <BackToTopButton onClick={scrollToTop} />
    </div>
  );
}

