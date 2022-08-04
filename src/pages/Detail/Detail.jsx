import { useParams } from 'react-router-dom';
import Data from "../../services/dataService";
import NoFound from "../../pages/NotFound/NotFound";
//import Accordion from "../../components/Accordion"
import Slider from "../../components/Slider/Slider";
import StarsRating from '../../components/StarsRating/StarsRating';
import Tags from '../../components/Tags/Tags';
import "./Detail.css";

const Detail = () => {
  let {id} = useParams();

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
    <div className='main__tags'>
        {
          housingData.tags.map((tag, index) => {
            return <Tags key={`tag-${index}`} name={tag}/>
          })
        }
        
    </div>

    <section>
      <div></div>
      <StarsRating rating={housingData.rating} />
    </section>
    
  </main>
  )
}


export default Detail;
