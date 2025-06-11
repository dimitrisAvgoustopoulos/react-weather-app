import {useState} from 'react';
import {useSelector} from 'react-redux';
import WeatherCard from './WeatherCard.jsx'
import PaginationControls from './pagination/PaginationControls.jsx';

import {paginLogic} from '../utils/paginLogic.js'

const WeatherList = ({weatherData}) =>{
    //Initial state usage
    //const [paginationPage, setPaginationPage] = useState(1);

    //Redux
    //Read data from the store
    const paginationPage = useSelector(state=>state.pagination.paginationPage);
  

    // Deriving values from pagination function
    const [totalPages, paginatedData] = paginLogic(weatherData, paginationPage); 
    
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedData.map((item) => (
                    <WeatherCard key={item.location.name} 
                        item={item} 
                    />
                ))}
            </div>
            <PaginationControls 
                paginationPage={paginationPage} 
                totalPages={totalPages}
                //onHandlePagination={setPaginationPage} Removed because of the redux feature
            />
        </>
    )
}
export default WeatherList;