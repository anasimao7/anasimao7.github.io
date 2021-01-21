$(document).ready(function(){
    //Scroll
    let navBtn = $('.nav-item') //identifica qual seção foi selecionada

    let bannerScetion = $('#home')
    let aboutScetion = $('#about-area')
    let projectScetion = $('#project-area')
    let contactScetion = $('#contact-area')

    let scrollTo = '';

    $(navBtn).click(function(){
        let btnId = $(this).attr('id') //identifica o id do botão selecionado
        console.log(btnId)
      
        switch(btnId){
            case 'about-menu' :
                scrollTo = aboutScetion
                break
            case 'projects-menu':
                scrollTo = projectScetion
                break
            case 'contact-menu':
                scrollTo = contactScetion
                break
            default:
                scrollTo = bannerScetion
                break
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500)
    })
})