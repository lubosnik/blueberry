import * as React from 'react';

type CardProps = {
  /**
   * image source
   */
  src: string;
  /**
   * image alt
   */
  alt: string;
  /**
   * Button title
   */
  actionTitle: string;
  /**
   * Inner text
   */
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Card = ({ src, alt, actionTitle, onClick, text }: CardProps) => {
  return (
    <div className="container flex flex-col items-center shadow-md rounded-b-lg">
      <img className="rounded-t-lg shadow-lg" src={src} alt={alt} />
      {text && <div className="text-black text-sm p-3 text-center">{text}</div>}
      <div className="p-2 w-5/6    flex items-center justify-center ">
        <button
          className="py-2 bg-purple-500 w-1/2 text-white rounded-lg "
          onClick={(e) => onClick?.(e)}
        >
          {actionTitle}
        </button>
      </div>
    </div>
  );
};
