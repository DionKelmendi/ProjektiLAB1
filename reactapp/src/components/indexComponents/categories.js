import { React, useEffect, useState} from "react";
import CategoryItem from "./categoryItem";

export default function Categories() {
  const [data, setData] = useState({ makes: [], count: [] });
  const [dataC, setDataC] = useState({ categories: [], count: [] });
  useEffect(() => {


    const fetchData = () => {
      const API = 'http://127.0.0.1:8000/prova/car/makes/';
        fetch(API)
          .then((res) => res.json())
          .then((res) => {
            setData({ makes: res.results[0].makes[0], count: res.results[0].makes[1] });
          });
      
    };
    fetchData();
  }, [])
 
  useEffect(() => {


    const fetchDataC = () => {
      const API = 'http://127.0.0.1:8000/prova/car/categories/';
        fetch(API)
          .then((res) => res.json())
          .then((res) => {
            console.log(res.results);
            setDataC({ categories: res.results[0].categories[0], count: res.results[0].categories[1] });
          });
      
    };
    fetchDataC();
  }, [])
  useEffect(() => {
    console.log(dataC);
  }, [dataC])
  
  useEffect(() => {
    // console.log(data);
  }, [data]);

  return (
    <section className="categories">
      <h2 className="findCar">Find Car By</h2>
      <div className="container">
        <div>
          <h4 className="categoryTitle">Featured Brands</h4>
          <div className="categoryList">
            {data.makes.map((make, index) => (
              <CategoryItem key={make} categoryLogo={make} categoryName={make} carAmount={data.count[index]} />
              
            ))}
          </div>
        </div>

        <div>
          <h4 className="categoryTitle">Popular Categories</h4>
          
          {dataC.categories.map((category, index) => (
              <CategoryItem key={category} categoryLogo={category} categoryName={category} carAmount={dataC.count[index]} />
              
            ))}
          {/* <CategoryItem categoryLogo={"Hatchback"} categoryName='Hatchback' carAmount='23' />
          <CategoryItem categoryLogo={"SUV"} categoryName='SUV' carAmount='8' />
          <CategoryItem categoryLogo={"Convertible"} categoryName='Convertible' carAmount='5' />
          <CategoryItem categoryLogo={"Wagon"} categoryName='Station Wagon' carAmount='4' /> */}
        </div>
      </div>
    </section>
  )
}