import React, { useState } from "react";
import "./displayweather.css";
import { Drawer, Button, Typography } from 'antd';
function DisplayWeather(props) {
  const { data } = props;

  const { Paragraph } = Typography;

  const handleClick = () => {
    if (data.alerts[0].description === '') {
      alert('Normal')
    }
    else {
      alert(`${data.alerts[0].description}`)
    }
  }
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod != 404 ? data.current.weather[0].icon : null}` +
    ".png";

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="displayweather">
      {props.cod != 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.timezone}
              <img style={{ marginTop: "-60px" }} className="weather-icon" src={iconurl} alt="" srcset="" />

            </span>
            <span className="cardsubtitle">
            </span>

            <h1>
              {" "}

            </h1>
            <span className="weather-description">
              {" "}
            </span>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
                <tr>
                  <td>
                    <h4>Latitude</h4>
                  </td>
                  <td>
                    <span>

                      {data.lat}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Longitude</h4>
                  </td>
                  <td>
                    <span>
                      {data.lon}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Pressure</h4>
                  </td>
                  <td>
                    <span>
                      {data.current.pressure}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Wind degree</h4>
                  </td>
                  <td>
                    <span>{data.current.wind_deg} </span>
                  </td>
                </tr>
              </table>
            </div>

            <div className="section2">
              <table>
                <tr>
                  <td>
                    <h4>Wind</h4>
                  </td>
                  <td>

                    <span>
                      {data.current.wind_speed}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4 copyable>Wind Direction</h4>
                  </td>
                  <td>
                    <span>
                      {data.current.weather[0].description}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Humidity</h4>
                  </td>
                  <td>
                    <span>
                      {data.current.humidity}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Temperature</h4>
                  </td>
                  <td>
                    <span>
                      {data.current.temp}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            <button onClick={handleClick}>Alert</button>

            <Button type="primary" onClick={showDrawer}>
              List
            </Button>
            <Drawer style={{ width: "100px" }}
              title="Basic Drawer"
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
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
