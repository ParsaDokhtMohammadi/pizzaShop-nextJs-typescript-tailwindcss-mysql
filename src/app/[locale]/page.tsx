import { getTranslations } from 'next-intl/server';

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({locale, namespace:'Home'});

  return (
    <main className="bg-[url(/images/other/background.webp)] w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white drop-shadow-lg">
        {t('welcome')}
      </h1>
      <p className="text-lg text-gray-200 mt-4">{t('subtitle')}</p>
    </main>
  );
}
