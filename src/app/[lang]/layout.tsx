import './globals.css'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Providers } from '../redux/provider';

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: string }
}) {

  const locale = useLocale();
  if (params.lang !== locale) {
    notFound();
  }
  return (
    <html lang={params.lang}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
