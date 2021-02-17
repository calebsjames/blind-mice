//declare an empty variable for useLocations()
let locations = []

//export getLocations function
export const getLocations = () => {
    //fetch from loacl API
    return fetch('http://localhost:8088/locations')
    //parse to json
        .then(response => response.json())
        //give parsed responsed to previously declared empty variable (locations)
        .then(parsedLocations => {
            locations = parsedLocations
        })

}

//export function to return locations.slice()
export const useLocations = () => locations.slice();

