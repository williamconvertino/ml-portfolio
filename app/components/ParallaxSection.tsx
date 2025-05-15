'use client';

import { Parallax } from 'react-parallax';

export default function ParallaxSection() {
  return (
    <div className="relative min-h-[200vh]">
      <Parallax
        blur={0}
        bgImage="/background.jpg"
        strength={800}
        bgImageStyle={{
          objectFit: 'cover',
          objectPosition: '33.33% center',
          width: '100%',
          height: '100%',
          transform: 'translate3d(0, 0, 0)'
        }}
        style={{
          height: '180vh',
          transform: 'translateY(-25%)'
        }}
      >
        <div className="min-h-[200vh] absolute inset-0 bg-black opacity-50" />
          
        <div className="min-h-[100vh] relative flex items-center">
          <div className="relative w-full flex justify-end -translate-y-[-35vh] mr-20 ml-20">
            <div className="w-[40%] mr-[10%]">
              <p className="text-white text-lg leading-relaxed">
                My name is William Convertino and I'm a PhD student at Duke University. My focus is on improving the interpretability of the transformer for language and vision. I've had a paper accepted at ICML and look forward to furthering my research in the field.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
} 