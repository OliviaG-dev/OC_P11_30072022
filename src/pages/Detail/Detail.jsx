import { useParams } from 'react-router-dom';
import Data from "../../services/dataService";
import NoFound from "../../pages/NotFound/NotFound";
//import Accordion from "../../components/Accordion"

const Detail = () => {
  let {id} = useParams();

  console.log(id);

  const data = new Data();
  const HousingData = data.getHousing(id);

  if(!HousingData){
    console.log("errorData");
    return <NoFound />
  }

  return (
  <div>
    <h1>Detail</h1>
  </div>
  )
}


export default Detail;
