let temperature = 50;

if (temperature < 0) {
    console.log("too winter today")
} else if (temperature < 15) {
    console.log("today is normal day");
} else if (temperature > 50 || temperature === 50) {
    console.log("Today is so hot day");
} else {
    console.log("Ignore weather AC fit karo room ma than just chill");
}