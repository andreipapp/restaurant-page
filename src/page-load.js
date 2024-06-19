export default function pageLoad() {
    const content = document.getElementById('content');
    content.classList.add('content-load');

    content.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.classList.add('title');
    const h2 = document.createElement('h2');
    h2.classList.add('title');
    h1.textContent = 'Le Jardin Étoilé';
    h2.textContent = '"A Symphony of French Elegance"';
    content.appendChild(h1);
    content.appendChild(h2);

    const descriptions = [
        {
            heading: 'Welcome to Le Jardin Étoilé',
            text: 'Discover the pinnacle of French cuisine at Le Jardin Étoilé. Our fine dining restaurant blends sophistication, exceptional service, and culinary artistry to create an unforgettable experience.'
        },
        {
            heading: 'Experience Culinary Excellence',
            text: 'Indulge in exquisite dishes crafted with the finest ingredients, presented with artistic flair. Each plate is a celebration of French tradition and modern innovation.'
        },
        {
            heading: 'Elegance in Every Detail',
            text: 'tep into a serene, intimate setting where minimalist design and lush greenery transport you to a French garden. Enjoy an ambiance of refined charm and elegance.'
        },
        {
            heading: 'Book Your Table',
            text: 'Join us at Le Jardin Étoilé for a culinary journey that delights the senses. Reserve your table today and experience the essence of French fine dining.'
        },
    ]

    descriptions.forEach(description => {
        const h3 = document.createElement('h3');
        h3.classList.add('title');
        const p = document.createElement('p');
        p.classList.add('description');
        h3.textContent = description.heading;
        p.textContent = description.text;
        content.appendChild(h3);
        content.appendChild(p);
    })

}