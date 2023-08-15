import ScheduleInfo from "./ScheduleInfo.tsx";
import type { Props as ScheduleProps } from "./ScheduleInfo.tsx";

export interface Props {
  schedules?: ScheduleProps[];
}

export default function Schedule({ schedules }: Props) {
  return (
    <section class="flex items-center justify-center w-full h-full bg-midnightblue py-12">
      <div class="w-full max-w-[80%] px-2 md:px-0">
        <div class="flex flex-col bg-darkslategray/70 w-full h-full py-4 px-4 md:px-12 rounded-xl gap-8">
          <h1 class="text-xl text-white text-center">Agenda</h1>

          <div class="flex items-start justify-start gap-x-3 w-full min-h-[410px] overflow-x-scroll pb-3 scrollbar">
            {schedules?.map((schedule) => <ScheduleInfo {...schedule} />)}
          </div>

          <div class="flex flex-col pt-8 gap-1">
            <p class="text-pink text-sm">
              *Agenda subject to changes without prior notice
            </p>
            <p class="text-darkgray text-sm">
              * The VTEX party is organized by the US team invited Experience
              customers. So have other sponsors at that time.
            </p>
            <p class="text-darkgray text-sm">**Optional</p>
          </div>
        </div>
      </div>
    </section>
  );
}
