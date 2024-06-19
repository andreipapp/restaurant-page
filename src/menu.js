export default function loadMenu() {
    const content = document.getElementById('content');
    content.classList.add('content-load');
    const menu = document.createElement('div');
    menu.classList.add('content-menu')
    content.innerHTML = '';
    const dishes = [
        {
            name: 'Foie Gras Terrine',
            description: 'Served with a fig compote and toasted brioche.',
            src: './imgs/foie-gras.jpg'
        },
        {
            name: 'Coq au Vin',
            description: 'Braised chicken in red wine with mushrooms, onions, and bacon.',
            src: './imgs/coq-au-vin.jpeg'
        },
        {
            name: 'Boeuf Bourguignon',
            description: 'Slow-cooked beef in red wine sauce with carrots, onions, and mushrooms.',
            src: './imgs/beef.jpg'
        },
        {
            name: 'Bouillabaisse',
            description: 'Traditional Provençal fish stew with a variety of seafood, served with rouille sauce and crostini.',
            src: './imgs/boulll.jpeg'
        },
        {
            name: 'Crème Brûlée',
            description: 'Classic vanilla custard topped with a caramelized sugar crust.',
            src: './imgs/creme.jpg'
        },
        {
            name: 'Tarte Tatin',
            description: 'Caramelized upside-down apple tart with a scoop of vanilla ice cream.',
            src: './imgs/tarte.jpg'
        },
    ]
    dishes.forEach(dish => {
        const card = document.createElement('div');
        card.classList.add('card');
        const name = document.createElement('h3');
        name.classList.add('title');
        const description = document.createElement('p');
        description.classList.add('description');
        const img = document.createElement('img');
        img.src = dish.src;
        img.onerror = () => console.error(`Failed to load image: ${dish.src}`);
        name.textContent = dish.name;
        description.textContent = dish.description;
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(description);
        menu.appendChild(card);
    })
    content.appendChild(menu);
}