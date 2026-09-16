import type { NextConfig } from "next"

// Only applied in GitHub Actions (where GITHUB_ACTIONS is auto-set) so the
// GitHub Pages subpath doesn't get in the way of local dev/build at "/".
const basePath = process.env.GITHUB_ACTIONS ? "/guarda-landing-page" : ""

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
