'use client';

import { useMemo, useState } from 'react';
import { Header } from '../library/Header';
import bg from '../../public/sm/testImage.png';

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
    <div className="w-full z-0 bg-white">
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

      <section className="flex flex-wrap">
        {images1.map((image) => {
          return (
            <img
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
    </div>
  );
}
