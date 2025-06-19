import {useEffect, useRef} from "react";
import {Outlet, useLocation} from "react-router";

import './MainLayout.css';
import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";

export function MainLayout() {
  const mainLayoutRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    mainLayoutRef?.current?.scrollTo({top: 0});
  }, [location.pathname]);

  function scrollToTop() {
    if (mainLayoutRef.current) {
      mainLayoutRef.current.scrollTo({behavior: 'smooth', top: 0});
    }
  }

  return (
    <div className='w-full h-screen flex flex-col relative overflow-x-auto' ref={mainLayoutRef}>
      <Header />
      <Outlet context={{ scrollToTop }} />
      <Footer />
    </div>
  )
}

