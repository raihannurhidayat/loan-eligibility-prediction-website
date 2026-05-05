import type { Metadata } from "next";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loan Eligibility Predictor",
  description:
    "Check loan eligibility instantly using our AI-powered credit risk model.",
  keywords: ["loan", "eligibility", "credit", "prediction", "random forest"],
  openGraph: {
    title: "Loan Eligibility Predictor",
    description: "AI-powered credit risk assessment tool.",
    type: "website",
  },
};

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={plus_jakarta_sans.className}
    >
      <body>
        <LanguageProvider>
          <TooltipProvider delayDuration={300}>
            {children}
            <Toaster
              position="top-right"
              richColors
              closeButton
              toastOptions={{
                style: {
                  fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
                },
              }}
            />
          </TooltipProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
