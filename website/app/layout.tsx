import type { Metadata, Viewport } from "next";
import "./globals.css";
import { assetPath } from "./assetPath.mjs";

const title = "悬岛 HoverIsle — 把 Mac 屏幕顶部变成随手工作台";
const description = "常驻 macOS 刘海的本地工作台：首页、待办、笔记、链接、录制、密钥与可选剪贴板，数据留在当前 Mac。";

export const metadata: Metadata = {
  metadataBase: new URL("https://nahzzz77.github.io/HoverIsle/"),
  title,
  description,
  applicationName: "悬岛 HoverIsle",
  keywords: ["悬岛", "HoverIsle", "macOS 刘海", "Mac 待办", "本地工作台", "Apple Silicon"],
  icons: { icon: [{ url: assetPath("/hoverisle-icon.png"), type: "image/png" }], shortcut: assetPath("/hoverisle-icon.png"), apple: assetPath("/hoverisle-icon.png") },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "悬岛 HoverIsle",
    title,
    description,
    images: [{ url: assetPath("/og.png"), width: 1200, height: 630, alt: "悬岛 HoverIsle 官网分享封面" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [assetPath("/og.png")] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "dark", themeColor: "#000000" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
