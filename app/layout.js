import { ContextProvider } from "@/components/clients";
import "./globals.css";
import Header from "./header";

export const metadata = {
  title: "To-Do App",
  description: "app for ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <Header />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
