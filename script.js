document.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    const currentDayElement = document.querySelector("[data-testid='currentDayOfTheWeek']");
    const currentUTCTimeElement = document.querySelector("[data-testid='currentUTCTime']");

    // Get the current date and time in UTC
    const currentDate = new Date();
    
    // Get the current day of the week (e.g., "Friday")
    const currentDayOfWeek = currentDate.toLocaleDateString(undefined, { weekday: 'long' });

    // Get the current time in milliseconds since January 1, 1970 (UTC)
    const currentUTCTimeMillis = currentDate.getTime();

    // Update the elements with dynamic data
    currentDayElement.textContent = currentDayOfWeek;
    currentUTCTimeElement.textContent = currentUTCTimeMillis + " (UTC)";
});
