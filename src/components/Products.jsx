import React from "react";
import { useState } from "react";
import Product from "./Product";
import AddProduct from "./AddProduct"
import axios from "axios";
import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Pagination from "./Pagination"
import { Grid,Box } from "@chakra-ui/react";


const Products = () => {


     const [formData, setformData] = useState([]);
     const [totalcount, settotalcount] = useState(0);
     const [fetchh, setfetch] = useState(1);
     const [limitt, setlimitt] = useState(3);

     const fetchpage = (data) => {
       setfetch(data);
     };

     const fetchLimit = (data) => {
       setlimitt(data);
     };

     const addData = (data) => {
       fetch("http://localhost:8080/products", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify({
           title: data.title,
           category: data.category,
           gender: data.gender,
           price: data.price,
           imageSrc:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
         }),
       })
         .then((r) => r.json())
         .then((d) => {
           setformData([...formData, d]);
         });
     };

     useEffect(() => {
       const getTodo = async () => {
         let r = await axios.get(
           `http://localhost:8080/products?_page=${fetchh}&_limit=${limitt}`
         );
         setformData(r.data);
         settotalcount(Number(r.headers["x-total-count"]));
       };
       getTodo();
     }, [fetchh, limitt]);

  return (
    <Flex>
      <div>
      <AddProduct onSubmit={addData} ></AddProduct>
    </div>
      <Flex margin='500px' >
        {formData.map((todo) => (
          <Product key={todo.id} info={todo} />
        ))}
      </Flex>

      <Pagination
        totalcount={totalcount}
        oncall={fetchpage}
        onlimitt={fetchLimit}
      />
    </Flex>
  );
};

export default Products;
