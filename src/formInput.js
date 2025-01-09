// get location info from user input.
// const button = document.getElementById('formButton');


export function getLocation() {
    const locationInput = document.getElementById('location');
    return locationInput.value.trim().toLowerCase();
}

