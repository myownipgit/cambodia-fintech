"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-6 text-6xl text-navy">!</div>
        <h1 className="mb-4 text-3xl font-bold">Something went wrong</h1>
        <p className="mb-8 text-navy/70">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="rounded-lg bg-teal px-6 py-3 font-bold text-navy-deep transition-transform hover:scale-105"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
