function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function addMarker(latLng) {
    let parsed = Object.assign({},{ lat: 0, lng: 0}, latLng);
    const markerOptions = {radius: 8,
        fillOpacity: 1,
        color: 'black',
        fillColor: getRandomColor(),
        weight: 1
    };

    parsed.lat = parsed.lat.toFixed(6);
    parsed.lng = parsed.lng.toFixed(6);

    const marker = L.circleMarker(L.latLng(parsed.lat, parsed.lng), markerOptions);
    marker.bindTooltip(`Latitude: ${parsed.lat}<br/>Longitude: ${parsed.lng}`);
    window.world.sites.addLayer(marker);
    window.world.map.panTo(marker.getLatLng());
}; 