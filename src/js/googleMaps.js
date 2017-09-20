// Module Google Maps
module.exports = function() {
  // var map;
  // var blackIcon = 'images/icons/marker.png';
  // var blueIcon = 'images/icons/marker.png';
  //
  // function initialize() {
  //
  //   var locations = [
  //     {
  //       'image': './images/activity/gallery-image1.png',
  //       'date': '10.09.2017',
  //       'time': '4:00 PM',
  //       'name': 'Event #245',
  //       'endDate': 'Thursday 25.05.2017',
  //       'state': 'Open Activity',
  //       'category': 'Mountainbike',
  //       'lon': 47.379,
  //       'lat': 8.524
  //     },
  //     // {
  //     //   'image': './images/activity/gallery-image2.png',
  //     //   'date': '10.09.2017',
  //     //   'time': '4:00 PM',
  //     //   'name': 'Event #245',
  //     //   'endDate': 'Thursday 25.05.2017',
  //     //   'state': 'Open Activity',
  //     //   'category': 'Mountainbike',
  //     //   'lon': 47.375,
  //     //   'lat': 8.524
  //     // }
  //   ];
  //   var options = {
  //     zoom: 15,
  //     center: new google.maps.LatLng(locations[0].lon, locations[0].lat),
  //     mapTypeId: google.maps.MapTypeId.ROADMAP,
  //     scrollwheel: false,
  //     mapTypeControl: false,
  //     streetViewControl: false,
  //     zoomControl: true,
  //     zoomControlOptions: {
  //       position: google.maps.ControlPosition.TOP_RIGHT
  //     }
  //   };
  //
  //   map = new google.maps.Map(document.getElementById('map'), options);
  //
  //   var marker, i, infowindow;
  //
  //   for ( i = 0; i < locations.length; i++ ) {
  //     marker = new google.maps.Marker({
  //       position: new google.maps.LatLng(locations[i].lon, locations[i].lat),
  //       map: map,
  //       icon: {
  //         url: blackIcon,
  //         size: new google.maps.Size(34, 42),
  //         scaledSize: new google.maps.Size(34, 42)
  //       }
  //     });
  //
  //     function handleMarkerMouseOver() {
  //       if ( this.icon.url === blackIcon ) {
  //         this.setIcon({
  //           url: blueIcon,
  //           size: new google.maps.Size(34, 42),
  //           scaledSize: new google.maps.Size(34, 42)
  //         });
  //       }
  //     }
  //
  //     function handleMarkerMouseLeave() {
  //       if ( this.icon.url === blueIcon ) {
  //         this.setIcon({
  //           url: blackIcon,
  //           size: new google.maps.Size(34, 42),
  //           scaledSize: new google.maps.Size(34, 42)
  //         });
  //       }
  //     }
  //
  //     google.maps.event.addListener(marker, "mouseover", handleMarkerMouseOver);
  //     google.maps.event.addListener(marker, "mouseout", handleMarkerMouseLeave);
  //
  //     var iwContent =
  //       '<div class="event">' +
  //         '<div class="event-image">' +
  //           '<div style="background-image:url(' + locations[i].image + ');" class="image"></div>' +
  //         '</div>' +
  //         '<div class="event-content clearfix">' +
  //           '<div class="event-date-time">' +
  //             '<span>' + locations[i].date + ' / ' + locations[i].time +'</span>' +
  //           '</div>' +
  //           '<div class="event-title">' +
  //             '<span>' + locations[i].name + '</span>' +
  //           '</div>' +
  //           '<div class="event-end-date">' +
  //             '<span>' + locations[i].endDate + '</span>' +
  //           '</div>' +
  //           '<div class="event-state">' +
  //             '<span>' + locations[i].state + '</span>' +
  //           '</div>' +
  //           '<div class="event-category">' +
  //             '<span>Category: ' + locations[i].category + '</span>' +
  //           '</div>' +
  //         '</div>' +
  //       '</div>';
  //
  //     infowindow = new SnazzyInfoWindow({
  //       marker: marker,
  //       content: iwContent,
  //       closeWhenOthersOpen: true
  //     });
  //   }
  // }
  // if ( $('#map').length ) {
  //   google.maps.event.addDomListener(window, 'load', initialize);
  // }
};