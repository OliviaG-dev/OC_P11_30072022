import { useParams } from 'react-router-dom';
import Data from "../../services/dataService";
import NoFound from "../../pages/NotFound/NotFound";
//import Accordion from "../../components/Accordion"
import Slider from "../../components/Slider/Slider";

const Detail = () => {
  let {id} = useParams();

  console.log(id);

  const data = new Data();
  const housingData = data.getHousing(id);

  if(!housingData){
    console.log("errorData");
    return <NoFound />
  }

  return (
  <main className='main__detail'>

  <Slider picture={housingData.pictures}/>
    <h1>Detail</h1>
  </main>
  )
}


export default Detail;
