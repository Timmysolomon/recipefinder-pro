import './globals.css';

export const metadata = {
  title: 'RecipeFinder Pro',
  description: 'Discover delicious recipes instantly!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
