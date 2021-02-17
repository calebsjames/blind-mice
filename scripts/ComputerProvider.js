//declare an empty variable for useComputers()
let computers = []

//export getComputers function
export const getComputers = () => {
    //fetch from loacl API
    return fetch('http://localhost:8088/computers')
    //parse to json
        .then(response => response.json())
        //give parsed responsed to previously declared empty variable (computers)
        .then(parsedComputers => {
            computers = parsedComputers
        })

}

//export function to return computers.slice()
export const useComputers = () => computers.slice();

