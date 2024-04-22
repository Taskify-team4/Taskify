import type { AppProps } from 'next/app';
import '@styles/globals.css';
import { MyDataProvider } from '@contexts/myDataContext';
import { DashboardListProvider } from '@contexts/DashboardListContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyDataProvider>
        <DashboardListProvider>
          <Component {...pageProps} />
        </DashboardListProvider>
      </MyDataProvider>
    </>
  );
}
