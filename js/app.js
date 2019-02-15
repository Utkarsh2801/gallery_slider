var bannerCase = 1,
    bannerTimer = 5000,
    banner_image1 = document.querySelector('.image1'),
    banner_image2 = document.querySelector('.image2'),
    banner_image3 = document.querySelector('.image3'),
    banner_image4 = document.querySelector('.image4'),
    banner_image5 = document.querySelector('.image5'),
    banner_image6 = document.querySelector('.image6'),
    gallery_image1 = document.querySelector('.image-s1'),
    gallery_image2 = document.querySelector('.image-s2'),
    gallery_image3 = document.querySelector('.image-s3'),
    gallery_image4 = document.querySelector('.image-s4'),
    gallery_image5 = document.querySelector('.image-s5'),
    gallery_image6 = document.querySelector('.image-s6');

window.onload = function(){
    bannerLoop();
}


function bannerLoop(){
   
    if(bannerCase===1){
        banner_image5.style.opacity = '0';
        setTimeout(function(){
            gallery_image1.classList.remove('after-ef');
            document.querySelector('.image-s6').className = 'image-s6 after-ef';
            banner_image6.style.right = '1200px';
            banner_image1.style.right = '0px';
            banner_image2.style.right = '-1200px';
            banner_image3.style.right = '-2400px';
            banner_image4.style.right = '-3600px';
            banner_image5.style.right = '-4800px';
            banner_image5.style.zIndex = '500';
            banner_image4.style.zIndex = '800';
            banner_image3.style.zIndex = '800';
            banner_image2.style.zIndex = '800';
            banner_image1.style.zIndex = '1500';
            banner_image6.style.zIndex = '1000';
        }, 100);
        bannerCase = 2;
        setTimeout(function(){
            banner_image5.style.opacity = '1';
        }, 200);
    }
    else if(bannerCase===2){
        banner_image6.style.opacity = '0';
        setTimeout(function(){
            gallery_image1.className = 'image-s1 after-ef';
            gallery_image2.classList.remove('after-ef');
            banner_image6.style.right = '-4800px';
            banner_image1.style.right = '1200px';
            banner_image2.style.right = '0px';
            banner_image3.style.right = '-1200px';
            banner_image4.style.right = '-2400px';
            banner_image5.style.right = '-3600px';
            banner_image5.style.zIndex = '800';
            banner_image4.style.zIndex = '800';
            banner_image3.style.zIndex = '800';
            banner_image2.style.zIndex = '1500';
            banner_image1.style.zIndex = '1000';
            banner_image6.style.zIndex = '500';
        }, 100);
        bannerCase = 3;
        setTimeout(function(){
            banner_image6.style.opacity = '1';
        }, 200);
    }
    else if(bannerCase===3){
        banner_image1.style.opacity = '0';
        setTimeout(function(){
            gallery_image2.className = 'image-s2 after-ef';
            gallery_image3.classList.remove('after-ef');
            banner_image6.style.right = '-3600px';
            banner_image1.style.right = '-4800px';
            banner_image2.style.right = '1200px';
            banner_image3.style.right = '0px';
            banner_image4.style.right = '-1200px';
            banner_image5.style.right = '-2400px';
            banner_image5.style.zIndex = '800';
            banner_image4.style.zIndex = '800';
            banner_image3.style.zIndex = '1500';
            banner_image2.style.zIndex = '1000';
            banner_image1.style.zIndex = '500';
            banner_image6.style.zIndex = '800';
            }, 100);
            bannerCase = 4;
            setTimeout(function(){
                banner_image1.style.opacity = '1';
            }, 200);
    }
    
    else if(bannerCase===4){
        banner_image2.style.opacity = '0';
        setTimeout(function(){
            gallery_image3.className = 'image-s3 after-ef';
            gallery_image4.classList.remove('after-ef');
            banner_image6.style.right = '-2400px';
            banner_image1.style.right = '-3600px';
            banner_image2.style.right = '-4800px';
            banner_image3.style.right = '1200px';
            banner_image4.style.right = '0px';
            banner_image5.style.right = '-1200px';
            banner_image5.style.zIndex = '800';
            banner_image4.style.zIndex = '1500';
            banner_image3.style.zIndex = '1000';
            banner_image1.style.zIndex = '800';
            banner_image2.style.zIndex = '500';
            banner_image6.style.zIndex = '800';
        }, 100);
        bannerCase = 5;
        setTimeout(function(){
            banner_image2.style.opacity = '1';
        }, 200);
    }
    else if(bannerCase===5){
        banner_image3.style.opacity = '0';
        setTimeout(function(){
            gallery_image4.className = 'image-s4 after-ef';
            gallery_image5.classList.remove('after-ef');
            banner_image6.style.right = '-1200px';
            banner_image1.style.right = '-2400px';
            banner_image2.style.right = '-3600px';
            banner_image3.style.right = '-4800px';
            banner_image4.style.right = '1200px';
            banner_image5.style.right = '0px';
            banner_image5.style.zIndex = '1500';
            banner_image4.style.zIndex = '1000';
            banner_image3.style.zIndex = '500';
            banner_image2.style.zIndex = '800';
            banner_image1.style.zIndex = '800';
            banner_image6.style.zIndex = '800';
        }, 100);
        bannerCase = 6;
        setTimeout(function(){
            banner_image3.style.opacity = '1';
        }, 200);
    }
    else if(bannerCase===6){
        banner_image4.style.opacity = '0';
        setTimeout(function(){
            gallery_image5.className = 'image-s5 after-ef';
            gallery_image6.classList.remove('after-ef');
            banner_image6.style.right = '0px';
            banner_image1.style.right = '-1200px';
            banner_image2.style.right = '-2400px';
            banner_image3.style.right = '-3600px';
            banner_image4.style.right = '-4800px';
            banner_image5.style.right = '1200px';
            banner_image5.style.zIndex = '800';
            banner_image4.style.zIndex = '800';
            banner_image3.style.zIndex = '1500';
            banner_image2.style.zIndex = '1000';
            banner_image1.style.zIndex = '500';
            banner_image6.style.zIndex = '800';
        }, 100);
        bannerCase = 1;
        setTimeout(function(){
            banner_image4.style.opacity = '1';
        }, 200);
    }

}

function bannerLoop2(){
    if(bannerCase===1){
        banner_image4.style.opacity = '0';
        setTimeout(function(){
            gallery_image5.classList.remove('after-ef');
            gallery_image6.className = 'image-s6 after-ef';
            banner_image6.style.right = '-1200px';
            banner_image1.style.right = '-2400px';
            banner_image2.style.right = '-3600px';
            banner_image3.style.right = '-4800px';
            banner_image4.style.right = '1200px';
            banner_image5.style.right = '0px';
            banner_image5.style.zIndex = '1500';
            banner_image4.style.zIndex = '500';
            banner_image3.style.zIndex = '800';
            banner_image2.style.zIndex = '800';
            banner_image1.style.zIndex = '800';
            banner_image6.style.zIndex = '1000';
        }, 100);
        bannerCase = 6;
        setTimeout(function(){
            banner_image4.style.opacity = '1';
        }, 200);
    }
    else if(bannerCase===2){
        banner_image5.style.opacity = '0';
        setTimeout(function(){
            gallery_image6.classList.remove('after-ef');
            gallery_image1.className = 'image-s1 after-ef';
            banner_image6.style.right = '0px';
            banner_image1.style.right = '-1200px';
            banner_image2.style.right = '-2400px';
            banner_image3.style.right = '-3600px';
            banner_image4.style.right = '-4800px';
            banner_image5.style.right = '1200px';
            banner_image5.style.zIndex = '500';
            banner_image4.style.zIndex = '800';
            banner_image3.style.zIndex = '800';
            banner_image2.style.zIndex = '800';
            banner_image1.style.zIndex = '1000';
            banner_image6.style.zIndex = '1500';
        }, 100);
        bannerCase = 1;
        setTimeout(function(){
            banner_image5.style.opacity = '1';
        }, 200);
    }
    else if(bannerCase===3){
        banner_image6.style.opacity = '0';
        setTimeout(function(){
            gallery_image1.classList.remove('after-ef');
            gallery_image2.className = 'image-s2 after-ef';
            banner_image6.style.right = '1200px';
            banner_image1.style.right = '0px';
            banner_image2.style.right = '-1200px';
            banner_image3.style.right = '-2400px';
            banner_image4.style.right = '-3600px';
            banner_image5.style.right = '-4800px'
            banner_image5.style.zIndex = '800';
            banner_image4.style.zIndex = '800';
            banner_image3.style.zIndex = '800';
            banner_image2.style.zIndex = '1000';
            banner_image1.style.zIndex = '1500';
            banner_image6.style.zIndex = '500';
            }, 100);
            bannerCase = 2;
            setTimeout(function(){
                banner_image6.style.opacity = '1';
            }, 200);
    }
    
    else if(bannerCase===4){
        banner_image1.style.opacity = '0';
        setTimeout(function(){
            gallery_image2.classList.remove('after-ef');
            gallery_image3.className = 'image-s3 after-ef';
            banner_image6.style.right = '-4800px';
            banner_image1.style.right = '1200px';
            banner_image2.style.right = '0px';
            banner_image3.style.right = '-1200px';
            banner_image4.style.right = '-2400px';
            banner_image5.style.right = '-3600px';
            banner_image5.style.zIndex = '800';
            banner_image4.style.zIndex = '800';
            banner_image3.style.zIndex = '1000';
            banner_image1.style.zIndex = '500';
            banner_image2.style.zIndex = '1500';
            banner_image6.style.zIndex = '800';
        }, 100);
        bannerCase = 3;
        setTimeout(function(){
            banner_image1.style.opacity = '1';
        }, 200);
    }
    else if(bannerCase===5){
        banner_image2.style.opacity = '0';
        setTimeout(function(){
            gallery_image3.classList.remove('after-ef');
            gallery_image4.className = 'image-s4 after-ef';
            banner_image6.style.right = '-3600px';
            banner_image1.style.right = '-4800px';
            banner_image2.style.right = '1200px';
            banner_image3.style.right = '0px';
            banner_image4.style.right = '-1200px';
            banner_image5.style.right = '-2400px';
            banner_image4.style.zIndex = '1000';
            banner_image5.style.zIndex = '800';
            banner_image3.style.zIndex = '1500';
            banner_image2.style.zIndex = '500';
            banner_image1.style.zIndex = '800';
            banner_image6.style.zIndex = '800';
        }, 100);
        bannerCase = 4;
        setTimeout(function(){
            banner_image2.style.opacity = '1';
        }, 200);
    }
    else if(bannerCase===6){
        banner_image3.style.opacity = '0';
        setTimeout(function(){
            gallery_image4.classList.remove('after-ef');
            gallery_image5.className = 'image-s5 after-ef';
            banner_image6.style.right = '-2400px';
            banner_image1.style.right = '-3600px';
            banner_image2.style.right = '-4800px';
            banner_image3.style.right = '1200px';
            banner_image4.style.right = '0px';
            banner_image5.style.right = '-1200px';
            banner_image5.style.zIndex = '1000';
            banner_image4.style.zIndex = '1500';
            banner_image3.style.zIndex = '500';
            banner_image2.style.zIndex = '800';
            banner_image1.style.zIndex = '800';
            banner_image6.style.zIndex = '800';
        }, 100);
        bannerCase = 5;
        setTimeout(function(){
            banner_image3.style.opacity = '1';
        }, 200);
    }
    
}




var infinteLoop = setInterval(function(){
    bannerLoop();
}, bannerTimer);

document.querySelector('.slider').onmouseenter = function(){
    clearInterval(infinteLoop);
}

document.querySelector('.slider').onmouseleave = function(){
    infinteLoop = setInterval(function(){
        bannerLoop();
    }, bannerTimer);

}

document.querySelector('.image-selector').onmouseenter = function(){
    clearInterval(infinteLoop);
}

document.querySelector('.image-selector').onmouseleave = function(){
    infinteLoop = setInterval(function(){
        bannerLoop();
    }, bannerTimer);

}

document.querySelector('.arrow-left').onclick = function(){
    bannerLoop();
}


document.querySelector('.arrow-right').onclick = function(){
    bannerLoop2();
}

gallery_image1.onmouseover = function(){
    gallery_image1.classList.remove('after-ef');
    gallery_image6.className = 'image-s6 after-ef';
    gallery_image5.className = 'image-s5 after-ef';
    gallery_image4.className = 'image-s4 after-ef';
    gallery_image3.className = 'image-s3 after-ef';
    gallery_image2.className = 'image-s2 after-ef';
    banner_image6.style.right = '1200px';
    banner_image1.style.right = '0px';
    banner_image2.style.right = '-1200px';
    banner_image3.style.right = '-2400px';
    banner_image4.style.right = '-3600px';
    banner_image5.style.right = '-4800px';
    bannerCase=2;
}

gallery_image2.onmouseover = function(){
    gallery_image2.classList.remove('after-ef');
    gallery_image6.className = 'image-s6 after-ef';
    gallery_image5.className = 'image-s5 after-ef';
    gallery_image4.className = 'image-s4 after-ef';
    gallery_image3.className = 'image-s3 after-ef';
    gallery_image1.className = 'image-s1 after-ef';
    banner_image6.style.right = '-4800px';
    banner_image1.style.right = '1200px';
    banner_image2.style.right = '0px';
    banner_image3.style.right = '-1200px';
    banner_image4.style.right = '-2400px';
    banner_image5.style.right = '-3600px';
    bannerCase=3;
}

gallery_image3.onmouseover = function(){
    gallery_image3.classList.remove('after-ef');
    gallery_image6.className = 'image-s6 after-ef';
    gallery_image5.className = 'image-s5 after-ef';
    gallery_image4.className = 'image-s4 after-ef';
    gallery_image2.className = 'image-s2 after-ef';
    gallery_image1.className = 'image-s1 after-ef';
    banner_image6.style.right = '-3600px';
    banner_image1.style.right = '-4800px';
    banner_image2.style.right = '1200px';
    banner_image3.style.right = '0px';
    banner_image4.style.right = '-1200px';
    banner_image5.style.right = '-2400px';
    bannerCase=4;
}

gallery_image4.onmouseover = function(){
    gallery_image4.classList.remove('after-ef');
    gallery_image6.className = 'image-s6 after-ef';
    gallery_image5.className = 'image-s5 after-ef';
    gallery_image3.className = 'image-s3 after-ef';
    gallery_image2.className = 'image-s2 after-ef';
    gallery_image1.className = 'image-s1 after-ef';
    banner_image6.style.right = '-2400px';
    banner_image1.style.right = '-3600px';
    banner_image2.style.right = '-4800px';
    banner_image3.style.right = '1200px';
    banner_image4.style.right = '0px';
    banner_image5.style.right = '-1200px';
    bannerCase=5;
}

gallery_image5.onmouseover = function(){
    gallery_image5.classList.remove('after-ef');
    gallery_image6.className = 'image-s6 after-ef';
    gallery_image4.className = 'image-s4 after-ef';
    gallery_image3.className = 'image-s3 after-ef';
    gallery_image2.className = 'image-s2 after-ef';
    gallery_image1.className = 'image-s1 after-ef';
    banner_image6.style.right = '-1200px';
    banner_image1.style.right = '-2400px';
    banner_image2.style.right = '-3600px';
    banner_image3.style.right = '-4800px';
    banner_image4.style.right = '1200px';
    banner_image5.style.right = '0px';
    bannerCase=6;
}

gallery_image6.onmouseover = function(){
    gallery_image6.classList.remove('after-ef');
    gallery_image5.className = 'image-s5 after-ef';
    gallery_image4.className = 'image-s4 after-ef';
    gallery_image3.className = 'image-s3 after-ef';
    gallery_image2.className = 'image-s2 after-ef';
    gallery_image1.className = 'image-s1 after-ef';
    banner_image6.style.right = '0px';
    banner_image1.style.right = '-1200px';
    banner_image2.style.right = '-2400px';
    banner_image3.style.right = '-3600px';
    banner_image4.style.right = '-4800px';
    banner_image5.style.right = '1200px';
    bannerCase=6;
}


