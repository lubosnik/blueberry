import { forwardRef, useState } from 'react';
import bgImage from '../../../public/bgImage.png';
import { Blueberry } from './assets/Blueberry';
import { Bow } from '../Bow';

export const Header = forwardRef<HTMLDivElement>((_, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <header
      ref={ref}
      className="static flex items-center justify-center max-h-[70vh]  max-w-full overflow-hidden"
    >
      {!isLoaded && <div> Loading</div>}
      {isLoaded && (
        <img
          className=" w-full "
          src={bgImage.src}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      <header className="absolute flex flex-col items-center">
        <h1 className="mx-auto text-center text-2xl font-semibold tracking-widest">
          Folklórny súbor
          <br className="mb-2" />
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
