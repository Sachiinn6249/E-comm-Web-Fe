

function MobileInput() {
  return <>
  <form className="mx-auto max-w-[350px] md:max-w-xl  py-1 px-5 rounded-full bg-gray-50 border flex focus-within:border-gray-300 items-center shadow-md shadow-gray-700 ">
    <input type="text" placeholder="Search anything" className="bg-transparent w-full focus:outline-none pr-10 font-semibold border-0 focus:ring-0 px-0 py-0" name="topic"/>
    <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium track-wide border-transparent py-1.5 h-[38px] -mr-3" >
        Search
    </button>
</form>
  </>;
}

export default MobileInput;
