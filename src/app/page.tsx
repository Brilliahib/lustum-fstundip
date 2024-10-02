import CountdownTimer from "@/components/molecules/countdown/Countdown";
import AboutContent from "@/components/organisms/about/AboutContent";
import ContactContent from "@/components/organisms/contact/ContactContent";
import DonationContent from "@/components/organisms/donation/DonationContent";
import IntroductionContent from "@/components/organisms/introduction/IntroductionContent";
import RundownEventContent from "@/components/organisms/rundown/RundownEventContent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center bg-primary">
        <div className="md:space-y-12 space-y-4">
          <Image
            src="/images/logo-lustrum.png"
            alt="Lustrum Forum Studi Teknik"
            width={583}
            height={428}
          />
          <CountdownTimer />
        </div>
      </div>
      <div className="md:space-y-40 space-y-20">
        <AboutContent />
        <IntroductionContent />
        <RundownEventContent />
        <DonationContent />
        <ContactContent />
      </div>
    </>
  );
}
