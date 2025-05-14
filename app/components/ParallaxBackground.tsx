"use client";

import { Parallax } from 'react-parallax';

const ParallaxBackground = () => {
  return (
    <div className="absolute inset-0 w-full overflow-hidden" style={{ zIndex: 1 }}>
      <Parallax
        blur={0}
        bgImage="/background.jpg"
        strength={300}
        bgImageStyle={{
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100%',
          height: '100%'
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          width: '100%'
        }}
      >
        <div style={{ height: '100vh' }} />
      </Parallax>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black',
          opacity: 0.4
        }}
      />
    </div>
  );
};

export default ParallaxBackground; 