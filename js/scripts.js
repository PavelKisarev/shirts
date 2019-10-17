(function(){
    $('.amount-plus').on('click',function(){
        let inputBLock = $(this).siblings('.amount-input');
        let amount = inputBLock.val();
        if( amount < 99) {
            amount++;
            inputBLock.val(amount);
        }
    })

    $('.amount-minus').on('click',function(){
        let inputBLock = $(this).siblings('.amount-input');
        let amount = inputBLock.val();
        if( amount > 1) {
            amount--;
            inputBLock.val(amount);
        }
    })

    $(window).scroll(function(){
        let cur_scroll = $(window).scrollTop();
        let header = $('header');
        if( cur_scroll > 50){
			header.addClass('fixed-style');
        }
		else { header.removeClass('fixed-style');}
    })

    $(".product-title .readmore").on('click', function(){
        $(this).removeClass('showed');
        $(this).parents(".product-title").find('p').addClass('showed');
        $(".product-title .hidemore").addClass('showed');
    })

    $(".product-title .aboutmore").on('click', function(){
        $(this).removeClass('showed');
        $(this).parents(".product-title").find('p').addClass('showed');
        $(".product-title .hidemore").addClass('showed');
    })

    $(".product-title .hidemore").on('click', function(){
        $(this).removeClass('showed');
        $(this).parents(".product-title").find('p').removeClass('showed');
        $(".product-title .readmore").addClass('showed');
        $(".product-title .aboutmore").addClass('showed');
    })

    $(".personal-form input, .personal-form textarea").focusin(function(){
        $(this).parent().find("label").addClass("active");
    })
    
    $(".personal-form input, .personal-form textarea").focusout(function(){
        if($(this).val() === ""){
            $(this).parent().find("label").removeClass("active");
        }
    })

    $(".tab-wrapper-normal .tabs .tab-lnk").on('click', function(e){
        e.preventDefault();
        let tabBlock = $(this).data('tab');
        let tabWrapper = $(this).parents('.tab-wrapper-normal');
        tabWrapper.find('.tab-element').removeClass('active');;
        tabWrapper.find('.tab-lnk').removeClass('active');
        $(this).addClass('active');
        $('.tab-element.'+tabBlock).addClass('active');
    })

    $(".tab-wrapper .tabs .tab-lnk").on('click', function(e){
        e.preventDefault();
        let tabBlock = $(this).data('tab');
        let tabWrapper = $(this).parents('.tab-wrapper');
        tabWrapper.find('.tab-element').removeClass('active');;
        tabWrapper.find('.tab-lnk').removeClass('active');
        $(this).addClass('active');
        $('.tab-element.'+tabBlock).addClass('active');
    })

    $('.on-cursor').myPlax();
})()









// function myPlax(e, obj){
//     let coordX = e.pageX;
//     let coordY = e.pageY;
//     let halfWidth = $(document).width() / 2;
//     let halfHeight = $(document).height() / 2;
//     let xPos = (coordX - halfWidth)*0.03;
//     let yPos = (coordY - halfHeight)*0.03;
//     obj.css({'top':yPos,'left':xPos});
// }