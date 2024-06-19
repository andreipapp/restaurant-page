export default function loadContact() {
    const contact = document.createElement('div');
    const content = document.getElementById('content');
    content.classList.add('content-menu-contact');

    content.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    h1.classList.add('title');
    content.appendChild(h1);


    const information = [
        {
            title: 'How to get in touch?',
            description: 'Have questions or need assistance? Our team is here to help! Reach out to us via phone or email, and we will get back to you as soon as possible.'
        },
        {
            title: 'Address',
            description: '123 Fifth Av., New York, NY 10160, USA'
        },
        {
            title: 'Phone Number',
            description: '+1 910-626-85255'
        },
        {
            title: 'Email Address',
            description: 'contact@me.com'
        }
    ]
    information.forEach(info => {
        const h3 = document.createElement('h3');
        h3.classList.add('title');
        const p = document.createElement('p');
        p.classList.add('description');
        h3.textContent = info.title;
        p.textContent = info.description;
        contact.appendChild(h3);
        contact.appendChild(p);
    })
    content.appendChild(contact);
}