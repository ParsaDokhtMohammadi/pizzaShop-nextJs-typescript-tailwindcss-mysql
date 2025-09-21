

export default async function Home() {


  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white dark:text-red-500 drop-shadow-lg">
        {"به پیتزا پلنت خوش آمدید!"}
      </h1>
      <p className="text-lg text-gray-200 mt-4">{"بهترین پیتزاهای شهر، تازه و روزانه پخته شده."}</p>
    </main>
  );
}

export const dynamic = 'force-static';
