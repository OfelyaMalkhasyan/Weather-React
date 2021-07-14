import sunny from "../images/01.svg";
import cloudy from "../images/09.svg";
import rainy from "../images/17.svg";
import "../App.css";

const weatherInfo = [{
    weekDey: "Monday",
    imgURL: sunny,
    temp: "36C"
},
{
    weekDey: "Tuesday",
    imgURL: cloudy,
    temp: "32C",
},
{
    weekDey: "Wednesday",
    imgURL: rainy,
    temp: "35C"
},
{
    weekDey: "Thursday",
    imgURL: rainy,
    temp: "35C"
},
{
    weekDey: "Friday",
    imgURL: rainy,
    temp: "36C"
},
{
    weekDey: "Saturday",
    imgURL: sunny,
    temp: "37C"
},
{
    weekDey: "Sunday",
    imgURL: cloudy,
    temp: "39C"
}
];

export default weatherInfo.map((el)=> {
    return (
        <div className="weather">
            <h2>{el.weekDey}</h2>
            <img src = {el.imgURL} alt ="image" />
            <p>{el.temp}</p>
        </div>
    )
})