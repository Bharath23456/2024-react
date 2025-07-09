
import { useState } from 'react';

const Hoc = (Orginalcomponent) => 
    {
    const Newcomponent=()=>
        {
        const [counter,setCounter]=useState(0);
            const Increment=()=>{
                setCounter(counter+1);
            }
            const Decrement=()=>{
                setCounter(counter-1);
            }
            const Reset =()=>{
                setCounter(43);
            }
    
  return (
    <Orginalcomponent
    counter={counter}
    Decrement = {Decrement}
    Increment = {Increment}
    Reset ={Reset}
     />
  )
}
return Newcomponent
}

export default Hoc