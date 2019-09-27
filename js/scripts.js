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

    $(".readmore").on('click', function(){
        let start = $(this).data('start-txt');
        let toggletxt = $(this).data('toggle-txt');
        $(this).toggleText(start, toggletxt);
        $(this).parent().find('p').toggleClass('showed');
    })


})()

$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() === b ? a : b);
    }
});
