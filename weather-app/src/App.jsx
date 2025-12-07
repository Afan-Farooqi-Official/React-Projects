import styles from 'styled-components'
import { useState } from 'react'

function App() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  }

  const API = import.meta.env.VITE_API_KEY;

  const fetchWeatherData = async () => {
    if (!city) return;

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
      const data = await response.json();

      if (data.cod !== 200) {
        alert("City not found! Please enter a valid city.");
        setWeatherData(null);
        return;
      }

      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  return (
    <Container>
      <MainContainer expanded={weatherData !== null}>
        <Title>Weather App</Title>
        <ContainerRow>
          <Input type="text" placeholder="Enter city name" value={city} onChange={handleInputChange} />
          <Button onClick={fetchWeatherData}>Search</Button>
        </ContainerRow>

        {
          weatherData && weatherData.main && (
            <DataContainer>
              <h3>City: {weatherData.name}</h3>
              <h3>Temperature: {weatherData.main.temp} °C</h3>
              <h3>Humidity: {weatherData.main.humidity} %</h3>
              <h3>Condition: {weatherData.weather[0].description}</h3>
            </DataContainer>
          )
        }

      </MainContainer>
      <BgImg src='../public/bg.jpg'/>
    </Container>
  )
}

const Container = styles.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`

const BgImg = styles.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: blur(3px);
  transform: scale(1);
`

const MainContainer = styles.div`
  height: 30vh;
  width: 40vw;
  background-color: rgba(255,255,255,0.3);
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border: 1px solid rgba(255,255,255,0.18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) => props.expanded && `
    height: 60vh;
    transition: height 0.15s ease;
    padding: 20px;
  `}

  &:hover {
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.47);
    transition: box-shadow 0.3s ease-in-out;
  }
`

const Title = styles.h1`
  color: #fff;
  margin-bottom: 20px;
`

const ContainerRow = styles.div`
  display: flex;
  align-items: center;
`

const Input = styles.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  width: 200px;
  font-size: 16px;
`

const Button = styles.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-left: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #87CEFA;
  color: white;
  
  &:hover {
    background-color: #00BFFF;
    transition: background-color 0.5s ease;
  }
`

const DataContainer = styles.div`
  margin-top: 20px;
  color: #fff;
  text-align: center;

  h3 {
    margin: 15px 0;
  }
`

export default App
