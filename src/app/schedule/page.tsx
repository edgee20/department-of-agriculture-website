import SchedulePage from "@/components/pages/SchedulePage";
import SunDiv from "@/components/ui/SunDiv";
import { BG_CONFIG } from "@/lib/config";

export default function Schedule() {
  return (
    <div>
      <div className="relative bg-edpgreen overflow-hidden pt-8 pb-8 lg:p-8">
        <div className={`${BG_CONFIG}`}></div>
        <div className="z-10 relative mt-[30px] p-[120px] italic">
          <SunDiv title={"Schedule an Appointment"} />
          <div className="flex"></div>
        </div>
      </div>
      <SchedulePage />
    </div>
  );
}
