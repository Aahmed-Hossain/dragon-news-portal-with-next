export function getCurrentDate() {
    const currentDate = new Date();
    const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);
    const dayOfMonth = currentDate.getDate();
    const year = currentDate.getFullYear();
    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  }
//   const currentDate = getCurrentDate();
  