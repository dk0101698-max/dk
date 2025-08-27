// Experience data
const experienceData = [{
        title: "Freelancer",
        date: "2024 - Present",
        description: "Designed and contributed to 7 design patents for students, all successfully published by the Government of India. With a keen eye for detail and a commitment to excellence, I bring creativity and technical proficiency to every design challenge.",
        position: { top: 150 }
    },
    {
        title: "Instructor",
        date: "Offering Support for Robotics-Available for Assistance",
        description: "Assisted in assembling and programming robotic kits for college projects. Conducted basic troubleshooting and maintenance of project equipments.",
        position: { top: 400 }
    },
    {
        title: "Robotic Engineer",
        date: "2023 - present",
        description: "As a robotics engineer at TS Robotics, I played a pivotal role in the development and implementation of cutting-edge robotic systems , and I am a fpv drone pilot.",
        position: { top: 650 }
    }
];

// Auto-calculate positions based on spacing
experienceData.forEach((item, index) => {
    const basePosition = 150;
    const spacing = 250;
    item.position.top = basePosition + (index * spacing);
});