import { React, useEffect, useState } from "react";
import CategoryItem from "./categoryItem";

export default function Categories() {
  const [makeTotal, setMakeTotal] = useState(0);
  const [categoryTotal, setCategoryTotal] = useState(0);
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
          setDataC({ categories: res.results[0].categories[0], count: res.results[0].categories[1] });
        });

    };
    fetchDataC();
  }, [])
  useEffect(() => {
    console.log(dataC);
  }, [dataC])

  useEffect(() => {

    const calculateCategoryTotal = () => {
      if (dataC.categories.length > 9) {
        const total = dataC.count.slice(9).reduce((acc, count) => acc + count, 0);
        setCategoryTotal(total);
      }
    }
    calculateCategoryTotal();
  }, [dataC])

  useEffect(() => {

    const calculateMakeTotal = () => {
      if (data.makes.length > 9) {
        const total = data.count.slice(9).reduce((acc, count) => acc + count, 0);
        setMakeTotal(total);
      }
    }
    calculateMakeTotal();
  }, [data])


  return (
    <section className="categories">
      <h2 className="findCar">Find Car By</h2>
      <div className="container">
        <div>
          <h4 className="categoryTitle">Featured Brands</h4>
          <div className="categoryList">

            {data.makes.map((make, index) => {
              if (index < 9) {
                return <CategoryItem key={make} categoryLogo={make} categoryName={make} carAmount={data.count[index]} />
              }
            })}

            <CategoryItem categoryLogo={"Other"} categoryName={"Other"} carAmount={makeTotal} />
          </div>
        </div>

        <div>
          <h4 className="categoryTitle">Popular Categories</h4>
          <div className="categoryList">

            {dataC.categories.map((category, index) => {
              if (index < 9) {
                return <CategoryItem key={category} categoryLogo={category} categoryName={category} carAmount={dataC.count[index]} />
              }
            })}

            <CategoryItem categoryLogo={"Other"} categoryName={"Other"} carAmount={categoryTotal} />

          </div>
        </div>
      </div>
    </section>
  )
}