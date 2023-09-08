document.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    const currentDayElement = document.querySelector("[data-testid='currentDayOfTheWeek']");
    const currentUTCTimeElement = document.querySelector("[data-testid='currentUTCTime']");

    // Get the current date and time
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTimeMillis = currentDate.getTime(); // Get time in milliseconds

    // Update the elements with dynamic data
    currentDayElement.textContent = `Current Day of the Week: ${currentDayOfWeek}`;
    currentUTCTimeElement.textContent = `Current UTC Time: ${currentDate.toUTCString()} (${currentUTCTimeMillis} milliseconds)`;
});
