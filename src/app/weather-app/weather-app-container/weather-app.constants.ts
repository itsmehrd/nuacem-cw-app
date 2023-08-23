export const icons = {
  'light rain': 'rainy-4',
  'overcast clouds': 'cloudy-day-3',
  'scattered clouds': 'cloudy',
  'broken clouds': 'cloudy',
  'moderate rain': 'rainy-6',
  'thunderstorm': 'rainy-7',
  'mist': 'snowy-6',
  'day': 'day',
  'haze': 'day',
  'night': 'night',
  'light intensity drizzle': 'rainy-5',
  'few clouds': 'cloudy',
};

export function getIcon(description: string) {
  let imgPath = `assets/weather-icons/animated/${
    icons[description] ?? 'day'
  }.svg`;
  return imgPath.toString();
}
