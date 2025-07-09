import Hoc from "../hoc/Hoc";
const Comments=(props)=>{
    const {counter,Increment,Decrement,Reset}=props;
    

    return(
        <>
        <h1>comment is {counter}</h1>
        <button onClick={Increment}>increment counter</button>
        <button onClick={Decrement}>Decrement counter</button>
        <button onClick={Reset}>Reset</button>
        </>
    )
}
export default Hoc(Comments);