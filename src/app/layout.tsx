import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2024 메이플 닉네임 리스트",
  description: "2024 메이플스토리 뉴네임 옥션 경매 이름 리스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
