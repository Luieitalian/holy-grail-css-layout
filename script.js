function toggleNav()
{
    if(document.querySelector('nav').style.display === 'flex')
    {
        document.querySelector('.grid').classList.remove('grid-expanded');
        document.querySelector('nav').style.display = 'none';
    }
    else
    {
        document.querySelector('.grid').classList.add('grid-expanded');
        document.querySelector('nav').style.display = 'flex';
    }
    
}