import flightData from "../data/flights.json";
import FlightService from "./FlightService";

class SelectedCountriesService {
  getSumOf(selectedCountries) {
    const summedData = []

    selectedCountries.forEach(countryObject => {
      const countryDates = Object.keys(flightData[countryObject.countryCode].dates)
      const country = flightData[countryObject.countryCode]
      countryDates.forEach((date, index) => {
        if (!summedData[date]) {
          summedData[date] = {
            domesticFlights: {
              2019: 0,
              2020: 0
            },
            internationalFlights: {
              2019: 0,
              2020: 0
            },
            coronaCases: {
              Cases: 0,
              Deaths: 0
            }
          }
        }
        summedData[date].domesticFlights[2019] += country.dates[date].domesticFlights[2019]
        summedData[date].domesticFlights[2020] += country.dates[date].domesticFlights[2020]
        summedData[date].internationalFlights[2019] += country.dates[date].internationalFlights[2019]
        summedData[date].internationalFlights[2020] += country.dates[date].internationalFlights[2020]
        if (country.dates[date].coronaCases.Cases) summedData[date].coronaCases.Cases += parseInt(country.dates[date].coronaCases.Cases)
        if (country.dates[date].coronaCases.Deaths) summedData[date].coronaCases.Deaths += parseInt(country.dates[date].coronaCases.Deaths)
      })
    })
    const timestamps = Object.keys(summedData)
    const values = Object.values(summedData)
    timestamps.forEach((timestamp, index) => {
      values[index].timestamp = timestamp
    })
    return values
  }

  getSelectedCountriesDataForHeatmap(selectedCountries, type) {
    const countryData = FlightService.getFlights
  }
}


export default new SelectedCountriesService()