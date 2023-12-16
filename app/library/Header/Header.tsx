import { forwardRef } from 'react';
import bgImage from '../../../public/bgImage.png';
import { Blueberry } from './assets/Blueberry';
import { Bow } from '../Bow';

export const Header = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <header
      ref={ref}
      className="static backdrop-blur-md flex items-center justify-center max-h-[40vh]  max-w-full overflow-hidden z-2"
    >
      <img
        className="w-full z-9 blur-md opacity-70 bg-gradient-to-t from-purple-950 from-80% to-transparent"
        src={bgImage.src}
      />
      <header className="absolute flex flex-col items-center">
        <h1 className="mx-auto text-center text-2xl font-light tracking-widest">
          Folklórny súbor
          {/* <br className="mb-2" /> */}
          &nbsp;
          <span className="inline-flex align-middle">
            Čuč
            <span className="inline mt-2 z-10">
              <Blueberry />
            </span>
            <span className="ml-[-16px]">oriedka</span>
          </span>
        </h1>
        <Bow />
      </header>
    </header>
  );
});
