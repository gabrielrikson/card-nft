    const img     = document.querySelector('.img');
    const overlay = document.querySelector('.overlay');

    img.addEventListener('mouseover',function(){
        overlay.style.opacity = '1';
        overlay.style.transition = '.2s';
    });
    img.addEventListener('mouseout',function(){
        overlay.style.opacity = '0';
    });
