import { getTranslations } from 'next-intl/server';
import { useLocale, NextIntlClientProvider } from 'next-intl';
import _ from 'lodash';
import ClientComp from '../(client-components)/ClienComp';
import ServerComp from '../(server-components)/ServerComp';
import { Fragment } from 'react';


export const metadata = {
  title: "Default",
  description: "Default Desc",
};

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t('Index.metaTitle')
  };
}

export default async function Home() {
  const locale = useLocale();
  const messages = (await import(`../../../messages/${locale}.json`))
    .default;
  return (
    <Fragment>
      <NextIntlClientProvider
        locale={locale}
        messages={
          _.pick(messages, 'ClientComp')
        }
      >
        <ClientComp />
      </NextIntlClientProvider>

      <ServerComp />
    </Fragment>
  )
}
