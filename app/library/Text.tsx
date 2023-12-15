import { PropsWithChildren } from 'react';

export const Text = ({ children }: PropsWithChildren) => {
  return (
    <p className="font-extralight xl:w-1/2 text-xl sm:text-2xl">{children}</p>
  );
};
