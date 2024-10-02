import SectionTitle from "@/components/atoms/typography/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function DonationContent() {
  return (
    <>
      <section className="w-full">
        <SectionTitle title="We Open For" subtitle="Donation" />
        <Card>
          <CardContent>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
              <div className="flex w-full justify-center">
                <Image
                  src="/images/bank-bri.png"
                  alt="Bank BRI"
                  width={400}
                  height={400}
                  className="md:w-[400px] w-[150px]"
                />
              </div>
              <div className="space-y-4 md:text-left text-center">
                <h1 className="text-[#1A2223] dark:text-[#DDF7F9] max-[360px]:text-[11px] text-sm lg:text-xl xl:text-3xl font-bold">
                  BRI 605601019616536
                </h1>
                <h1 className="text-[#1A2223] dark:text-[#DDF7F9] max-[360px]:text-[11px] text-sm lg:text-xl xl:text-3xl font-bold">
                  (a.n ADITA MAIZALFANIA)
                </h1>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
