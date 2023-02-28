import "./currentWeather.css"

const currentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weatherdes">{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className="wimg"></img>
            </div>

            <div className="bottom">
                <div className="temperature">{data.main.temp}°C</div>


                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-top">Details</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}</span>
                    </div>

                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure}</span>
                    </div>

                    {/* <div className="parameter-row">
                        <span className="parameter-label">Rain</span>
                        <span className="parameter-value">{data.}</span>
                    </div> */}

                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed}</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default currentWeather
