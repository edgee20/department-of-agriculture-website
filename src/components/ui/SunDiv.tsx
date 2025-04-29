import Image from "next/image";

interface SunDivProps {
  title: string;
  textSize?: string;
}

export default function SunDiv({ title, textSize }: SunDivProps) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center">
      <div className="relative flex justify-center items-center py-2">
        <div className="h-[2px] w-[150px] bg-edpyellow"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            alt="philippine sun"
            src="/images/philippine-sun.png"
            height={20}
            width={20}
            className="drop-shadow-lg"
          />
        </div>
      </div>
      <h1
        className={`text-white ${
          textSize ? textSize : "text-[30px]"
        } font-bold text-center`}
      >
        {title}
      </h1>
      <div className="flex justify-center py-2">
        <div className="h-[2px] w-[300px] bg-edpyellow"></div>
      </div>
    </div>
  );
}
