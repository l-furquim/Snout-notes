"use client"

import NavBar from "../components/nav-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="flex justify-center items-center">
          {children}
          <NavBar/>
        </div>
  );
}