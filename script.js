// Sample data for 12 weeks - Update these with your actual content and image paths
const weeksData = [
    {
        weekNumber: 1,
        title: "Flowing with the Goal: Low-Carbon Cooling",
        description: 'In an effort to promote energy conservation, this photo illustrates a shift from mechanical cooling to nature-based solutions. By utilizing the natural thermal regulation of a flowing river, I am eliminating the need for high-energy appliances like air conditioning or fans. This simple choice reduces my personal carbon footprint and advocates for SDG 13 Climate Action by demonstrating that we can find comfort and energy through the sustainable preservation of our natural ecosystems.',
        image: "images/week1.png",
        date: "Week 1",
    },
    {
        weekNumber: 2,
        title: "Conscious Crafting: Upcycling for the Future",
        description: 'As part of an ongoing energy conservation effort, this photo showcases the creative reuse of materials to reduce environmental impact. By upcycling wood scraps into decorative pieces, I am directly supporting SDG 12 (Responsible Consumption and Production).',
        image: "images/week2.png",
        date: "Week 2",
    },
    {
        weekNumber: 3,
        title: "Electrifying the Commute: Sustainable Mobility",
        description: 'In the third week of my energy conservation effort, I am highlighting the shift toward sustainable transportation by using an e-bike. This choice represents a practical commitment to SDG 7 (Affordable and Clean Energy) and SDG 11 (Sustainable Cities and Communities).',
        image: "images/week3.png",
        date: "Week 3",
    },
    {
        weekNumber: 4,
        title: "Efficient Home Management: Optimizing Energy Loads",
        description: 'In the fourth week of my energy conservation effort, I am focusing on SDG 12 (Responsible Consumption and Production) by optimizing the use of household appliances. By ensuring full laundry loads and utilizing efficient washing cycles, I am reducing the frequency of machine use, which significantly lowers weekly electricity and water consumption.',
        image: "images/week4.png",
        date: "Week 4",
    },
    {
        weekNumber: 5,
        title: "Collective Action: Scaling Energy Efficiency",
        description: 'In the fifth week of my energy conservation effort, I am moving beyond individual habits to community-based solutions. This photo captures a collaborative effort to improve a shared space, aligning with SDG 11 (Sustainable Cities and Communities) and SDG 17 (Partnerships for the Goals).',
        image: "images/week5.png",
        date: "Week 5",
    },
    {
        weekNumber: 6,
        title: "Zero-Emission Transit: The Power of the Pedal",
        description: 'In the sixth week of my energy conservation effort, I am embracing the most sustainable form of mobility: cycling. By choosing a bicycle over motorized transport, I am achieving a zero-carbon footprint for my commute, which directly supports SDG 13 (Climate Action).',
        image: "images/week6.png",
        date: "Week 6",
    },
    {
        weekNumber: 7,
        title: "Walking the Talk: Pedestrianism as Conservation",
        description: 'In the seventh week of my energy conservation effort, I am advocating for walking as a primary mode of short-distance travel. This simple act is a powerful contribution to SDG 11 (Sustainable Cities and Communities) and SDG 13 (Climate Action), proving that the most sustainable energy is the kind we provide ourselves.',
        image: "images/week7.png",
        date: "Week 7",
    },
    {
        weekNumber: 8,
        title: "Sustaining Our Roots: Community Stewardship",
        description: 'In the eighth week of my energy conservation effort, I am participating in a community cleanup and gardening project. This initiative aligns with SDG 15 (Life on Land) and SDG 11 (Sustainable Cities and Communities) by maintaining the health of our local green spaces.',
        image: "images/week8.png",
        date: "Week 8",
    },
    {
        weekNumber: 9,
        title: "Material Mindfulness: Reclaiming Resources",
        description: 'In the ninth week of my energy conservation effort, I am focusing on the "Reuse" aspect of the circular economy. By utilizing cardboard and recycled materials for my tasks, I am directly supporting SDG 12 (Responsible Consumption and Production).',
        image: "images/week9.png",
        date: "Week 9",
    },
    {
        weekNumber: 10,
        title: "Renewable Foundations: Building with Nature",
        description: 'In the final week of my energy conservation effort, I am utilizing nature-based materials for community construction. By choosing bamboo over carbon-heavy industrial materials, I am championing SDG 9 (Industry, Innovation, and Infrastructure) and SDG 12 (Responsible Consumption and Production).',
        image: "images/week10.png",
        date: "Week 10",
    },
    {
        weekNumber: 11,
        title: "The Face of Change: Cultural Advocacy for the Planet",
        description: 'In the eleventh week of my energy conservation effort, I am focusing on advocacy and education—key components of SDG 4 (Quality Education) and SDG 17 (Partnerships for the Goals). This visual display uses creative expression to engage the community in discussions about environmental responsibility and the masks we wear in our climate journey.',
        image: "images/week11.png",
        date: "Week 11",
    },
    {
        weekNumber: 12,
        title: "The Water-Energy Nexus: Sustainable Hydration",
        description: 'In the 12th week of my energy conservation effort, I am addressing the critical link between water and energy, often called the Water-Energy Nexus. By managing bulk water refills and emphasizing efficient water consumption, I am supporting SDG 6 (Clean Water and Sanitation) and SDG 12 (Responsible Consumption and Production).',
        image: "images/week12.png",
        date: "Week 12",
    }
];

// Function to render week cards
function renderWeeks() {
    const container = document.getElementById('weeks-container');
    
    weeksData.forEach(week => {
        const card = document.createElement('div');
        card.className = 'week-card';
        
        card.innerHTML = `
    <div class="week-image-wrapper">
        <img src="${week.image}" 
             alt="Week ${week.weekNumber} - ${week.title}" 
             class="week-image">
        <div class="week-number-badge">${week.weekNumber}</div>
    </div>

    <div class="week-content">
        <h3 class="week-title">${week.title}</h3>
        <p class="week-description">${week.description}</p>

        <div class="week-meta">
            <span class="meta-item">${week.date}</span>
        </div>
    </div>
`;
        
        container.appendChild(card);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderWeeks);
