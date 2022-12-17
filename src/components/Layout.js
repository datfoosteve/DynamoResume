import React from 'react'
import FloatingPop from './FloatingPop'
import FloatingTabs from './FloatingTabs'
import { ParallaxBanner } from 'react-scroll-parallax';

const Layout = ({ children }) => {
  return (<>
  <ParallaxBanner
    layers={[
      { image: 'https://github.com/datfoosteve/DynamoResume/blob/main/public/images/svgasset/svg_15.svg', speed: -20 },
      { image: 'https://github.com/datfoosteve/DynamoResume/blob/main/public/images/svgasset/svg_14.svg', speed: -10 },
      { image: 'https://github.com/datfoosteve/DynamoResume/blob/main/public/images/svgasset/svg_13.svg', speed: -5 },
      { image: ' ', speed: -2 },
      { image: '/public/images/svgasset/svg_11.svg', speed: -1 },
      { image: '/public/images/svgasset/svg_10.svg', speed: 0 },
      { image: '/public/images/svgasset/svg_9.svg', speed: 1 },
      { image: '/public/images/svgasset/svg_8.svg', speed: 2 },
      { image: '/public/images/svgasset/svg_7.svg', speed: 5 },
      { image: '/public/images/svgasset/svg_6.svg', speed: 10 },
      { image: '/public/images/svgasset/svg_5.svg', speed: 20 },
      { image: '/public/images/svgasset/svg_4.svg', speed: 30 },
      { image: '/public/images/svgasset/svg_3.svg', speed: 40 },
      { image: '/public/images/svgasset/svg_2.svg', speed: 50 },
      { image: '/public/images/svgasset/svg_1.svg', speed: 60 }
    ]}
    className="aspect-[2/1]"
  />
      <FloatingPop />
      <FloatingTabs />
      {children}
    </>
  )
}

export default Layout