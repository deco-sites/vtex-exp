import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  image: string;
  title: string;
  date: string;
  description: string;
}

export default function Card({ image, title, date, description }: Props) {
  return (
    <div class="card w-full md:w-[495px] lg:w-[390px] h-full bg-midnightblue shadow-xl">
      <figure>
        <Image
          src={image}
          alt="Image"
          width={495}
          height={128}
          class="w-full h-[128px] object-cover object-center"
          loading="lazy"
        />
      </figure>

      <div class="card-body items-center text-center">
        <h1 class="card-title text-white text-[40px]">{title}</h1>

        <h2 class="text-darkgray text-xl">{date}</h2>

        <p class="text-darkgray pt-3">{description}</p>

        <div class="card-actions bottom-0 translate-y-12">
          <button class="flex items-center justify-center rounded-2xl lg:rounded-xl bg-pink py-3 min-w-[142px] border text-black font-semibold border-pink hover:text-pink hover:bg-midnightblue transition-all duration-150">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
