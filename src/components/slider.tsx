import { useState } from "react";

const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
  ];
export default function Slider() {
    const [currentimg,setCurrentimg]=useState(0);

    const NextImg = (index:number) => {
        if(index+1 < images.length) 
        setCurrentimg(index+1)
        else  setCurrentimg(0)
    }

  return (
    <div className="w-full overflow-hidden ">
        {
             <div
             className="flex transition-transform duration-500"
             /* style={{ transform: `translateX(-${currentimg * 100}%)` }} */
           >
            <img 
             src={images[currentimg]}
             className="w-full  object-cover flex-shrink-0"
            
            />
            </div>
           /* images.map((img,index)=>(
                <img src={img[currentimg]}/>
            )
            
            )*/
        }
        <button 
        onClick={()=>NextImg(currentimg)}
        className="bg-amber-500 mt-4 text-white "
        >Next</button>
    </div>
  )
}
