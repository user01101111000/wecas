import HighlightWeather from "../components/HighlightWeather/HighlightWeather";
import MapWeather from "../components/MapWeather/MapWeather";
import Search from "../components/Search/Search";
import TodayWetaher from "../components/TodayWetaher/TodayWetaher";
import WeekWeather from "../components/WeekWeather/WeekWeather";

export default function MainLayout() {
  return (
    <>
      <HighlightWeather />
      <MapWeather />
      <Search />
      <TodayWetaher />
      <WeekWeather />
    </>
  );
}
