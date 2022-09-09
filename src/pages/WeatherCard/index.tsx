import axios from "axios";
import { useEffect, useRef, useState } from "react";
import SearchBox from "../../components/SearchBox";
import WeatherCard from "../../components/WeatherCard";
import useHttpReq from "../../hooks/useHttpReq";

const MainWeather = () => {
  const [inputText, setInputText] = useState<string>("");
  const [dataSearch, setDataSearch] = useState({});
  const [userPos, setUserPos] = useState({ longitude: 0, latitude: 0 });
  const [userSearchPos, setUserSearchPos] = useState({ lon: null, lat: null });
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }
    };
    const showPosition = (position: {
      coords: {
        longitude: number;
        latitude: any;
      };
    }) => {
      setUserPos({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };
    getLocation();
  }, []);

  const { data: currentLocationData, loading } = useHttpReq({
    path: `https://api.openweathermap.org/data/2.5/weather?lat=${userPos.latitude}&lon=${userPos.longitude}&units=metric&cnt=7x&exclude=hourly,daily&appid=5de4a6ec6543ab88d748702df62f9851`,
  });

  const getSearchData = () => {
    if (inputText) {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${inputText}&appid=5de4a6ec6543ab88d748702df62f9851`
        )
        .then((res) =>
          setUserSearchPos({ lon: res.data[0].lon, lat: res.data[0].lat })
        );

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${userSearchPos?.lat}&lon=${userSearchPos?.lon}&units=metric&exclude=hourly,daily&appid=5de4a6ec6543ab88d748702df62f9851`
        )
        .then((res) => setDataSearch(res.data));
    }
  };

  if (loading) return null;

  return (
    <>
      <SearchBox
        inputText={inputText}
        setInputText={setInputText}
        handleSearch={getSearchData}
      />
      <WeatherCard data={currentLocationData} />
      {dataSearch && <WeatherCard data={dataSearch} />}
    </>
  );
};

export default MainWeather;
