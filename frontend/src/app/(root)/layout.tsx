import Header from "@/components/website/header/header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-secondary w-full h-screen">
      <Header />
      {children}
    </main>
  );
}
