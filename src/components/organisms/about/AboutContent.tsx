import SectionTitle from "@/components/atoms/typography/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutContent() {
  return (
    <>
      <section className="w-full">
        <SectionTitle title="About" subtitle="Lustrum" />
        <div className="w-full">
          <Card>
            <CardContent>
              <div className="md:space-y-8 space-y-6 relative z-10">
                <p className="text-center text-pretty text-xs text-opacity-60 dark:text-opacity-90 sm:text-sm md:text-base lg:text-lg xl:text-2xl">
                  Lustrum merupakan program kerja yang diselenggarakan oleh
                  bidang Public Relations Forum Studi Teknik 2024. Pada tahun
                  ini, Forum Studi Teknik akan merayakan{" "}
                  <span className="bg-secondary text-white px-2">
                    dies natalisnya-nya yang ke 20 tahun
                  </span>
                  sejak pertama kali didirikan oleh para mahasiswa Fakultas
                  Teknik Undip. Kegiatan perayaan dies natalis FST Undip
                  diperingati setiap lima tahun sekali, itu berarti pada tahun
                  ini akan peringati sebagai{" "}
                  <span className="bg-secondary text-white px-2">
                    Lustrum ke-III FST Undip.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
