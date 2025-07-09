
import Hoc from "../hoc/Hoc";
const Like=(props)=>{
    const {counter,Increment,Decrement,Reset}=props;
    

    return(
        <>
        <h1>Likes is {counter}</h1>
        <button onClick={Increment}>increment counter</button>
        <button onClick={Decrement}>Decrement counter</button>
        <button onClick={Reset}>Reset</button>
        </>
    )
}
export default Hoc(Like);