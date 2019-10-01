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


})()

