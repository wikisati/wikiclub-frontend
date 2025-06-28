document.addEventListener('DOMContentLoaded', function () {
    const calendarBody = document.getElementById('calendar-body');
    const currentMonthYear = document.getElementById('current-month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    let currentDate = new Date();

    function generateCalendar() {
        // Clear previous calendar
        calendarBody.innerHTML = '';

        // Set the current month and year in the header
        currentMonthYear.textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        let dayCounter = 1;

        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');

                if (i === 0 && j < firstDay.getDay()) {
                    // Empty cells before the first day of the month
                    cell.textContent = '';
                } else if (dayCounter > lastDay.getDate()) {
                    // Empty cells after the last day of the month
                    cell.textContent = '';
                } else {
                    cell.textContent = dayCounter;

                    // You can add additional logic here for events or styling
                    // For example, you might want to highlight the current day.
                    if (dayCounter === new Date().getDate() && currentDate.getMonth() === new Date().getMonth()) {
                        cell.classList.add('current-day');
                    }

                    dayCounter++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    // Event listeners for previous and next month buttons
    prevMonthBtn.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar();
    });

    nextMonthBtn.addEventListener('click', function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar();
    });

    // Initial calendar generation
    generateCalendar();
});

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
