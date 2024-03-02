'use client'

import { ReactNode, Suspense } from "react";
import MainLayout from "../components/template/MainLayout";
import "../styles/common.scss";
import "../styles/globals.scss";
import GoogleAnalytics from "./GA";

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
    <Suspense fallback={null}>
      <GoogleAnalytics />
    </Suspense>
      <body style={{ margin: 0 }}>
          <MainLayout >
              {children}
          </MainLayout>
      </body>
    </html>
  )
}
