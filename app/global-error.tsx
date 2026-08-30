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
          backgroundColor: "#F5F7FB",
          color: "#1E2F52",
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "1.5rem", fontSize: "4rem", color: "#17A398" }}>!</div>
            <h1 style={{ marginBottom: "1rem", fontSize: "1.875rem", fontWeight: "bold" }}>
              Something went wrong
            </h1>
            <p style={{ marginBottom: "2rem", color: "#5E6B84" }}>
              We apologize for the inconvenience. Please try again.
            </p>
            <button
              onClick={() => reset()}
              style={{
                borderRadius: "0.5rem",
                backgroundColor: "#17A398",
                padding: "0.75rem 1.5rem",
                fontWeight: "bold",
                color: "#16233F",
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
