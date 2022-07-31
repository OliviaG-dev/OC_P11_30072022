//import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Data from "../../services/dataService";
import ImageHeader from "../../assets/ImageHeader.png"
import Card from "../../components/Card/Card"

const Home = () => {
  
  const data = new Data()
  const housingData = data.getAllHousing()

  console.log(housingData);

  return (
  <>
    <Header text={'Chez vous, partout et ailleurs'} picture={{src:ImageHeader, alt:'image paysage'}}/>
    <main>
      {
        housingData.map(({id, title, cover}) => {            
          return  <Card key={id} id={id} title={title} cover={cover} />
        })
      }
    </main>
  </>
  );
};

export default Home;
