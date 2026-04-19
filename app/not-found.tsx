export const runtime = "edge";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 text-black">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em]">404</p>
        <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
      </div>
    </div>
  );
}
