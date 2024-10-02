import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center bg-[#A51F68]">
        <Image
          src="/images/logo-lustrum.png"
          alt="Lustrum Forum Studi Teknik"
          width={583}
          height={428}
        />
      </div>
    </>
  );
}
