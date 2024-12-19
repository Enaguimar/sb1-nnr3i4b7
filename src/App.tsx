import AppProvider from '@/lib/providers/AppProvider';
import AppRoutes from '@/routes';
import Layout from '@/components/layout/Layout';
import CookieConsent from '@/components/CookieConsent';

export default function App() {
  return (
    <AppProvider>
      <Layout>
        <AppRoutes />
        <CookieConsent />
      </Layout>
    </AppProvider>
  );
}