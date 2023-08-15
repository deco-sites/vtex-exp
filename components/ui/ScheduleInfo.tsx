export interface CardProps {
  info: string;
}

export interface Props {
  date: string;
  day: string;
  cards?: CardProps[];
}

function ScheduleCard({ info }: CardProps) {
  return (
    <div class="rounded-xl flex items-center justify-center text-center text-sm border border-lightsteelblue text-white w-[124px] min-h-[118px] py-1 px-2">
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
