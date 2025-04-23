import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-[680px] overflow-hidden">
        {/* Background Image */}
        <div className="">
          <Image
            src="/images/hero-section.png"
            alt="Department of Agriculture Building"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/60"></div>

        {/* heading title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-[40px] md:text-[80px] font-bold italic text-center max-w-[1230px] px-4">
            Masaganang Agrikultura, Maunlad na Ekonomiya!
          </h1>
        </div>
      </div>
    </main>
  );
}
