import React from "react";

function BreadCrumb({category,item}) {
  return <>
  <nav aria-label="breadcrumb" className="hidden md:block w-full  bg-blend-darken text-white	  ">
	<ol className="flex h-5	 space-x-2 text-gray-600 dark:text-white/50 ">
		<li className="flex items-center">
			<a rel="noopener noreferrer" href="#" title="Back to homepage" className="flex items-center hover:scale-75">Home</a>
		</li>
		<li className="flex items-center space-x-1 ">
			<span className="text-gray-600 dark:text-white/50">/</span>
			<a rel="noopener noreferrer" href="#" className="flex items-center px-1  capitalize hover:scale-75 ">Product</a>
		</li>
		<li className="flex items-center space-x-1">
			<span className="text-gray-600 dark:text-white/50">/</span>
			<a rel="noopener noreferrer" href="#" className="flex items-center  px-1 capitalize hover:scale-75 ">{category}</a>
		</li>
		<li className="flex items-center space-x-1">
			<span className="text-gray-600 dark:text-white/50">/</span>
			<a rel="noopener noreferrer" href="#" className="flex items-center   px-1 capitalize    hover:scale-75">{item}</a>
		</li>
	</ol>
</nav>
  </>;
}

export default BreadCrumb;
