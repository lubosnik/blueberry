'use client';

import { MouseEvent, MouseEventHandler, useMemo } from 'react';
import { Header } from '../library/Header';
import bg from '../../public/sm/testImage.png';
import { Title } from '../library/Title';
import { Hr } from '../library/Hr';

export default function Galery() {
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

  const handleImageClick: MouseEventHandler<HTMLImageElement> = (event) => {
    const IN_DETAIL = 'IN_DETAIL';
    const isBig = event.currentTarget.getAttribute(IN_DETAIL) === 'true';
    const smallClassnames = 'w-2/12 p-1 transition-all';
    const biggerClassnames =
      'transition-all fixed w-full h-full bg-black/50 p-6 z-100 top-0 left-0';

    if (isBig) {
      event.currentTarget.setAttribute(IN_DETAIL, 'false');
      event.currentTarget.className = smallClassnames;
    } else {
      event.currentTarget.setAttribute(IN_DETAIL, 'true');
      event.currentTarget.className = biggerClassnames;
    }
  };

  return (
    <div className="w-full z-0 bg-gradient-to-r from-indigo-950 from-[-20%] via-purple-950 to-purple-950 ">
      <Header />

      <div className="px-6 sm:px-16 space-y-10">
        {/* section title */}
        <div className="my-10">
          <Title>Vystupenie V Kastieli budimir</Title>
          <div className="flex flex-col p-5 mt-10 text-gray-800 rounded-xl bg-white shadow-sm">
            <i className="self-end italic">29.03.2003</i>
            <div className="mt-2 mb-4">
              <Hr />
            </div>
            lkdsjf sadfjlk sjdlk jslkfjalskdfj lksdjfl ksajdlk sjlkjaslk
            jfdsalkjf alskjdlfk jsdlkfj sldkjf lksaj flksj lksj
          </div>
        </div>
        {/* Images */}
        <section className="flex flex-wrap">
          {images1.map((image, index) => {
            return (
              <img
                onClick={handleImageClick}
                key={index}
                className="w-2/12 p-1"
                src={image.src}
                alt=""
              />
            );
          })}
        </section>
        <Hr />
      </div>
      <div className="px-6 sm:px-16 space-y-10">
        {/* section title */}
        <div className="my-10">
          <Title>Vystupenie V Kastieli budimir</Title>
          <div className="flex flex-col p-5 mt-10 text-gray-800 rounded-xl bg-white shadow-sm">
            <i className="self-end italic">29.03.2003</i>
            <div className="mt-2 mb-4">
              <Hr />
            </div>
            lkdsjf sadfjlk sjdlk jslkfjalskdfj lksdjfl ksajdlk sjlkjaslk
            jfdsalkjf alskjdlfk jsdlkfj sldkjf lksaj flksj lksj
          </div>
        </div>
        {/* Images */}
        <section className="flex flex-wrap">
          {images1.map((image, index) => {
            return (
              <img
                onClick={(e) => {}}
                key={index}
                className="w-2/12 p-1"
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
