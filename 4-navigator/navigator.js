let addressLat = 0;
let addressLong = 10;
let positionLat = 8;
let positionLong = 16;

const distance = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);

console.log(distance);