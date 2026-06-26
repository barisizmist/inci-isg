'use client';

import { usePathname } from 'next/navigation';

export default function MainLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  return <main className={isHomePage ? 'pt-0' : 'pt-24'}>{children}</main>;
}
