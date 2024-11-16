function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento que será executado quando o DOM estiver completamente carregado.
    const swiper = new Swiper('.swiper', {
        // Cria uma nova instância do Swiper (carrossel), associada ao contêiner com a classe 'swiper'.
        direction: 'horizontal',
        // Define a direção de transição dos slides como horizontal.
        loop: false,
        // Define que o carrossel não irá repetir os slides (não fará looping).
        scrollbar: {
            el: '.swiper-scrollbar',  // Adiciona uma barra de rolagem, caso necessário
            hide: true,
          },
        pagination: {
            el: '.swiper-pagination'
            // Configura a paginação (indicadores de slide) utilizando o seletor '.swiper-pagination'.
        },

        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
            // Define os botões de navegação para avançar ('.swiper-button-next') e retroceder ('.swiper-button-prev') os slides.
        }
    });

    document.addEventListener('keydown', function (event) {

        if(event.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if(event.key === 'ArrowRight') {
            swiper.slideNext();
        }
    });

    const gameInput = document.getElementById('gameInput');
    // Seleciona o elemento de entrada de texto com o ID 'gameInput'.

    gameInput.addEventListener('keypress', function (event){
        // Adiciona um evento que será disparado quando uma tecla for pressionada no campo de entrada.
        if(event.key === 'Enter'){
            // Verifica se a tecla pressionada foi 'Enter'.
            let searchGame = gameInput.value.trim().toUpperCase();
            // Obtém o valor do campo de entrada, remove espaços em branco nas extremidades e converte para maiúsculas.

            switch(searchGame){
                case 'MARIO':
                    swiper.slideTo(0);
                    // Se o valor digitado for 'MARIO', move para o primeiro slide (índice 0).
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    // Se o valor digitado for 'POKEMON', move para o segundo slide (índice 1).
                    break;
                case 'ZELDA':
                    swiper.slideTo(2);
                    // Se o valor digitado for 'ZELDA', move para o terceiro slide (índice 2).
                    break;
                default:
                    alert('Jogo não foi encontrado');
                    // Se o valor não corresponder a nenhum dos casos, exibe um alerta informando que o jogo não foi encontrado.
                    break;
            }
        }
    });
});