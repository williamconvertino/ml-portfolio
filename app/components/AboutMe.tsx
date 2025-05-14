'use client';

import { Parallax } from 'react-parallax';

export default function AboutMe() {
  return (
    <div id="about" className="relative min-h-[110vh]">
      <Parallax
        blur={0}
        bgImage="/background.jpg"
        strength={300}
        bgImageStyle={{
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100%',
          height: '110%'
        }}
        style={{
          height: '120vh'
        }}
      >
        <div className="min-h-[120vh] relative flex items-center">
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative w-full flex justify-end -translate-y-[4vh]">
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