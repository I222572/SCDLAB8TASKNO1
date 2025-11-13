function isValidEvent(event) {
  if (!event.name || !event.date || !event.category) {
    return { valid: false, message: "Missing required event fields" };
  }
  
  const eventDate = new Date(event.date);
  const now = new Date();
  
  // Set hours to 0 to compare only dates, not times
  eventDate.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  
  if (isNaN(eventDate.getTime())) {
    return { valid: false, message: "Invalid date format" };
  }
  
  // Fix: Check if event date is in the past
  if (eventDate < now) {
    return { valid: false, message: "Event date cannot be in the past" };
  }
   
  return { valid: true, message: "Event is valid" };
}

module.exports = { isValidEvent };
