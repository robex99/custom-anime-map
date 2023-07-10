function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      mapId: "8c9e0e8c6c89d104",
      center: { lat: 26.574402250007342, lng: 128.0512352444716 },
      zoom: 10,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false
    });

    const markers = [
        [
            "Chihiro\'s Village",
            26.211539813628935,
            127.6960680954025,
            "chihiro.svg",
            40,
            30
        ],
        [
            "Konoha\'s Village",
            26.394242379423627, 
            127.77335246518697,
            "konoha.svg",
            40,
            30
        ],
        [
            "Tanjiro\'s Home",
            26.594967625823493, 
            128.06981730307984,
            "tanjiro.svg",
            40,
            30
        ],
        [
            "Pokémon Dojo",
            26.794303211593117, 
            128.28480413076423,
            "pokemon.svg",
            40,
            30
        ],
        [
            "Local Store",
            26.693154314681625, 
            128.1803653676858,
            "store.svg",
            40,
            30
        ],
        [
            "Saitama\'s Home",
            26.652027761783106, 
            127.95169417108778,
            "saitama.svg",
            40,
            30
        ],
        [
            "Kotaro, the Guard",
            26.325777525070688, 
            127.90366614131729,
            "kotaro.svg",
            40,
            30
        ],
        [
            "Samurai Training Dojo",
            26.125871634726185, 
            127.70907262566949,
            "samurai.svg",
            40,
            30
        ],
        [
            "Ginoza Castle",
            26.49975678531069, 
            127.95965369654041,
            "castle.svg",
            40,
            30
        ],

    ]

    for(let i = 0; i < markers.length; i++){{
        const currMarker = markers[i];
        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2]},
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
            },
            animation: google.maps.Animation.DROP
          });
    
    
        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
          });
    
    
          marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
            });
          });
    }}

  }
