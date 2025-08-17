 // Example dynamic notices, you can customize or fetch from an API
const notices = [
    "3-Day Workshop on CyberShield 101: Enhance your cyber security skills!",
    "Congratulations to students placed in Infosys, TCS, Wipro, IBM, Capgemini, and more.",
    "NRCM Celebrated 14th Graduation Day for BTech Class of 2020 & MBA Class of 2022.",
    "Upcoming: National-Level Project Expo 'IGNITE-2K25', register now.",
    "6-Day Workshop: Front End Web Development - Starting soon.",
    "International Yoga Day celebrated with staff and students.",
    "Admissions Open for 2025 Batch – Apply Online!"
];

const ul = document.getElementById('notices');
notices.forEach(notice => {
    const li = document.createElement('li');
    li.textContent = notice;
    ul.appendChild(li);
});