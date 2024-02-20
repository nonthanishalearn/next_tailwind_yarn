'use client';
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/main/MainLayout.jsx";
import { Provider } from "react-redux";
import store  from "@/redux/store";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <MainLayout>{children}</MainLayout>
        </Provider>
      </body>
    </html>
  );
}
