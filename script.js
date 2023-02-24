const navbar = document.querySelector('nav');
navbar.style.zIndex = '-1';
function toggleNav()
{
    if(navbar.style.zIndex === '-1')
    {
        navbar.style.zIndex = '2';
    }
    else
    {
        navbar.style.zIndex = '-1';
    }
}