interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <>
      <div className="text-center md:py-8 py-6">
        <h1 className="font-bold md:text-6xl text-3xl text-white">
          {title}{" "}
          {subtitle && (
            <span className="bg-gradient-to-r from-[#F2CD5B] to-white bg-clip-text text-transparent">
              {subtitle}
            </span>
          )}
        </h1>
      </div>
    </>
  );
}
