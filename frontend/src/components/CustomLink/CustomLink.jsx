'use client';

import Link from 'next/link';

const CustomLink = ({ href, text }) => {
  return (
    <Link href={href}>
      {text}
    </Link>
  );
};

export default CustomLink;