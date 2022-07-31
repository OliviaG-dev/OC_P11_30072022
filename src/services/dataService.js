import housing from '../assets/data/housing.json'
import about from '../assets/data/about.json'

class Data {
  getAllHousing(){
    return housing; 
  }
  
  getHousing(id){
    return  housing.find(current => current.id === id);
  }
  
  getDataAbout(){
    return about;
  }
}

export default Data