import { useParams } from "react-router-dom";
import Data from "../../services/dataService";
import NoFound from "../../pages/NotFound/NotFound";
import Accordion from "../../components/Accordion/Accordion";
import Slider from "../../components/Slider/Slider";
import StarsRating from "../../components/StarsRating/StarsRating";
import Tags from "../../components/Tags/Tags";
import "./Detail.css";

const Detail = () => {
  let { id } = useParams();

  const data = new Data();
  const housingData = data.getHousing(id);

  if (!housingData) {
    console.log("errorData");
    return <NoFound />;
  }
  console.log("rerender");
  return (
    <main className="main__detail">
      <Slider picture={housingData.pictures} />

      <section className="section__header">
        <article className="header__info">
          <div className="header__info__title">
            <h2>{housingData.title}</h2>
            <p>{housingData.location}</p>
          </div>
          <div className="header__info__tags">
            {housingData.tags.map((tag, index) => {
              return <Tags key={`tag-${index}`} name={tag} />;
            })}
          </div>
        </article>

        <article className="header__host">
          <div className="header__host__name">
            <span>{housingData.host.name}</span>
            <img src={housingData.host.picture} alt="" />
          </div>
          <StarsRating rating={housingData.rating} />
        </article>
      </section>

      <section className="section__content">
        <div className="section__content__accordion">
          <Accordion 
            key={housingData.id}
            id={housingData.id}
            title="description"
            >
            <div className="content__accordion__describe">{housingData.description}</div>
          </Accordion>

          <Accordion
            key={housingData.id}
            id={housingData.id}
            title="Équipement"
          >
            <ul>
              {housingData?.equipments.map((equipement, index) => (
                <li className="content__accordion__list" key={index}>
                  {equipement}
                </li>
              ))}
            </ul>
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default Detail;
