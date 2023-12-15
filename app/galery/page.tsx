'use client';

import { useMemo, useState } from 'react';
import { Header } from '../library/Header';
import bg from '../../public/sm/testImage.png';
import { Title } from '../library/Title';
import { Hr } from '../library/Hr';

export default function Galery() {
  const [focusedImage, setFocusedImage] = useState<string>();

  const images1 = useMemo(
    () => [bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg],
    []
  );
  const images2 = useMemo(
    () => [bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg],
    []
  );
  const images3 = useMemo(
    () => [bg, bg, bg, bg, bg, bg, bg, bg, bg, bg, bg],
    []
  );

  return (
    <div className="w-full z-0 bg-purple-950 p">
      {focusedImage && (
        <img
          className="fixed z-50 w-full h-full"
          src={focusedImage}
          onClick={() => {
            setFocusedImage(undefined);
          }}
        />
      )}
      <Header />

      <div className="px-6 sm:px-16 space-y-10">
        {/* section title */}
        <div className="my-10">
          <Title>Vystupenie V Kastieli budimir</Title>
          <div className="p-5 mt-10 text-gray-800 rounded-xl bg-white shadow-sm">
            lkdsjf sadfjlk sjdlk jslkfjalskdfj lksdjfl ksajdlk sjlkjaslk
            jfdsalkjf alskjdlfk jsdlkfj sldkjf lksaj flksj lksj
          </div>
        </div>
        {/* Images */}
        <section className="flex flex-wrap">
          {images1.map((image, index) => {
            return (
              <img
                key={index}
                onClick={() => {
                  setFocusedImage(image.src);
                }}
                className="w-4/12 p-1"
                src={image.src}
                alt=""
              />
            );
          })}
        </section>
        <Hr />
      </div>
    </div>
  );
}
