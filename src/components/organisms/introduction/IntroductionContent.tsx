import SectionTitle from "@/components/atoms/typography/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

const TextContent = ({ text }: { text: string }) => (
  <h1 className="text-center text-pretty text-xs text-opacity-60 dark:text-opacity-90 sm:text-sm md:text-base lg:text-lg xl:text-2xl">
    {text}
  </h1>
);

const ProfileCard = ({
  imageSrc,
  altText,
  name,
  role,
}: {
  imageSrc: string;
  altText: string;
  name: string;
  role: string;
}) => (
  <div className="flex flex-col items-center justify-center">
    <Image
      src={imageSrc}
      alt={altText}
      width={2252}
      height={1874}
      className="md:max-w-[400px] max-w-[300px]"
    />
    <Card>
      <CardContent>
        <div className="space-y-4 text-center">
          <h1 className="text-[#1A2223] dark:text-[#DDF7F9] max-[360px]:text-[11px] text-sm lg:text-xl xl:text-3xl font-bold">
            {name}
          </h1>
          <TextContent text={role} />
        </div>
      </CardContent>
    </Card>
  </div>
);

export default function IntroductionContent() {
  const kataSambutanText =
    "Kegiatan lustrum ini tidak hanya menjadi ajang untuk merayakan pencapaian yang telah diraih, tetapi juga sebagai momentum untuk merefleksikan langkah-langkah yang telah kita ambil serta merencanakan masa depan yang lebih gemilang. Kami menyadari bahwa acara ini tidak akan mungkin terlaksana tanpa dukungan dan kerjasama dari semua pihak. Oleh karena itu, kami ingin mengucapkan terima kasih yang sebesar-besarnya kepada semua pihak yang telah memberikan dukungan dan kontribusi, baik secara langsung maupun tidak langsung, dalam menyukseskan acara ini. Melalui kegiatan ini, kami berharap dapat mempererat tali persaudaraan dan kerjasama di antara kita semua serta memberikan inspirasi untuk mencapai tujuan-tujuan baru. Semoga proposal ini dapat memberikan gambaran yang jelas mengenai rencana dan harapan kami, serta mendapatkan dukungan yang penuh dari semua pihak terkait.";
  const closingText =
    "Alumni merupakan sumber pelajaran bagi kita semua dimana kita bisa mendapatkan berbagai ilmu bermanfaat untuk kehidupan di kampus dan kehidupan setelah lulus dari kampus. Dengan ini kami mempersembahkan Lustrum sebagai salah satu sarana untuk menpererat tali persaudaraan dan sebagai sarana transfer knowledge dari alumni fst kepada staf-staf forum studi teknik. Dengan mengangkat tema Remember our journey, romanticize the memory, and harmonize the glory harapannya staf-staf forum studi teknik dapat belajar dari alumni forum studi teknik. Dengan ini kami mengucapkan terima kasih kepada semua pihak-pihak. Sampai bertemu di Lustrum III 2024.";

  return (
    <section className="w-full">
      <SectionTitle title="Kata Sambutan" />
      <div className="md:space-y-12 space-y-8">
        <div className="md:flex gap-8 md:space-y-0 space-y-4">
          <Card>
            <CardContent>
              <ScrollArea className="md:h-full h-48">
                <TextContent text={kataSambutanText} />
              </ScrollArea>
            </CardContent>
          </Card>
          <ProfileCard
            imageSrc="/images/hokage-bunda.png"
            altText="Hokage dan Bunda"
            name="M. Ferdiansyah & Yusril Anwar S."
            role="Hokage & Bunda FST 2024"
          />
        </div>

        <div className="md:flex gap-8 md:space-y-0 space-y-4">
          <ProfileCard
            imageSrc="/images/gibran.png"
            altText="Ketua Pelaksana"
            name="Rifat Gibran Widiyanto"
            role="Ketua Pelaksana Lustrum 2024"
          />
          <Card>
            <CardContent>
              <ScrollArea className="md:h-full h-48">
                <TextContent text={closingText} />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
