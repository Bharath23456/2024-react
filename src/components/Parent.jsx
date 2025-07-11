import { useSelector } from "react-redux";
const Parent=()=>{
    const data=useSelector(state=>state.list.data)
    console.log(data)
    return(
        <>
        <div className="parent">
          <span>hi</span>  
        </div>
        
        
    </>
    )
}
export default Parent;