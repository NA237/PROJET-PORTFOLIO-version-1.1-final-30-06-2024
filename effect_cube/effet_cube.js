const swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    autoplay: {
      delay: 1500, // Définir un délai de 2 secondes
      disableOnInteraction: false, // Permettre à l'autoplay de continuer après une interaction utilisateur
    },
  });