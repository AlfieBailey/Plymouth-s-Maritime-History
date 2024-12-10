var map = L.map('map').setView([50.372957, -4.142361], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([50.372488, -4.138762]).addTo(map);
marker.bindPopup("<b>Drake Circus</b><br>This shopping centre opened in 2006, and was named in honour of Sir Francis Drake").openPopup();
var marker = L.marker([50.355332, -4.153791]).addTo(map);
marker.bindPopup("<b>Drake's Island</b><br>From the late 16th century onwards, this island just south of Plymouth was often referred to as Drake's Island").openPopup();
var marker = L.marker([50.376184, -4.139470]).addTo(map);
marker.bindPopup("<b>Drake's Kitchen</b><br>Located in the Rolle building of the University campus, and not the only thing the University has named after Francis Drake").openPopup();
var marker = L.marker([50.376345, -4.139402]).addTo(map);
marker.bindPopup("<b>Francis Drake Hall</b><br>Based right in the thick of the University campus, are halls of residence for students").openPopup();
var marker = L.marker([50.365232, -4.142784]).addTo(map);
marker.bindPopup("<b>Francis Drake Statue</b><br>In 1882 a civic delegation from the Mayor of Plymouth arrived in Tavistock to raise funds to erect a statue to Sir Francis Drake on Plymouth Hoe in readiness for the 300th Anniversary of the defeat of the Spanish Armada in 1588").openPopup();
var marker = L.marker([50.388896, -4.13455]).addTo(map);
marker.bindPopup("<b>Sir Francis Drake Bowling Club</b><br>This bowls club was also named after Drake, showcasing how iconic a figure he is to Plymouth's history").openPopup();
var marker = L.marker([50.369495, -4.143262]).addTo(map);
marker.bindPopup("<b>Civic Centre</b><br>This building has the Plymouth Mayor's suite inside, a position of which Drake became in September 1581").openPopup();
var marker = L.marker([50.36432, -4.142414]).addTo(map);
marker.bindPopup("<b>The famous game of bowls</b><br>There was the story of Sir Francis Drake and his game of bowls on Plymouth Hoe as the Spanish Armada was sighted in the English Channel. He is said to have insisted on finishing his game (which incidentally, he lost!) before taking on and defeating the mighty Spanish fleet in 1588").openPopup();
var marker = L.marker([50.363, -4.151716]).addTo(map);
marker.bindPopup("<b>Drake's return</b><br>On 26 September 1580, Golden Hind sailed into Plymouth with Drake and 59 remaining crew aboard, along with a rich cargo of spices and captured Spanish treasures. The queen's half-share of the cargo surpassed the rest of the crown's income for that entire year").openPopup();
var marker = L.marker([50.363779, -4.15207]).addTo(map);
marker.bindPopup("<b>Not the only Drake to set sail</b><br>His brother Thomas accompanied him on voyages, and named his son after Francis").openPopup();
var marker = L.marker([50.367529, -4.183216]).addTo(map);
marker.bindPopup("<b>HMS Drake</b><br>Plymouth's Naval Base, HMNB Devonport is also referred to as HMS Drake. HMS Drake is 1 of 3 operating Naval Bases in the UK").openPopup();

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

