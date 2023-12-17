import { Header } from './library/Header';
import { Bow } from './library/Bow';
import bg from '../public/testimage.jpg';
import { Footer } from './library/Footer';
import { Title } from './library/Title';
import { Text } from './library/Text';
import { Hr } from './library/Hr';

export default function Home() {
  const gradientClasses =
    'bg-gradient-radial from-fuchsia-900/25 to-transparent to-50%';

  return (
    <div className="h-full text-white ">
      <div className="fixed h-full w-full bg-gradient-to-r from-gray-900 via-purple-950/75 to-purple-950 z-[-1]" />
      <Header />
      <div className="z-10 absolute w-full">
        <div className="px-6 sm:px-16 z-10 space-y-3 sm:space-y-14">
          <div
            className={`flex flex-col items-center text-justify sm:text-center pt-6 mb-20 backdrop-blur-md space-y-10 ${gradientClasses}`}
          >
            <Title>Lorem Ipsum</Title>
            <Text>
              Posilňujeme Tradíciu: <br className="hidden sm:inline" /> Pripojte
              sa k nám ako hrdý sponzor folklórnej hudobnej slávnosti!
            </Text>
          </div>
          <div>
            <Bow className="mx-auto" />
          </div>
          <Hr />

          <div className="visible sm:hidden">
            <Title>Lorem Ipsum</Title>
          </div>
          <div className="flex flex-col-reverse sm:flex-row text-center justify-center sm:justify-around items-center py-6 ">
            <div
              className={`basis-1/2 text-justify sm:text-right flex flex-col xl:items-end ${gradientClasses}`}
            >
              <div className="hidden sm:block mb-6">
                <Title> Lorem Ipsum</Title>
              </div>
              <Text>
                Podporujeme folklórnu hudbu a tanec s hrdosťou! Sme hľadajúci
                sponzor pre našu ľudovú hudobnú udalosť, ktorá oslavuje bohatú
                slovenskú kultúru.
              </Text>
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

          <Hr />

          {/* Galery */}
          <div className="flex flex-row group py-5 mx-auto ">
            <div
              className={`container mx-auto max-w-lg flex gap-1 flex-wrap basis-1/2 justify-end backdrop-blur-sm ml-auto mr-0`}
            >
              {/* <div className="absolute left-0 w-7/12 group-hover:w-full  h-full bg-gradient-to-r from-purple-950 from-[-30%] to-[80%] to-transparent transition-all" /> */}
              <img
                className="absolute top-1 left-5"
                width={150}
                height={150}
                src={bg.src}
                alt={'asdklfj'}
              />
              <img
                className="absolute top-20 left-20 group-hover:top-30 group-hover:left-30 shadow-gray-700"
                width={150}
                height={150}
                src={bg.src}
                alt={'asdklfj'}
              />
            </div>
            <div className="flex flex-col justify-between basis-1/2">
              <Text>Objevte kouzlo lidového tance v naší galerii</Text>
              <div className="m-auto flex items-center group-hover:border-purple-600 group-hover:border group-hover:rounded-md cursor-pointer p-3">
                <a href="/galery" className="text-pink-500 text-xl font-light">
                  Pozriet si Galériu
                </a>
              </div>
            </div>
          </div>

          <Hr />
        </div>

        <div className="absolute w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
