import { getTranslations } from 'next-intl/server';

interface HomePageProps {
  params: { locale: string };
}

export async function generateStaticParams() {
  const locales = ['en', 'fa'];
  return locales.map((locale) => ({ locale }));
}

export default async function Home({ params: { locale } }: HomePageProps) {
  const t = await getTranslations({ locale, namespace: 'Home' });

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white dark:text-red-500 drop-shadow-lg">
        {t('welcome')}
      </h1>
      <p className="text-lg text-gray-200 mt-4">{t('subtitle')}</p>
    </main>
  );
}

export const dynamic = 'force-static';
