import { ref as storageRef } from 'firebase/storage';
import {db, storage} from '../config/firebase'
import {collection, getDocs} from 'firebase/firestore'
import {useState, useEffect} from 'react'



function getFetchDatabase(target: string){
  const [result, setResult] = useState<any[]>([])

  //get all the events from the database
  const eventsCollection = collection(db, target);
  
  
  useEffect(() => {
    const fetchEvents = async () => {
      //Read Data
      try{
      const data = await getDocs(eventsCollection);
      const filteredData = data.docs.map((doc) => ({...doc.data()}));
      setResult(filteredData);
      console.log(filteredData);
      } catch (error) {
        console.log("error fetch Events");
        console.log(error);
      }
      
      
    }
    fetchEvents()
    }, []);
    return result;

}

function getEventsImages(){
  // const storageref = storageRef(storage, 'Events_Images/');
  const imageUrl = "https://firebasestorage.googleapis.com/v0/b/lecteur-avide-site-web.appspot.com/o/Events%20Images%2F7778350.jpg?alt=media&token=eb1d0f78-ab2c-437b-9f8b-3441e539175e";
  return imageUrl;
  
}
export {getEventsImages, getFetchDatabase};