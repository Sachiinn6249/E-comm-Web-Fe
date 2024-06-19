

function SimilarCard() {
  return <>
   <div className="relative rounded-lg"><a href="#">
                    <img className="w-full rounded-3xl px-5"
                        src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=350"
                        alt="Sunset in the mountains"/>
                    
                </a>
                <a href="#!">
                    <div
                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Shop Now
                    </div>
                </a>
            </div>
  </>;
}

export default SimilarCard;
