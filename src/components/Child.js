import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../api/Products";
import { useEffect } from "react";

const Child = () => {
  const Product = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(Product)

  return (
    <div className="parent">
      <ul>
        <li> {Product?.map((item) => (
        <h1 key={item.title}>{item.category}{}</h1>
        
        
      ))}</li>
      </ul>
     
    </div>
  );
};

export default Child;
