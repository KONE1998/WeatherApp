import React, { useState } from "react";

import DisplayWeather from "./DisplayWeather";

import { Drawer, Button, Typography } from 'antd';


import "./weather.css";
require('dotenv').config();

// REACT_APP_OPEN_WEATHER_API_KEY = REACT_APP_API_KEY
function Weather() {
  const { Paragraph } = Typography;
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    lat: "",
    lon: "",
    hourly: "",
    daily: ""
  });

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };


  // const apikey = "Enter Your APIKEY here";
  // const apikey = REACT_APP_API_KEY;
  // const apikey = '5ce483bafb18f743f70d0e980c5ddf35'
  async function weatherData(e) {
    e.preventDefault();
    if (form.lat == "") {
      alert("Add lattitude and longitude");
    } else {
      const data = await fetch(
        //one call api for fetching data
        `https://api.openweathermap.org/data/2.5/onecall?lat=${form.lat}&lon=${form.lon}&exclude=${form.hourly, form.daily}&appid=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data);
      console.log('data', data)
      setWeather({ data: data });
    }
  }

  // const handleClick = () => {
  //   alert(`${props.alerts.description}`)
  // }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "lat") {
      setForm({ ...form, lat: value });
    }
    if (name == "lon") {
      setForm({ ...form, lon: value });
    }
  };
  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="lat"
          name="lat"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="lon"
          name="lon"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>

      </form>
      <Button type="primary" onClick={showDrawer} style={{ marginRight: '100px', marginTop: '10px' }}>
        Fetch sample List
      </Button>
      <Drawer style={{ width: "100px" }}
        title="Lattitude and Longitude"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <p><h2>India</h2>  <Paragraph copyable={{ tooltips: ['click here', 'you copied longitude !!'], }}>20.5937</Paragraph>° N, <Paragraph copyable={{ tooltips: ['click here', 'you copied lattitude !!'], }}>78.9629</Paragraph>° E </p>
        <p><h2>America</h2> <Paragraph copyable={{ tooltips: ['click here', 'you copied longitude !!'], }}>37.0902</Paragraph>° N, <Paragraph copyable={{ tooltips: ['click here', 'you copied lattitude !!'], }}>95.7129</Paragraph>° W</p>
        <p><h2>Japan</h2>  <Paragraph copyable={{ tooltips: ['click here', 'you copied longitude !!'], }}>36.2048</Paragraph>° N , <Paragraph copyable={{ tooltips: ['click here', 'you copied lattitude !!'], }}>138.2529</Paragraph>° E</p>
        <p><h2>Russia</h2>  <Paragraph copyable={{ tooltips: ['click here', 'you copied longitude !!'], }}>61.5240</Paragraph>° N, <Paragraph copyable={{ tooltips: ['click here', 'you copied lattitude !!'], }}>105.3188</Paragraph>° E</p>
        <p><h2>South Africa</h2>  <Paragraph copyable={{ tooltips: ['click here', 'you copied longitude !!'], }}>8.7832</Paragraph>.° S, <Paragraph copyable={{ tooltips: ['click here', 'you copied lattitude !!'], }}>34.5085</Paragraph>° E</p>
      </Drawer>

      {/* {console.log(weather)} */}
      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}

    </div>
  );
}

export default Weather;
