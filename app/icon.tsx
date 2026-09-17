import { ImageResponse } from "next/og"

export const dynamic = "force-static"
export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#18181B",
          borderRadius: 7,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 64 64" fill="none">
          <path d="M20 6 L44 6 Q50 6 50 12 L50 56 L32 42 L14 56 L14 12 Q14 6 20 6 Z" fill="#FAFAFA" />
          <path d="M23 26 L29 33 L43 17" stroke="#18181B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    { ...size },
  )
}
