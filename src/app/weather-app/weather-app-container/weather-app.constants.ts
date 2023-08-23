export const icons = {
  'light rain': 'rainy-1',
  'overcast clouds': 'cloudy-day-3',
  'scattered clouds': 'cloudy',
  'broken clouds': 'cloudy',
  'moderate rain': 'rainy-2',
  'day': 'day',
  'night': 'night',
};

export function getIcon(description: string) {
  let imgPath = `../../../../assets/weather-icons/animated/${
    icons[description] ?? 'day'
  }.svg`;
  console.log(description, imgPath);
  return imgPath.toString();
}
