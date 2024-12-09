import allblogs from "@/data/blogs";
import Link from "next/link";

import React from 'react'

function blog() {
  return (
    <div>
<h1></h1>
<div className="grid grid-cols-2 gap-4">
    {allblogs.map((allblogs) => (
        <div key={allblogs.id} className="border p-4 rounded-md shadow-md">
            <img src={allblogs.image} alt={allblogs.name} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-bold">{allblogs.name}</h2>
           
           
            <Link href={`/products/${allblogs.id}`}>
            <Link href={`/products/${allblogs.description}`}>
             
             </Link>
                            <button  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                                View 
                            </button>
                        </Link>

        </div>
    ))}
</div>

</div>
    
  )
}

export default blog
