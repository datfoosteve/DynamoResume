import React from 'react'
import FloatingPop from './FloatingPop'
import FloatingTabs from './FloatingTabs'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';


function Layout({ children }) {
  return (<>
    <ParallaxProvider
    >
      <FloatingPop />
      <FloatingTabs />
      {children}
    </ParallaxProvider>
  </>
  );
}

export default Layout