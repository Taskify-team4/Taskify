import type { AppProps } from 'next/app';
import '@styles/globals.css';
import { MyDataProvider } from '@contexts/myDataContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyDataProvider>
        <Component {...pageProps} />
      </MyDataProvider>
    </>
  );
}
