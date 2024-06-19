

function AutoScroll() {
  const count = 9;
  const divs = Array.from({ length: count }, (_, i) => i);
  return (
    <>
      <div className=" flex overflow-hidden  bg-black dark:bg-emerald-600">
        <div className="flex items-center space-x-16 animate-loop-scroll group:hover:paused  border-black dark:border-white border-t-2 border-b-2 border-dashed  ">
          {divs.map((index) => (
            <span
              loading="lazy"
              key={index}
              className="max-w-none h-[40px] mr-5 text-center text-emerald-400 dark:text-black text-3xl font-bold"
              alt="Image3"
            >
              #grab
            </span>
          ))}
        </div>
        <div
          className="flex items-center space-x-16  animate-loop-scroll group-hover:paused  border-black dark:border-white border-t-2 border-b-2 border-dashed"
          aria-hidden="true"
        >
          {divs.map((index) => (
            <span
              loading="lazy"
              key={index}
              className="max-w-none h-[40px] ml-5 text-center text-emerald-400 dark:text-black text-3xl font-bold"
              alt="Image3"
            >
              #grab
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default AutoScroll;
