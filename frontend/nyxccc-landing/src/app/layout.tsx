import "@nyxcinc/design-system/tokens.css";
import "@nyxcinc/design-system/fonts.css";
import "@nyxcinc/design-system/primitives.css";
import "./globals.css";


export const metadata = {
  title: "nyxc Community Capital",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
 
export const dynamic = 'auto'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'