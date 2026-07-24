export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex flex-1 flex-col bg-background">
      <div className="flex h-svh items-center">
        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col gap-8 sm:gap-10">{children}</div>
        </div>
      </div>
    </main>
  );
}
