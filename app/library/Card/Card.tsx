import Image from 'next/image';
import Link from 'next/link';
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
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Card = ({ src, alt, actionTitle, text, className }: CardProps) => {
  return (
    <div
      className={`container mx-auto max-w-md flex flex-col items-center shadow-md rounded-b-lg ${className}`}
    >
      <img
        width={500}
        height={500}
        className="rounded-t-md shadow-lg"
        src={src}
        alt={alt}
      />
      {text && <div className="text-black text-sm p-3 text-center">{text}</div>}
      <div className="my-2 mr-2 w-full flex items-center justify-center ">
        <button className="py-2 bg-purple-500 w-1/2 text-white rounded-lg ">
          <Link href={'/galery'}>{actionTitle}</Link>
        </button>
      </div>
    </div>
  );
};
