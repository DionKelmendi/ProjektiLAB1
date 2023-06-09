import { React, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

export default function UserFavorites() {

  const location = useLocation();
  const [favoriteData, getFavoriteData] = useState([])
  const { id } = location.state;
  useEffect(() => {
    const fetchFavoriteData = (id) => {
      const favoriteAPI = 'http://127.0.0.1:8000/prova/favorite/user/' + id + "/all/";
      if (id) {
        fetch(favoriteAPI)
          .then((res) => res.json())
          .then((res) => {
            getFavoriteData(res.results);
            console.log(res.results);
          });
      }
    };
    fetchFavoriteData(id);
  }, [id])


  return (
    <h1>Hi!</h1>
  )
}