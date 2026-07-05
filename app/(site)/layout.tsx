import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/decor/CustomCursor";
import PageTransition from "@/components/decor/PageTransition";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CustomCursor />
      <PageTransition />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
