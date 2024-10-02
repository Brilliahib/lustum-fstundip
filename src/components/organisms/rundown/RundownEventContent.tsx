import SectionTitle from "@/components/atoms/typography/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock2 } from "lucide-react";

const rundownData = [
  { time: "08.00", title: "Persiapan Panitia" },
  { time: "08.30", title: "Registrasi Pengurus dan Alumni FST" },
  { time: "09.00", title: "Pembukaan Oleh MC" },
  {
    time: "09.05",
    title: "Menyanyikan Lagu Indonesia Raya, Mars Teknik, dan Mars FST",
  },
  {
    time: "09.15",
    title: "Sambutan Oleh Ketua Pelaksana, Hokage FST, dan Alumni",
  },
  { time: "09.25", title: "Pemaparan Tentang Lustrum III" },
  { time: "09.35", title: "Focus Group Discussion atau Sharing dengan Alumni" },
  { time: "10.35", title: "Sesi Games" },
  { time: "11.05", title: "Doorprize dan Ice Breaking" },
  { time: "11.30", title: "Istirahat" },
  { time: "12.00", title: "Potong Tumpeng dan Makan Bersama" },
  { time: "13.00", title: "Hiburan" },
  { time: "13.30", title: "Menonton Vidio Kilas Balik FST" },
  { time: "13.40", title: "Foto Bersama dan Penutupan" },
];

export default function RundownEventContent() {
  return (
    <section>
      <SectionTitle title="Rundown" />
      <ScrollArea className="md:h-[600px] h-[450px] w-full rounded-xl">
        <Card>
          <CardContent>
            <div className="flex flex-col w-full">
              {rundownData.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center lg:gap-7 w-full h-full"
                >
                  <div className="flex gap-1 xl:gap-2 p-2 lg:px-5 lg:py-3 rounded-xl items-center ">
                    <span className="text-sm lg:text-xl xl:text-3xl font-semibold w-[35px] md:w-[60px] xl:w-[95px]">
                      {item.time}
                    </span>
                  </div>
                  <div className="h-full flex flex-col items-center">
                    <div className="h-full w-[4px] bg-secondary">
                      <div className="h-full w-full"></div>
                    </div>
                    <div className="flex items-center justify-center min-h-[2rem] xl:min-h-[2.5rem] aspect-square my-2 bg-primary rounded-full text-white">
                      <Clock2 />
                    </div>
                  </div>
                  <div className="my-6 flex items-center">
                    <div className="w-full px-3 py-2 flex max-[380px]:flex-col flex-row items-center gap-5 xl:gap-20 rounded-[15px] h-full ">
                      <h1 className="text-[#1A2223] dark:text-[#DDF7F9] max-[360px]:text-[11px] text-sm lg:text-xl xl:text-3xl font-bold">
                        {item.title}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </ScrollArea>
    </section>
  );
}
