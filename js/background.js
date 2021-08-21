window.onload = function()
{
    Particles.init(
    {
        selector: '.intro-background',
        connectParticles: true,
        color: ['#FF0000', '#FFA500'],
        
        
        responsive: [
            {
            
                breakpoint: 768,
                options: 
                {
                    maxParticles: 75,
                    connectParticles: true
                }
            }, 
            {
                breakpoint: 425,
                options: 
                {
                    maxParticles: 50,
                    connectParticles: true
                }
            }, 
            {
                breakpoint: 320,
                options: {
                    maxParticles: 15,
                    connectParticles: true

            }
            }
        ]
    });
}