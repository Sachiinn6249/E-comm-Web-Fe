
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { searchState } from "@/Store/searchAtom";


function MobileInput() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const [Search, setSearch] = useRecoilState(searchState);
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (keyword) {
      setSearch(keyword);
      navigate(`user/product/${keyword}`);
      setKeyword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-[350px] md:max-w-xl py-1 px-5 rounded-full bg-gray-50 border flex focus-within:border-gray-300 items-center shadow-md shadow-gray-700">
      <input
        type="text"
        placeholder="Search anything"
        className="bg-transparent w-full focus:outline-none pr-10 font-semibold border-0 focus:ring-0 px-0 py-0"
        name="topic"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium track-wide border-transparent py-1.5 h-[38px] -mr-3">
        Search
      </button>
    </form>
  );
}

export default MobileInput;
