import Accordion from "@/components/ui/Accordion";
import SunDiv from "@/components/ui/SunDiv";
import { BG_CONFIG } from "@/lib/config";

export default function ServicePage() {
  return (
    <div>
      <div className="relative bg-edpgreen overflow-hidden pt-8 pb-8 lg:p-8 mb-6">
        <div className={`${BG_CONFIG}`}></div>
        <div className="z-10 relative mt-[30px] p-[90px] italic">
          <SunDiv title={"Services"} />
          <div className="flex"></div>
        </div>
      </div>
      <hr className="border-t-2 border-edpyellow mx-8" />
      <div className="px-3 pt-8 pb-24">
        <Accordion />
      </div>
    </div>
  );
}
