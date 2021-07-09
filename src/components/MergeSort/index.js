import React, { useState,useEffect } from 'react'
import "./index.css"



// var array=[9,3,7,-5,6,4,8,2];

export default function Graph() {
    var right=0
    var i,j,k,len_a,len_b,a,b,elem;
    const [compare,setCompare]=useState([-1,-1])
    const [success,setSuccess]=useState(false)
    // const [inputArray,setinputArray]=useState([]);
    var array=new Array(15);
// var i;
    for(i=0;i<array.length;i++)
    {
      array[i]=Math.floor(Math.random(0,1) * 100)
    }

    let [c,setC]=useState(array); 
    let [show,setShow]=useState(false);

    
    // setC(array);

  // useEffect(() => {
  //   console.log("inside useEffect")
  // }, [show])

    // var c=new Array(array.length);
    // c=array;
   
    // console.log(mergeSort(1,array.length,array));
  

   async function mergeSort(l,h,array)  //indexing from 1
   
    {
  
      if(l<h)
      {
        var mid=Math.floor((l+h)/2);
        //
         await mergeSort(l,mid,array);
         await mergeSort(mid+1,h,array);
        // console.log(`merging ${l},${h}`)
        
        await sleep(500)
        c=await merge(l,mid,h,array,c);

        return c;
      }
    }
  
    // function sleep(milliseconds) {
    //   const date = Date.now();
    //   let currentDate = null;
    //   do {
    //     currentDate = Date.now();
    //   } while (currentDate - date < milliseconds);
    // }
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

  async function merge(l,mid,h,array,c)
  {
    
    a=c.slice(l-1,mid);
    b=c.slice(mid,h);
    len_a=a.length;
    len_b=b.length;
    i=0;
    j=0;
    k=l-1;

    while (i<len_a && j<len_b)
    {   
        const x=[i,j];
        // setCompare(x);
        await setCompare(pre=>
          { 
            // console.log("previos value ")
            // console.log(pre);
            return [l-1,h-1]
          
          });
        console.log(i,j);
        if(a[i]<b[j])
        {
        c[k++]=a[i++]
        }
        else
        {
          c[k++]=b[j++]
        }
        // await sleep(1000)
        await setC(pre=>[...c])
       
    }
    for(;i<len_a;i++)
    {
      c[k++]=a[i]
    }
    for(;j<len_b;j++)
    {
      c[k++]=b[j]
    }
    await setC(pre=>[...c])
    return c;
  
  }
    
  
// setInterval(()=>
// {
//   setCompare([compare[0]+1,0]);
// },1000)
 


  // console.log(compare)
    return (
  
        
        <div className="app">
    
        
        {success ? <span>Sorting successfull !!</span>:<span>Sorting 15 random numbers</span> }
        {!success && window.innerWidth<900 ?<span>Scroll left-right to see all block</span>:null }
        <div className="graph">

        {c.map((val,index)=>
        {   
      
            var style={height:`${val*1.5}px` }
            right+=1
            if(val<0)
            {
              style.height=`${0}px`
            }
            if(index==compare[0] || index==compare[1])
            {
              style.backgroundColor="green";
            }
       
            return <><div key={index} style={style} className="value">{val}</div>
            {/* <span style={style}>{val}</span> */}
            </>
        })}
       

        </div>
        {/* <input value={inputArray} onChange={(e)=>setinputArray(e.target.value)} className="array" type="text" placeholder="enter your array 5 6 8 etc"/> */}
        <div style={{display:"flex"}}>
        <button className="submit" onClick={async ()=>{


    // console.log("reredner")
         
          await setSuccess(false)
          await mergeSort(1,array.length,array);
          // setShow(!show)
          await setCompare(pre=>[-1,-1])
          await setSuccess(true)
         
        }}>Sort</button>
         <button onClick={async ()=>
         {  
          for(i=0;i<array.length;i++)
          {
            array[i]=Math.floor(Math.random(0,1) * 100)
          }
          await setShow();
          await  setC(array);
          await setSuccess(false)
         }}  className="submit">Refresh</button>
         </div>
        </div>
    )
}