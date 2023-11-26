import { forwardRef } from 'react';
import bgImage from './assets/bgImage.png';
import { Blueberry } from './assets/Blueberry';

export const Header = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <header ref={ref} className="static flex items-center justify-center">
      <img className="w-full" src={bgImage} />
      <header className="absolute flex flex-col items-center">
        <h1 className="mx-auto text-center text-1xl font-semibold tracking-widest">
          Folklórny súbor
          <br className="mb-2" />
          <span className="inline-flex align-middle">
            Čuč
            <span className="inline mt-2 z-10">
              <Blueberry />
            </span>
            <span className="ml-[-10px]">oriedka</span>
          </span>
        </h1>
        <svg
          className="mt-5"
          width="123"
          height="44"
          viewBox="0 0 123 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.570853 7.19688C5.38217 3.05591 9.56288 0.951891 14.5058 0.183343C16.4755 -0.122884 19.0538 -0.0373179 20.3957 0.378825C22.4629 1.01988 24.4757 2.24681 26.4142 4.04758C27.9255 5.45135 28.6046 6.66839 29.0059 8.69139C29.1089 9.21092 29.22 13.7084 29.2945 20.3758C29.4254 32.1049 29.5008 33.2466 30.3055 35.6872C30.8433 37.3184 31.0312 37.5608 31.6657 37.4412C33.4355 37.1076 35.5277 35.8716 37.9568 33.7246C40.3271 31.6297 42.2622 29.5831 46.1309 25.079C53.7769 16.1773 59.08 10.8923 62.8933 8.37337C66.9542 5.69132 71.0749 4.58971 73.6927 5.48617C74.8122 5.86958 77.0791 7.28722 78.3161 8.37771C80.1229 9.97022 80.7618 11.2835 81.0931 14.0861C81.3155 15.9677 81.1315 17.6046 80.021 23.6273C78.8134 30.1767 78.5361 33.7014 78.9371 37.4061C79.087 38.7916 79.5635 40.5096 79.8976 40.869C79.9868 40.965 80.3985 41.0377 80.8479 41.0368C82.9399 41.0326 85.7569 39.8763 89.3494 37.5473C91.0444 36.4485 92.152 35.6425 96.5631 32.2982C103.396 27.1176 107.077 24.8021 110.112 23.7751C112.563 22.9455 113.958 22.9028 115.538 23.609C117.918 24.6726 121.295 27.5818 122.53 29.6328C122.703 29.9197 122.694 29.9359 122.434 29.814C121.939 29.5818 120.166 28.4217 119.641 27.9858C119.363 27.7558 118.876 27.2087 118.558 26.77L117.98 25.9723L117.073 26.0614C115.396 26.2262 112.9 27.1631 110.498 28.5299C108.04 29.9286 105.958 31.3862 99.9495 35.9145C94.4068 40.092 91.6957 41.8815 89.344 42.9152C86.9325 43.9752 84.8595 44.2579 83.1099 43.7653C80.9631 43.1609 77.0533 40.2928 76.0787 38.6075C75.8467 38.2064 75.4763 37.2936 75.2554 36.579C74.8685 35.3269 74.8536 35.1396 74.8454 31.418C74.84 28.9739 74.9112 27.0589 75.0393 26.2013C75.489 23.1893 75.8668 21.0046 76.6206 17.0552C77.2362 13.8298 77.1734 10.0368 76.4786 8.48139C76.2418 7.95135 75.9636 7.9028 74.5404 8.14321C70.84 8.76828 67.2645 10.7582 62.7241 14.7195C59.4058 17.6144 56.8093 20.3615 51.0888 27.0293C46.5437 32.3267 44.7501 34.2386 42.4785 36.207C39.1503 39.0909 37.1495 40.2306 35.2266 40.3379C34.3577 40.3864 34.1139 40.3413 33.2731 39.9772C32.0928 39.4658 30.1417 38.1101 28.8646 36.9138C27.8185 35.9339 26.7427 34.1633 26.3075 32.7055C25.5778 30.2604 25.5289 29.4247 25.5554 19.8331C25.5875 8.21834 25.405 5.32802 24.53 3.59499C24.254 3.04824 24.1595 2.98276 23.3996 2.81181C22.2272 2.54808 19.0248 2.58547 17.4261 2.88159C14.4629 3.43035 11.8877 4.43549 8.73062 6.27556C5.28412 8.28432 2.68547 10.2873 0.353111 12.7326"
            fill="#60005C"
          />
          <path
            d="M119.26 26.0772C120.638 27.2377 121.881 28.5544 122.531 29.6336C122.704 29.9205 122.695 29.9367 122.435 29.8148C121.94 29.5827 120.167 28.4225 119.642 27.9866C119.364 27.7566 118.877 27.2095 118.559 26.7708L117.981 25.9731C117.981 25.9731 118.936 26.1725 119.26 26.0772ZM75.7113 37.8272C75.5464 37.4309 75.3784 36.975 75.2563 36.5797C74.8693 35.3276 74.8544 35.1403 74.8463 31.4187C74.8408 28.9746 74.9121 27.0596 75.0401 26.202C75.4899 23.19 75.8676 21.0053 76.6214 17.0559C77.2108 13.9679 77.1784 10.3597 76.5648 8.69291C76.5375 8.61872 76.5133 8.5468 76.4795 8.4821C75.4085 6.43621 74.7243 6.12659 73.6935 5.4865C73.7745 5.51423 73.8615 5.54737 73.9536 5.5854C75.1355 6.07325 77.1694 7.36652 78.3171 8.37802C80.1238 9.97053 80.7628 11.2838 81.094 14.0864C81.3164 15.968 81.1325 17.6049 80.022 23.6276C78.8143 30.177 78.5371 33.7017 78.938 37.4064C79.088 38.7919 79.5645 40.5099 79.8985 40.8693C78.7157 40.3462 76.3559 39.3698 75.7113 37.8269L75.7113 37.8272ZM28.8646 36.9143C27.8185 35.9345 26.7427 34.1638 26.3075 32.706C25.5778 30.2609 25.5289 29.4252 25.5554 19.8336C25.5875 8.21884 25.405 5.32852 24.53 3.5955C24.3922 3.32253 24.2996 3.16952 24.1469 3.06345C23.9938 2.95707 23.4995 2.3147 23.1023 2.00358C22.287 1.36489 20.3954 0.379089 20.3954 0.379089C20.8539 0.521268 21.3097 0.69228 21.7626 0.891964C22.1534 1.06422 22.5419 1.25784 22.9282 1.47271C24.113 2.1318 25.2763 2.99097 26.414 4.04773C27.9252 5.45149 28.6044 6.66853 29.0057 8.69153C29.1087 9.21105 29.2197 13.7085 29.2942 20.376C29.4252 32.105 29.5497 33.2346 30.3052 35.6873C30.5629 36.524 30.649 36.9441 31.2838 37.458C31.0043 37.4528 30.6694 37.5382 30.3697 37.4888C29.832 37.4001 29.741 37.3095 28.8646 36.9147L28.8646 36.9143Z"
            fill="#B10095"
          />
        </svg>
      </header>
    </header>
  );
});
