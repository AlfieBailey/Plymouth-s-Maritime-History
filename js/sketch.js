var map = L.map('map').setView([50.367681, -4.153862], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([50.371042, -4.181317]).addTo(map);
marker.bindPopup("<b>Devonport Naval Heritage Centre</b><br>Devonport Naval Heritage Centre, formerly known as the Plymouth Naval Base Museum is a maritime museum in Plymouth, Devon. It is housed in a number of historic buildings within the South Yard of HM Naval Base, Devonport").openPopup();
var marker = L.marker([50.394827, -4.180532]).addTo(map);
marker.bindPopup("<b>HMNB Devonport</b><br>Devonport is one of three operating bases in the United Kingdom for the Royal Navy and is the sole nuclear repair and refuelling facility for the Royal Navy. The largest naval base in Western Europe, HMNB Devonport is located in Devonport, in the west of the city of Plymouth, England").openPopup();
var marker = L.marker([50.366983, -4.134526]).addTo(map);
marker.bindPopup("<b>The Barbican</b><br>The Barbican is a maze of narrow streets and alleyways preserving the medieval street layouts and many of the Tudor Dwellings. The Barbican is the home to art galleries, individual shops, bars, pubs and cafes").openPopup();
var marker = L.marker([50.366246, -4.133810]).addTo(map);
marker.bindPopup("<b>Mayflower Steps</b><br>The Mayflower Steps are close to the site in the Barbican area of Plymouth, south-west England, from which the Pilgrim Fathers are believed to have finally left England aboard the Mayflower on 6 September 1620, before crossing the Atlantic Ocean to settle in North America").openPopup();
var marker = L.marker([50.362505, -4.162895]).addTo(map);
marker.bindPopup("<b>Royal William Yard</b><br>The Royal William Victualling Yard in Stonehouse, a suburb of Plymouth, England, was the major victualling depot of the Royal Navy and an important adjunct of Devonport Dockyard. It was designed by the architect Sir John Rennie and was named after King William IV").openPopup();
var marker = L.marker([50.368963, -4.133917]).addTo(map);
marker.bindPopup("<b>Sutton Harbour</b><br>Sutton Harbour, formerly known as Sutton Pool, is the original port of Plymouth in Devon, England. It is still a busy fishing port and marina and is bounded on one side by the historic Barbican district").openPopup();
var marker = L.marker([50.365564, -4.142288]).addTo(map);
marker.bindPopup("<b>The Hoe</b><br>The Hoe is a popular area for visitors offering views of Plymouth Sound. Best known for the story that Sir Francis Drake played his famous game of bowls here in 1588 before sailing out with the English fleet to engage with the Spanish Armada").openPopup();
var marker = L.marker([50.364877, -4.137418]).addTo(map);
marker.bindPopup("<b>The Citadel</b><br>Built following the English Civil War, this was England’s principal fortress featuring outstanding examples of 17th-century baroque architecture. Open for guided tours on Tuesdays (May to September)").openPopup();

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