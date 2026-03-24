"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          fontFamily: "system-ui, sans-serif",
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "1.5rem", fontSize: "4rem", color: "#f4af25" }}>!</div>
            <h1 style={{ marginBottom: "1rem", fontSize: "1.875rem", fontWeight: "bold" }}>
              Something went wrong
            </h1>
            <p style={{ marginBottom: "2rem", color: "#666" }}>
              We apologize for the inconvenience. Please try again.
            </p>
            <button
              onClick={() => reset()}
              style={{
                borderRadius: "0.5rem",
                backgroundColor: "#f4af25",
                padding: "0.75rem 1.5rem",
                fontWeight: "bold",
                color: "#1c170d",
                border: "none",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
