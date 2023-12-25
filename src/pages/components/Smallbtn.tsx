import Link from 'next/link';
import React from 'react';

const Smallbtn = ({ title,func, colorclass,path }) => {

  return (
 <>
 {!func?
 <>
  <Link href={path}  className={`block h-10 px-2 py-2 h-10 text-white rounded ${colorclass}`}>{title}</Link>
 </>
 :
  <button className={`px-2 py-2 h-10 text-white rounded ${colorclass}`} onClick={func}>
{title}
   </button>
   }
   </> 
  );
};

export default Smallbtn;