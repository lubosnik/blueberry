import { Header } from './library/Header/';
import { Card } from './library/Card/';
import bg from '../public/testimage.jpg';
import { useRef } from 'react';
import { Footer } from './library/Footer';

function App() {
  const header = useRef<HTMLDivElement>(null);
  // const [headerHeight, setHeaderHeight] = useState(50);
  // console.log(header.current?.scrollHeight);
  // const { height } = useResize(header);
  // console.log(height);
  // useLayoutEffect(() => {
  //   if (header.current) {
  //     const h = header.current.offsetHeight;

  //     setHeaderHeight(h);
  //   }
  // }, [header.current?.offsetHeight]);

  return (
    <div className="h-full bg-white ">
      <div className="  z-0">
        <Header ref={header} />
      </div>
      <div className="absolute w-fulla">
        <div className=" px-5 z-10 bg-slate-50">
          <div className="text-center pt-6">
            <p className="text-purple-600 mb-6 font-bold text-3xl">
              Lorem Ipsum
            </p>
            <p className="text-gray-700  font-light text-3xl">
              Posilňujeme Tradíciu: <br className="hidden  sm:inline" />{' '}
              Pripojte sa k nám ako hrdý sponzor folklórnej hudobnej slávnosti!
            </p>
          </div>
          <hr className="bg-slate-400 shadow-sm my-4" />
          <div className="flex flex-row space-y-5 py-5 mx-auto  ">
            <div className="hidden sm:flex basis-1/2 ">
              <p className="mx-auto my-auto text-3xl text-purple-600">
                Galéria
              </p>
            </div>
            <div className="basis-auto sm:basis-1/2">
              <Card src={bg} actionTitle="Galéria" alt="Galery of events" />
            </div>
          </div>
          <p className="text-purple-600 text-center  visible sm:hidden   font-bold text-2xl my-6 ">
            Lorem Ipsum
          </p>
          <hr className="bg-slate-400 shadow-sm h-[1px] my-16" />

          <div className="flex flex-col-reverse sm:flex-row text-center justify-center sm:justify-around items-center py-6 ">
            <div className="basis-1/2">
              <p className="hidden sm:block text-purple-600  text-center sm:text-right font-bold text-2xl my-6 ">
                Lorem Ipsum
              </p>
              <p className="text-2xl  text-center sm:text-right font-light text-gray-700">
                Podporujeme folklórnu hudbu a tanec s hrdosťou! Sme hľadajúci
                sponzor pre našu ľudovú hudobnú udalosť, ktorá oslavuje bohatú
                slovenskú kultúru.
              </p>
            </div>
            <svg
              className="basis-1/2"
              width="100"
              height="100"
              viewBox="2.096 -27.722 295.809 295.809"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M196.489 18.773c23.334 0 42.253 98.376 42.253 219.73h33.81c0-130.692-34.059-236.635-76.062-236.635-23.899 0-45.221 31.84-59.163 81.629-13.939-49.789-35.268-81.629-59.165-81.629-42.003 0-76.066 105.943-76.066 236.635H35.91c0-121.354 18.921-219.73 42.252-219.73 23.338 0 42.264 90.809 42.264 202.834h33.802c.001-112.025 18.921-202.834 42.261-202.834M289.475 221.607c4.586 0 8.43 3.631 8.43 8.408 0 4.853-3.844 8.486-8.43 8.486-4.602 0-8.478-3.635-8.478-8.486 0-4.777 3.876-8.408 8.478-8.408m0 15.661c3.884 0 6.9-3.121 6.9-7.25 0-4.057-3.018-7.174-6.9-7.174-3.932 0-6.945 3.117-6.945 7.174-.001 4.128 3.013 7.25 6.945 7.25zm-3.287-12.159h3.809c2.331 0 3.43.928 3.43 2.82 0 1.785-1.114 2.531-2.574 2.686l2.804 4.367h-1.646l-2.672-4.248h-1.616v4.248h-1.533l-.002-9.873zm1.534 4.386h1.597c1.345 0 2.584-.067 2.584-1.632 0-1.313-1.124-1.519-2.157-1.519h-2.022l-.002 3.151z"
                fill="#ffc300"
              />
            </svg>
          </div>
        </div>

        <div className="absolute w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
