export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex flex-1 flex-col bg-background">
      <div className="flex h-svh items-center">
        <div className="relative mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-12">
          {children}
        </div>
      </div>
    </main>
  );
}
