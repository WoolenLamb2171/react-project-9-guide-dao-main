import React, { useState, useEffect } from "react";
import Item from "./Item.js";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  let id = 1;

  useEffect(() => {
    (async()=>{
      try{
        setLoader(true);
        const response = await fetch("https://learn.guidedao.xyz/api/student/products");
        const data = await response.json();
        if(data){
          console.log(data[0][0])
          setProducts(data[0][0])
        }
      } catch(error){
          console.error(error)
      } finally{
        setLoader(false);
      }
    })()
  }, [])

  //Накинуть стиля на loader
  if(loader){
    return <p className="loader">Равняем потолки...</p>
  }

  return (<div className="shop">
    {products.map(item =>  {
      id  += 1
      return <Item key={id} info={item} />
    })}
  </div>);
}
