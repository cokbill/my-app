import React, { FC } from 'react';
import Link from 'next/link';

type HeaderProps = {
  title: string | boolean;
  linkHref?: string;
  linkTitle?: string;
};

const Header: FC<HeaderProps> = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-xl md:text-2xl font-medium">{title}</h1>
      {
        (linkHref && linkTitle) ? (
          <Link href={linkHref} className="md:text-lg text-sm font-medium underline hover:text-red-700">
            {linkTitle}
          </Link>
        ) : null
      }
    </div>
  );
};

export default Header;
