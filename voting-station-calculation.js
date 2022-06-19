const validVenue = ['school', 'community centre'];
const chooseStations = function (stations) {
	return stations.filter(x => x[1] >= 20 && validVenue.includes(x[2])).map(x => x[0]);
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));
