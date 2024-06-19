import { ArrowRight } from "lucide-react";
import NewStyle from "./NewStyle";

function SimilarProducts({title}) {
  return <>
   <div className="px-5 mt-5 border-t-8 border-b-8">
    <div className="flex gap-2 ">
    <h1 className=" text-lg font-bold dark:text-white"> {title}</h1>
    <span className="flex items-center"><ArrowRight className="dark:text-white"/></span>
    </div>
    <NewStyle/>
  </div>
  </>;
}

export default SimilarProducts;
