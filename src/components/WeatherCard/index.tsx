// @ts-ignore
const WeatherCard = ({ data }) => {
  return (
    <section className="bg-slate-200 m-2 rounded-lg w-fit">
      <div className="p-8">
        <h1 className="text-base font-sans lg:text-xl subpixel-antialiased">
          {data?.name}
        </h1>
        <p className="text-3xl">{data?.main?.temp}°</p>
        {data?.weather?.map(
          (item: { icon: string; description: string; main: string }) => (
            <div className=" flex flex-col justify-center items-center">
              <img
                alt={item.description}
                src={`http://openweathermap.org/img/wn/${item.icon}.png`}
                className="w-20"
              />
              <p>{item.main}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default WeatherCard;
