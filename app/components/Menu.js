export function Menu(){
    const $menu=document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML=`
        <a href="#/home" class="">Home</a>
        <span></span>
        <a href="#/search" class="">Búsqueda</a>
        <span></span>
        <a href="#/contacto" class="">Contacto</a>
        <span></span>
        <a href="https://aprendejavascript.org"  target="_blank" rel="noopener">Aprende JS </a>
    `;  
    return $menu;
}