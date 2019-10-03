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

    // $('.main-shirt-block').plaxmove({ratioH:0.01,ratioV:0.01})
    // $(document).on('mousemove', function(e){
    //     let coordX = e.pageX;
    //     let coordY = e.pageY;
    //     let halfWidth = $(document).width() / 2;
    //     let halfHeight = $(document).height() / 2;
    //     let xPos = (coordX - halfWidth)*0.03;
    //     let yPos = (coordY - halfHeight)*0.03;
    //     $('.main-shirt-block').css({'top':yPos,'left':xPos});
    // })
    $(document).on('mousemove', function(e){
        
    })

    $('.on-cursor').myPlax();
    // $('.main-shirt-block').myPlax();

    // $.fn.myPlax = function(e){
    //     let coordX = e.pageX;
    //     let coordY = e.pageY;
    //     let halfWidth = $(document).width() / 2;
    //     let halfHeight = $(document).height() / 2;
    //     let xPos = (coordX - halfWidth)*0.03;
    //     let yPos = (coordY - halfHeight)*0.03;
    //     $(this).css({'top':yPos,'left':xPos});
    // }
    // $(document).on('mousemove', function(e){
    //     $('.main-shirt-block').myPlax(e);
    // })
   
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