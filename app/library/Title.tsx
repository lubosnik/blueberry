import { PropsWithChildren } from 'react';

export const Title = ({ children }: PropsWithChildren) => {
  return (
    <p className="text-pink-500 font-light text-xl sm:text-3xl">{children}</p>
  );
};
