import Header from '../components/Header';
import WeatherList from '../components/WeatherList';

const Home = ({isLoading, data, error}) => {

    if (error) {
        return (
            <>
                <Header/>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#729ac5] to-[#36607B]">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                    <p className="text-red-600 font-semibold">An error occured while fetching: {error.message}</p>
                    </div>
                </div>
            </>
        
        )
    }

    return (
        <div className={`min-h-screen bg-gradient-to-b from-[#729ac5] to-[#36607b57] flex flex-col items-center py-10`}>
            <Header/>
            <div className="w-4/6 md:w-3/4 lg:w-6/12 2xl:w-4/12">
                {isLoading && (
                    <div className="flex justify-center items-center h-40">
                        <p className="text-white text-xl animate-pulse">Fetching Data...</p>
                    </div>
                )}
                {!isLoading && data.length > 0 &&
                    <WeatherList weatherData={data}/>
                }
            </div>

        </div>
    )

};

export default Home;