import { CircleArrowUp } from "lucide-react";
export default function TopButton() {
  return <>
  <a href="#" className="absolute  right-10 translate-y-[-100px]">
  <section className="relative flex justify-center items-center">
  <div
    className="group flex justify-center transition-all rounded-full  p-1"
  >
    <CircleArrowUp/>
    <span
      className="absolute opacity-0 group-hover:opacity-100 dark:text-white group-hover:-translate-y-7 duration-700 text-lg"
      >Top</span
    >
  </div>
</section>
</a>
  </>;
}

