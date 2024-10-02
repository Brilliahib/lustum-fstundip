import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Lustrum FST 2024",
  description:
    "Lustrum merupakan program kerja yang diselenggarakan oleh bidang Public Relations Forum Studi Teknik 2024. Pada tahun ini, Forum Studi Teknik akan merayakan dies natalisnya-nya yang ke 20 tahunsejak pertama kali didirikan oleh para mahasiswa Fakultas Teknik Undip. Kegiatan perayaan dies natalis FST Undip diperingati setiap lima tahun sekali, itu berarti pada tahun ini akan peringati sebagai Lustrum ke-III FST Undip.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${lexend.variable} antialiased`}>
      <body className="bg-primary">
        <main className="font-lexend mx-auto px-8 max-w-[1400px]">
          {children}
        </main>
      </body>
    </html>
  );
}
