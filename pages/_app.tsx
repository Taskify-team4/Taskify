import type { AppProps } from 'next/app';
import '@styles/globals.css';
import { MyDataProvider } from '@contexts/myDataContext';
import { DashboardListProvider } from '@contexts/DashboardListContext';
import { DashProvider } from '@contexts/dashContext';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { dashboardId }: { dashboardId: number } = router.query as unknown as { dashboardId: number };

  return (
    <>
      <MyDataProvider>
        <DashboardListProvider>
          <DashProvider dashboardId={dashboardId}>
            <Component {...pageProps} />
          </DashProvider>
        </DashboardListProvider>
      </MyDataProvider>
    </>
  );
}
