export interface CardProps {
  info: string;
  height?: number;
  hasCrimsonBorder?: boolean;
}

export interface Props {
  date: string;
  day: string;
  cards?: CardProps[];
}

function ScheduleCard({ info, hasCrimsonBorder, height = 118 }: CardProps) {
  return (
    <div
      style={{ minHeight: `${height}px` }}
      class={`${
        hasCrimsonBorder ? "border-crimson" : "border-lightsteelblue"
      } rounded-xl flex items-center justify-center text-center text-sm border text-white w-[124px] py-1 px-2`}
    >
      <span>{info}</span>
    </div>
  );
}

export default function ScheduleInfo({ date, day, cards }: Props) {
  return (
    <div class="flex flex-col items-center justify-center gap-2">
      <div class="flex flex-col text-center">
        <span class="text-pink">{date}</span>
        <span class="text-white text-sm">{day}</span>
      </div>
      <div class="flex flex-col gap-2">
        {cards?.map((card) => <ScheduleCard {...card} />)}
      </div>
    </div>
  );
}
