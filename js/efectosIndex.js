window.sr = ScrollReveal();

    sr.reveal('.header',{
        duration:1500,
        origin:'top',
        distance: '100px',
    });

    sr.reveal('.navegacion',{
        duration:1500,
        origin:'top',
        distance: '100px',
    });
    
    sr.reveal('.header', {
        delay: 100,
        rotate: {
            x: 0,
            y: 150,
        },
    });

    sr.reveal('.producto', {
        delay: 90,
        duration: 1100,
        rotate: {
    
            x: 0,
    
            y: 180,
    
        },
    });
