let clientsObjArr = [];

const DOMtableBody = document.getElementById('table-body');

const serverLink = 'http://localhost:3000';

async function serverAddClient(obj) {
    let response = await fetch(serverLink + '/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
    })

    let data = await response.json();

    return data;
}

async function serverGetClient() {
    let response = await fetch(serverLink + '/api/clients');
    let data = await response.json();
    return data;
}

async function serverDelClient(obj) {
    let response = await fetch(serverLink + `/api/clients/${obj.id}`, {
        method: "DELETE",
    })

    const data = await response.json();

    return data;
}

async function serverUpdateClient(obj) {
    let response = await fetch(serverLink + `/api/clients/${obj.id}`, {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    });

    const data = await response.json();

    return data;
}

async function serverSearchClient(inputValue) {
    let response = await fetch(serverLink + `/api/clients?search=${inputValue}`);

    const data = await response.json();

    return data;
}

const vkIcon = `<svg class="contacts__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
</g>
</svg>
`;
const facebookIcon = `<svg class="contacts__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>
</g>
</svg>
`;
const telIcon = `<svg class="contacts__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<circle cx="8" cy="8" r="8" fill="#9873FF"/>
<path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
</g>
</svg>
`;
const emailIcon = `<svg class="contacts__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
</svg>
`;
const contactIcon = `<svg class="contacts__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
</g>
</svg>
`;

function formatHTMLDate(date) {
    let stringToDate = new Date(date);

    let dd = stringToDate.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = stringToDate.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = stringToDate.getFullYear();

    let time = `${stringToDate.getHours()}:${stringToDate.getMinutes()}`;

    return `<span class="body__date">${dd}.${mm}.${yy}</span> <span class="body__time">${time}</span>`;
}

let contactsIdCounter = 0;
let contactsIdCounterEdit = 0;

function updateContactIds() {
    const contactsInputBlocks = document.querySelectorAll('.edit__inputs');

    contactsInputBlocks.forEach((block, index) => {
        const selectElement = block.querySelector('.contacts__select');
        const contactsInput = block.querySelector('.contacts__input');
        const deleteBtn = block.querySelector('.contacts__del');

        selectElement.id = `contacts-select-edit-${index}`;
        contactsInput.id = `contacts-input-edit-${index}`;
        deleteBtn.id = `contacts-del-${index}`;
        contactsIdCounterEdit = index + 1;
    });
}

const DOMeditForm = document.getElementById('edit-form');

function addClient(clObj) {
    const DOMclientsElement = document.createElement('tr');
    const DOMclientsID = document.createElement('td');
    const DOMclientsName = document.createElement('td');
    const DOMdateOfCreation = document.createElement('td');
    const DOMlastChanges = document.createElement('td');
    const DOMcontactsCell = document.createElement('td');
    const DOMcontactsCellBlock = document.createElement('div');
    const DOMactionsCell = document.createElement('td');
    const DOMactionsBtnContainer = document.createElement('div');
    const DOMeditBtn = document.createElement('button');
    const DOMdeleteBtn = document.createElement('button');

    DOMclientsElement.classList.add('body__row');
    DOMclientsID.textContent = clObj.id;
    DOMclientsName.textContent = `${clObj.surname} ${clObj.name} ${clObj.lastName}`;
    DOMdateOfCreation.innerHTML = formatHTMLDate(clObj.createdAt);
    DOMlastChanges.innerHTML = formatHTMLDate(clObj.updatedAt);
    DOMeditBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7" clip-path="url(#clip0_121_2280)">
    <path d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z" fill="#9873FF"/>
    </g>
    <defs>
    <clipPath id="clip0_121_2280">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    Изменить
    `;

    DOMdeleteBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7" clip-path="url(#clip0_121_2305)">
    <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#F06A4D"/>
    </g>
    <defs>
    <clipPath id="clip0_121_2305">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    Удалить
    `
    DOMactionsBtnContainer.classList.add('actions__container');
    DOMeditBtn.classList.add('btn-reset');
    DOMdeleteBtn.classList.add('btn-reset');
    DOMclientsID.classList.add('body__first');
    DOMclientsID.classList.add('body__id');
    DOMeditBtn.classList.add('body__edit');
    DOMdeleteBtn.classList.add('body__del');
    DOMclientsName.classList.add('body__name');
    DOMdateOfCreation.classList.add('body__createdAt');
    DOMlastChanges.classList.add('body__updatedAt');
    DOMcontactsCell.classList.add('body__contactsCell');
    DOMcontactsCellBlock.classList.add('body__contacts');
    DOMactionsCell.classList.add('body__actions');
    DOMcontactsCell.append(DOMcontactsCellBlock);
    DOMactionsBtnContainer.append(DOMeditBtn, DOMdeleteBtn);
    DOMactionsCell.append(DOMactionsBtnContainer);
    DOMclientsElement.append(DOMclientsID, DOMclientsName, DOMdateOfCreation, DOMlastChanges, DOMcontactsCell, DOMactionsCell);

    if (clObj.contacts.length <= 4) {
        clObj.contacts.forEach(contact => {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip-content');
            tooltip.textContent = `${contact.type}: ${contact.value}`;
            let iconContainer = document.createElement('div');
            iconContainer.classList.add('tooltip-container')
            switch (contact.type) {
                case 'Телефон':
                    iconContainer.innerHTML = telIcon;
                    tooltip.textContent = `${contact.value}`
                    break;

                case 'Доп.Телефон':
                    iconContainer.innerHTML = telIcon;
                    tooltip.textContent = `${contact.value}`
                    break;

                case 'Email':
                    iconContainer.innerHTML = emailIcon;
                    tooltip.textContent = `${contact.value}`
                    break;

                case 'VK':
                    iconContainer.innerHTML = vkIcon;
                    tooltip.textContent = `${contact.value}`
                    break;

                case 'Facebook':
                    iconContainer.innerHTML = facebookIcon;
                    tooltip.textContent = `${contact.value}`
                    break;

                case 'Telegram':
                    iconContainer.innerHTML = contactIcon;
                    break;

                case 'Instagram':
                    iconContainer.innerHTML = contactIcon;
                    break;

                case 'Whatsapp':
                    iconContainer.innerHTML = contactIcon;
                    break;

                case 'Twitter':
                    iconContainer.innerHTML = contactIcon;
                    break;
            }
            iconContainer.append(tooltip);
            DOMcontactsCellBlock.append(iconContainer);
        });
    } else {
        const DOMcontactsMoreBtn = document.createElement('button');
        DOMcontactsMoreBtn.classList.add('body__more');
        DOMcontactsMoreBtn.classList.add('btn-reset');
        DOMcontactsMoreBtn.textContent = `+${clObj.contacts.length - 4}`;
        clObj.contacts.slice(0, 4).forEach(contact => {
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip-content');
            tooltip.textContent = `${contact.type}: ${contact.value}`
            let iconContainer = document.createElement('div');
            iconContainer.classList.add('tooltip-container')
            switch (contact.type) {
                case 'Телефон':
                    iconContainer.innerHTML = telIcon;
                    tooltip.textContent = `${contact.value}`
                    break;

                case 'Доп.Телефон':
                    iconContainer.innerHTML = telIcon;
                    tooltip.textContent = `${contact.value}`
                    break;

                case 'Email':
                    iconContainer.innerHTML = emailIcon;
                    tooltip.textContent = `${contact.value}`
                    break;

                case 'VK':
                    iconContainer.innerHTML = vkIcon;
                    tooltip.textContent = `${contact.value}`
                    break;

                case 'Facebook':
                    iconContainer.innerHTML = facebookIcon;
                    tooltip.textContent = `${contact.value}`
                    break;

                case 'Telegram':
                    iconContainer.innerHTML = contactIcon;
                    break;

                case 'Instagram':
                    iconContainer.innerHTML = contactIcon;
                    break;

                case 'Whatsapp':
                    iconContainer.innerHTML = contactIcon;
                    break;

                case 'Twitter':
                    iconContainer.innerHTML = contactIcon;
                    break;
            }
            iconContainer.append(tooltip);
            DOMcontactsCellBlock.append(iconContainer);
        });
        DOMcontactsCellBlock.append(DOMcontactsMoreBtn);
        DOMcontactsMoreBtn.addEventListener('click', () => {
            DOMcontactsCellBlock.innerHTML = '';

            clObj.contacts.forEach(contact => {
                let iconContainer = document.createElement('div');
                iconContainer.classList.add('tooltip-container');
                iconContainer.classList.add('tooltip-container-mb');
                const tooltip = document.createElement('div');
                tooltip.classList.add('tooltip-content');
                tooltip.textContent = `${contact.type}: ${contact.value}`
                switch (contact.type) {
                    case 'Телефон':
                        iconContainer.innerHTML = telIcon;
                        tooltip.textContent = `${contact.value}`
                        break;

                    case 'Доп.Телефон':
                        iconContainer.innerHTML = telIcon;
                        tooltip.textContent = `${contact.value}`
                        break;

                    case 'Email':
                        iconContainer.innerHTML = emailIcon;
                        tooltip.textContent = `${contact.value}`
                        break;

                    case 'VK':
                        iconContainer.innerHTML = vkIcon;
                        tooltip.textContent = `${contact.value}`
                        break;

                    case 'Facebook':
                        iconContainer.innerHTML = facebookIcon;
                        tooltip.textContent = `${contact.value}`
                        break;

                    case 'Telegram':
                        iconContainer.innerHTML = contactIcon;
                        break;

                    case 'Instagram':
                        iconContainer.innerHTML = contactIcon;
                        break;

                    case 'Whatsapp':
                        iconContainer.innerHTML = contactIcon;
                        break;

                    case 'Twitter':
                        iconContainer.innerHTML = contactIcon;
                        break;
                };
                iconContainer.append(tooltip);
                DOMcontactsCellBlock.append(iconContainer);
            });
        });
    }

    DOMdeleteBtn.addEventListener('click', async function () {
        DOMclientsElement.remove();
        const index = clientsObjArr.findIndex(item => item.id === clObj.id);
        if (index !== -1) {
            clientsObjArr.splice(index, 1);
        }
        await serverDelClient(clObj);
    });

    DOMeditBtn.addEventListener('click', function () {
        const DOMformEdit = document.getElementById('form-block-edit');
        const formContainer = document.getElementById('form-container');
        DOMformEdit.classList.add('main__form--active');
        DOMformEdit.classList.remove('main__form--disabled');
        formContainer.classList.add('form__container--active');

        document.getElementById('edit-id-title').textContent = `Id: ${clObj.id}`;
        document.getElementById('edit-surname-inp').value = clObj.surname;
        document.getElementById('edit-name-inp').value = clObj.name;
        document.getElementById('edit-lastName-inp').value = clObj.lastName;

        for (let contact of clObj.contacts) {
            const contactsBlock = document.getElementById('edit-contacts-block');
            const contactsInputBlock = document.createElement('div');
            contactsInputBlock.classList.add('inputs__block');
            contactsInputBlock.classList.add('edit__inputs');
            const selectElement = document.createElement('select');
            selectElement.classList.add('contacts__select');
            selectElement.name = 'contacts-select';
            selectElement.id = `contacts-select-edit-${contactsIdCounterEdit}`;
            const options = [
                { value: 'Телефон', text: 'Телефон' },
                { value: 'Доп.Телефон', text: 'Доп.Телефон' },
                { value: 'Email', text: 'Email' },
                { value: 'VK', text: 'VK' },
                { value: 'Facebook', text: 'Facebook' },
                { value: 'Telegram', text: 'Telegram' },
                { value: 'Whatsapp', text: 'Whatsapp' },
                { value: 'Instagram', text: 'Instagram' },
                { value: 'Twitter', text: 'Twitter' }
            ];

            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.text;
                selectElement.appendChild(optionElement);
            });

            const contactsInput = document.createElement('input');
            contactsInput.classList.add('contacts__input');
            contactsInput.placeholder = 'Введите данные контакта';
            contactsInput.id = `contacts-input-edit-${contactsIdCounterEdit}`

            const DOMdeleteContactBtn = document.createElement('button');
            DOMdeleteContactBtn.classList.add('btn-reset');
            DOMdeleteContactBtn.classList.add('contacts__del');
            DOMdeleteContactBtn.id = `contacts-del-${contactsIdCounter}`
            DOMdeleteContactBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_121_1083)">
            <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>
            </g>
            <defs>
            <clipPath id="clip0_121_1083">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            `

            DOMdeleteContactBtn.addEventListener('click', (e) => {
                e.preventDefault();
                contactsInputBlock.remove();
                updateContactIds();
            })

            contactsInputBlock.append(selectElement);
            contactsInputBlock.append(contactsInput);
            contactsInputBlock.append(DOMdeleteContactBtn);
            contactsBlock.append(contactsInputBlock);
            contactsInput.value = contact.value;
            selectElement.value = contact.type;
            contactsIdCounterEdit++;
        };

        const editFormBlock = document.getElementById('form-block-edit');

        DOMeditForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            clObj.surname = document.getElementById('edit-surname-inp').value;
            clObj.name = document.getElementById('edit-name-inp').value;
            clObj.lastName = document.getElementById('edit-lastName-inp').value;

            clObj.contacts.length = 0;

            for (let i = 0; i < document.querySelectorAll('.edit__inputs').length; i++) {
                if (document.getElementById(`contacts-input-edit-${i}`)) {
                    let newContactObj = {
                        type: document.getElementById(`contacts-select-edit-${i}`).value,
                        value: document.getElementById(`contacts-input-edit-${i}`).value
                    }

                    clObj.contacts.push(newContactObj);
                }
            }

            let updatedData = await serverUpdateClient(clObj);
            clObj.updatedAt = formatHTMLDate(updatedData.updatedAt);

            const formContainer = document.getElementById('form-container');
            formContainer.classList.remove('form__container--active');
            editFormBlock.classList.remove('main__form--active');
            editFormBlock.classList.add('main__form--disabled');

            document.querySelectorAll('.inputs__block').forEach(inputs => {
                inputs.remove();
            });

            contactsIdCounterEdit = 0;

            renderClientsTable(clientsObjArr);
        });
    });

    return DOMclientsElement;
}

const formBlock = document.getElementById('form-block');
const addClientBtn = document.getElementById('add-client-btn');
addClientBtn.addEventListener('click', function () {
    const formContainer = document.getElementById('form-container');
    formContainer.classList.add('form__container--active');
    formBlock.classList.add('main__form--active');
    formBlock.classList.remove('main__form--disabled');
});

const closeFormBtn = document.getElementById('form-close');
closeFormBtn.addEventListener('click', function () {
    const formContainer = document.getElementById('form-container');
    const inputsBlocks = document.querySelectorAll('.inputs__block');
    formContainer.classList.remove('form__container--active');
    formBlock.classList.remove('main__form--active');
    formBlock.classList.add('main__form--disabled');

    inputsBlocks.forEach(inputBlock => {
        inputBlock.remove();
    });
});

function renderClientsTable(clientArr) {
    let copyArr = [...clientArr];

    copyArr = copyArr.sort(function (a, b) {
        let sort = a[sortFlag] < b[sortFlag];

        if (dirFlag == false) sort = a[sortFlag] > b[sortFlag]

        if (sort) return -1
    })

    DOMtableBody.innerHTML = '';

    for (const clObj of copyArr) {
        const DOMnewTr = addClient(clObj);
        DOMtableBody.append(DOMnewTr);
    }
}

renderClientsTable(clientsObjArr);

window.addEventListener('DOMContentLoaded', async function () {
    let serverData = await serverGetClient();

    if (serverData !== null) {
        clientsObjArr = serverData;
    }

    renderClientsTable(clientsObjArr);
});

const form = document.getElementById('add-form');
const addContactBtn = document.getElementById('add-contact');

addContactBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const contactsBlock = document.getElementById('contacts-block');
    const contactsInputBlock = document.createElement('div');
    contactsInputBlock.classList.add('inputs__block');
    contactsInputBlock.id = `contacts-input-block-${contactsIdCounter}`
    const selectElement = document.createElement('select');
    selectElement.classList.add('contacts__select')
    selectElement.name = 'contacts-select';
    selectElement.id = `contacts-select-${contactsIdCounter}`

    const options = [
        { value: 'Телефон', text: 'Телефон' },
        { value: 'Доп.Телефон', text: 'Доп.Телефон' },
        { value: 'Email', text: 'Email' },
        { value: 'VK', text: 'VK' },
        { value: 'Facebook', text: 'Facebook' },
        { value: 'Telegram', text: 'Telegram' },
        { value: 'Whatsapp', text: 'Whatsapp' },
        { value: 'Instagram', text: 'Instagram' },
        { value: 'Twitter', text: 'Twitter' }
    ];

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        selectElement.appendChild(optionElement);
    });

    const DOMdelContactBtn = document.createElement('button');
    DOMdelContactBtn.classList.add('btn-reset');
    DOMdelContactBtn.classList.add('contacts__del');
    DOMdelContactBtn.id = `contacts-del-${contactsIdCounter}`
    DOMdelContactBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_121_1083)">
        <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>
        </g>
        <defs>
        <clipPath id="clip0_121_1083">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    `;

    DOMdelContactBtn.addEventListener('click', () => {
        contactsInputBlock.remove();
        contactsIdCounter = 0;
    })

    const contactsInput = document.createElement('input');
    contactsInput.classList.add('contacts__input');
    contactsInput.placeholder = 'Введите данные контакта';
    contactsInput.id = `contacts-input-${contactsIdCounter}`
    contactsIdCounter++;

    contactsInputBlock.append(selectElement);
    contactsInputBlock.append(contactsInput);
    contactsInputBlock.append(DOMdelContactBtn);
    contactsBlock.append(contactsInputBlock);
});

const DOMeditAddContact = document.getElementById('edit-add-contact');

DOMeditAddContact.addEventListener('click', (e) => {
    e.preventDefault();
    const contactsBlock = document.getElementById('edit-contacts-block');
    const contactsInputBlock = document.createElement('div');
    contactsInputBlock.classList.add('inputs__block');
    contactsInputBlock.classList.add('edit__inputs');
    contactsInputBlock.id = `contacts-input-edit-block-${contactsIdCounterEdit}`
    const selectElement = document.createElement('select');
    selectElement.name = 'contacts-select';
    selectElement.classList.add('contacts__select');
    selectElement.id = `contacts-select-edit-${contactsIdCounterEdit}`

    const options = [
        { value: 'Телефон', text: 'Телефон' },
        { value: 'Доп.Телефон', text: 'Доп.Телефон' },
        { value: 'Email', text: 'Email' },
        { value: 'VK', text: 'VK' },
        { value: 'Facebook', text: 'Facebook' },
        { value: 'Telegram', text: 'Telegram' },
        { value: 'Whatsapp', text: 'Whatsapp' },
        { value: 'Instagram', text: 'Instagram' },
        { value: 'Twitter', text: 'Twitter' }
    ];

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        selectElement.appendChild(optionElement);
    });

    const DOMdelContactBtn = document.createElement('button');
    DOMdelContactBtn.classList.add('btn-reset');
    DOMdelContactBtn.classList.add('contacts__del');
    DOMdelContactBtn.id = `contacts-del-${contactsIdCounterEdit}`
    DOMdelContactBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_121_1083)">
        <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>
        </g>
        <defs>
        <clipPath id="clip0_121_1083">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    `;

    DOMdelContactBtn.addEventListener('click', () => {
        contactsInputBlock.remove();
        contactsIdCounterEdit = 0
        updateContactIds();
    })

    const contactsInput = document.createElement('input');
    contactsInput.classList.add('contacts__input');
    contactsInput.placeholder = 'Введите данные контакта';
    contactsInput.id = `contacts-input-edit-${contactsIdCounterEdit}`
    contactsIdCounterEdit++;

    contactsInputBlock.append(selectElement);
    contactsInputBlock.append(contactsInput);
    contactsInputBlock.append(DOMdelContactBtn);
    contactsBlock.append(contactsInputBlock);
})

function validInputData() {
    if (document.getElementById('name-inp').value.trim() === '' || document.getElementById('lastName-inp').value.trim() === '' || document.getElementById('surname-inp').value.trim() === '') {
        const DOMerrorMessage = document.createElement('p');

        const DOMformFioBlock = document.getElementById('form-main');

        DOMerrorMessage.classList.add('error-message-p');
        DOMerrorMessage.classList.add('p-reset');
        DOMerrorMessage.id = 'form-input-error-message';
        DOMerrorMessage.textContent = 'Введите данные';

        DOMformFioBlock.append(DOMerrorMessage);
    }
}

validInputData();

document.getElementById('name-inp').addEventListener('input', function () {
    if (document.getElementById('form-input-error-message')) {
        document.getElementById('form-input-error-message').remove();
    }
    validInputData();
});

document.getElementById('surname-inp').addEventListener('input', function () {
    if (document.getElementById('form-input-error-message')) {
        document.getElementById('form-input-error-message').remove();
    }
    validInputData();
});

document.getElementById('lastName-inp').addEventListener('input', function () {
    if (document.getElementById('form-input-error-message')) {
        document.getElementById('form-input-error-message').remove();
    }
    validInputData();
});

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (document.getElementById('form-input-error-message')) {
        return;
    }

    let newClientObj = {
        name: document.getElementById('name-inp').value,
        surname: document.getElementById('surname-inp').value,
        lastName: document.getElementById('lastName-inp').value,
        contacts: [],
    }

    const formContainer = document.getElementById('form-container');
    const inputsBlocks = document.querySelectorAll('.inputs__block');

    for (let i = 0; i < inputsBlocks.length; i++) {
        let selectElement = document.getElementById(`contacts-select-${i}`);
        let contactsInput = document.getElementById(`contacts-input-${i}`);

        let contactsNewObj = {
            type: selectElement.value,
            value: contactsInput.value
        }

        newClientObj.contacts.push(contactsNewObj);
    }

    let serverDataObj = await serverAddClient(newClientObj);

    document.getElementById('name-inp').value = '';
    document.getElementById('lastName-inp').value = '';
    document.getElementById('surname-inp').value = '';
    inputsBlocks.forEach(inputBlock => {
        inputBlock.remove();
    });

    clientsObjArr.push(serverDataObj);
    formBlock.classList.remove('main__form--active');
    formBlock.classList.add('main__form--disabled');
    formContainer.classList.remove('form__container--active');
    renderClientsTable(clientsObjArr);
    contactsIdCounter = 0;
});

document.getElementById('edit-form-close').addEventListener('click', function () {
    const formContainer = document.getElementById('form-container');
    const inputsBlocks = document.querySelectorAll('.inputs__block');
    const DOMformEdit = document.getElementById('form-block-edit');
    formContainer.classList.remove('form__container--active');
    DOMformEdit.classList.remove('main__form--active');
    DOMformEdit.classList.add('main__form--disabled');

    inputsBlocks.forEach(inputBlock => {
        inputBlock.remove();
    });
});

const DOMfioSortBtn = document.getElementById('sort-fio');
const DOMidSortBtn = document.getElementById('sort-id');
const DOMcreatedAtSortBtn = document.getElementById('sort-createdAt');
const DOMupdatedAtSortBtn = document.getElementById('sort-updatedAt');

let sortFlag = 'id';
dirFlag = true;
DOMidSortBtn.classList.add('head__btn--active');

DOMfioSortBtn.addEventListener('click', function () {
    const activeBtn = document.querySelector('.head__btn--active');
    const sortArrow = document.getElementById('fio-sort-arrow');
    const letterDirection = document.getElementById('fio-sort-letters');
    activeBtn.classList.remove('head__btn--active');
    this.classList.add('head__btn--active');
    sortFlag = 'surname';
    dirFlag = !dirFlag;
    if (dirFlag === true) {
        sortArrow.classList.add('head__sort--active');
        letterDirection.textContent = 'Я-А';
    } else {
        sortArrow.classList.remove('head__sort--active');
        letterDirection.textContent = 'А-Я';
    }
    renderClientsTable(clientsObjArr);
});

DOMidSortBtn.addEventListener('click', function () {
    const activeBtn = document.querySelector('.head__btn--active');
    const sortArrow = document.getElementById('id-sort-arrow');
    activeBtn.classList.remove('head__btn--active');
    this.classList.add('head__btn--active');
    sortFlag = 'id';
    dirFlag = !dirFlag
    if (dirFlag === true) {
        sortArrow.classList.add('head__sort--active');
    } else {
        sortArrow.classList.remove('head__sort--active');
    }
    renderClientsTable(clientsObjArr);
});

DOMcreatedAtSortBtn.addEventListener('click', function () {
    const activeBtn = document.querySelector('.head__btn--active');
    const sortArrow = document.getElementById('createdAt-sort-arrow');
    activeBtn.classList.remove('head__btn--active');
    this.classList.add('head__btn--active');
    sortFlag = 'createdAt';
    dirFlag = !dirFlag
    if (dirFlag === true) {
        sortArrow.classList.add('head__sort--active');
    } else {
        sortArrow.classList.remove('head__sort--active');
    }
    renderClientsTable(clientsObjArr);
});

DOMupdatedAtSortBtn.addEventListener('click', function () {
    const activeBtn = document.querySelector('.head__btn--active');
    const sortArrow = document.getElementById('updatedAt-sort-arrow');
    activeBtn.classList.remove('head__btn--active');
    this.classList.add('head__btn--active');
    sortFlag = 'updatedAt';
    dirFlag = !dirFlag;
    if (dirFlag === true) {
        sortArrow.classList.add('head__sort--active');
    } else {
        sortArrow.classList.remove('head__sort--active');
    }
    renderClientsTable(clientsObjArr);
});

const DOMsearch = document.getElementById('crm-search');

let searchTimer;

DOMsearch.addEventListener('input', async function () {
    clearTimeout(searchTimer);

    searchTimer = setTimeout(async () => {
        let searchData = await serverSearchClient(this.value);

        if (searchData.length !== 0) {
            clientsObjArr = searchData;
            renderClientsTable(clientsObjArr);
        } else {
            let serverData = await serverGetClient();

            clientsObjArr = serverData;
            renderClientsTable(clientsObjArr);
        }
    }, 300)
})
