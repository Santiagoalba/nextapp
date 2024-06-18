import { Navbar } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar/>
      <main className="flex flex-col text-center w-full mt-20">
        <span>Hola mundo</span>
        {children}
      </main>
    </>
  );
}