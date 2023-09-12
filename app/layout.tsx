import '@/styles/app.css';
import 'tw-elements-react/dist/css/tw-elements-react.min.css';

export const metadata = {
  title: 'Sentium Todo app',
  description: 'Todo app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
