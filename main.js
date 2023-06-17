let navbar = document.querySelector(`#navbar`);
let links = document.querySelectorAll(`.nav-link`);
let logo = document.querySelector(`#logo`);

function changeNavbar(background, logoColor, color1, color2, color3){
    navbar.style.backgroundColor = background;
    logo.src =`http://127.0.0.1:5500/javascript/Appunti1/Selfwork-Presto/media/${logoColor}.png`;
    links.forEach( (link) => {
        link.style.color = color1;
        
        link.addEventListener(`mouseenter`, () =>{
            link.style.color = color2;
        })

        link.addEventListener(`mouseleave`, () =>{
            link.style.color = color3;
        })

    });
}


window.addEventListener(`scroll`,() =>{

    let scrolled = window.scrollY;

    if(window.innerWidth > 600){
        if(scrolled > 0){
            navbar.style.width = `90%`;
            changeNavbar(`var(--blck)`, `logo-g`, `var(--g)`, `var(--y)`, `var(--g)`);
        }else{
            navbar.style.width = `100%`;
            changeNavbar(`transparent`,`logo-blck`, `var(--blck)`, `var(--g)`, `var(--blck)`);
        }
    }else{
        if(scrolled > 0){
            changeNavbar(`var(--g)`, `logo-blck`, `var(--blck)`, `var(--w)`, `var(--blck)`);
        }else{
            changeNavbar(`transparent`,`logo-blck`, `var(--blck)`, `var(--g)`, `var(--blck)`);
        } 
    }

});
