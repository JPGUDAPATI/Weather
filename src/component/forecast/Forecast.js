import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemHeading
} from "react-accessible-accordion";

import "./forecast.css"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

    const dayInWeek = new Date().getDay();
    const forecastday = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));

    console.log(forecastday);



    return (
        <>
            <label className="Daily">Daily</label>
            <Accordion allowZeroExpanded>

                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>

                                    <label className="day">{forecastday[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_max
                                    )}°C / {Math.round(item.main.temp_min
                                    )}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}</label>
                                </div>

                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity} %</label>
                                </div>

                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}</label>
                                </div>

                                <div className="daily-details-grid-item">
                                    <label>WindSpeed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>

                                <div className="daily-details-grid-item">
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>

                                <div className="daily-details-grid-item">
                                    <label>Feels Like</label>
                                    <label>{item.main.feels_like} °C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    )
}
export default Forecast;