import SectionTitle from "@/components/atoms/typography/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ContactContent() {
  return (
    <>
      <section>
        <SectionTitle title="Contact Person" />
        <div className="w-full">
          <Card>
            <CardContent>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-10 flex">
                <div className="flex flex-col justify-center items-center space-y-4">
                  <Image
                    src="/images/gibran.png"
                    alt="Contact Person"
                    width={1600}
                    height={1600}
                    className="md:max-w-[500px]"
                  />
                  <div className="md:space-y-4 space-y-2 text-center">
                    <h1 className="text-[#1A2223] dark:text-[#DDF7F9] max-[360px]:text-[11px] text-sm lg:text-xl xl:text-3xl font-bold">
                      Rifat Gibran Widiyanto
                    </h1>
                    <p className="text-[#1A2223] dark:text-[#DDF7F9] max-[360px]:text-[11px] text-sm lg:text-xl xl:text-3xl font-bold">
                      (+62) 81394582325
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <Image
                    src="/images/naila.png"
                    alt="Contact Person"
                    width={1600}
                    height={1600}
                    className="md:max-w-[500px]"
                  />
                  <div className="md:space-y-4 space-y-2 text-center">
                    <h1 className="text-[#1A2223] dark:text-[#DDF7F9] max-[360px]:text-[11px] text-sm lg:text-xl xl:text-3xl font-bold">
                      Naila Mutiara Nurramadani
                    </h1>
                    <p className="text-[#1A2223] dark:text-[#DDF7F9] max-[360px]:text-[11px] text-sm lg:text-xl xl:text-3xl font-bold">
                      (+62) 81315168903
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
