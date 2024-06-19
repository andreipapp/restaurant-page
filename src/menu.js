export default function loadMenu() {
    const content = document.getElementById('content');
    const menu = document.createElement('div');
    content.innerHTML = '';
    const dishes = [
        {
            name: 'Foie Gras Terrine',
            description: 'Served with a fig compote and toasted brioche.'
        },
        {
            name: 'Coq au Vin',
            description: 'Braised chicken in red wine with mushrooms, onions, and bacon.'
        },
        {
            name: 'Boeuf Bourguignon',
            description: 'Slow-cooked beef in red wine sauce with carrots, onions, and mushrooms.'
        },
        {
            name: 'Bouillabaisse',
            description: 'Traditional Provençal fish stew with a variety of seafood, served with rouille sauce and crostini.'
        },
        {
            name: 'Crème Brûlée',
            description: 'Classic vanilla custard topped with a caramelized sugar crust.'
        },
        {
            name: 'Tarte Tatin',
            description: 'Caramelized upside-down apple tart with a scoop of vanilla ice cream.'
        },
    ]
    dishes.forEach(dish => {
        const name = document.createElement('h3');
        const description = document.createElement('p');
        name.textContent = dish.name;
        description.textContent = dish.description;
        menu.appendChild(name);
        menu.appendChild(description);
    })
    content.appendChild(menu);
}