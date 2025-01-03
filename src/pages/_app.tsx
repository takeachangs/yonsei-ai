import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Layout from '@/components/layout/Layout';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <main className={inter.className}>
      {/* Pass fullWidth={true} if we're at '/', else normal layout */}
      <Layout fullWidth={isHome}>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}