const components = ['Panel', 'Slider', 'Dialog', 'Sidebar', 'Dropdown', 'Contact Form', 'Navigation', 'Popup', 'Buttons'];
let componentsContent = document.querySelector('.components__content-options')
for(let i = 0; i < components.length; i++){
    componentsContent.innerHTML += `<button class="components__option-info">${components[i]}</button>`
}