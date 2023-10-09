'use client'

import React from "react";
import MainLayout from "../components/template/MainLayout";
import "../styles/common.scss";
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>
          <MainLayout >
              {children}
          </MainLayout>
      </body>
    </html>
  )
}
