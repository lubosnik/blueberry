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
      <div
        // style={{
        //   marginTop: `${headerHeight}px`,
        // }}
        className="absolute"
      >
        <div className=" px-5 z-10 bg-slate-50">
          <div className="text-center pt-6">
            <p className="text-purple-600 font-bold text-2xl">Lorem Ipsum</p>
            <hr className="bg-slate-400 shadow-sm my-4" />
            <p className="text-black font-normal text-1xl">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum
            </p>
          </div>
          <hr className="bg-slate-400 shadow-sm my-4" />
          <div className="space-y-5 py-5">
            <Card src={bg} actionTitle="Galery" alt="Galery of events" />
          </div>
          <div className="d-flex flex-col justify-center text-center py-6">
            <p className="text-purple-600 font-bold text-2xl">Lorem Ipsum</p>
            <hr className="bg-slate-400 shadow-sm my-4 w-5/6" />
            <p className="text-black font-normal text-1xl">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum
            </p>
          </div>
        </div>
        <div className="absolute">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
