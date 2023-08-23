export const icons = {
  'light rain': 'rainy-4',
  'overcast clouds': 'cloudy-day-3',
  'scattered clouds': 'cloudy',
  'broken clouds': 'cloudy',
  'moderate rain': 'rainy-6',
  day: 'day',
  night: 'night',
  'light intensity drizzle': 'rainy-5',
  'few clouds': 'cloudy',
};

export function getIcon(description: string) {
  let imgPath = `../../../../assets/weather-icons/animated/${
    icons[description] ?? 'day'
  }.svg`;
  console.log(description, imgPath);
  return imgPath.toString();
}
