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

    $('.INITIALS .checkpoint').on('click', function(){
        /* set active image for current checkpoint*/
        let previewNodeElem = $(this).parents('.shirtsID-row').find('.preview-block');
        let positionID = $(this).data('check-preview');
        $(this).parents('.position-block').find('.checkpoint').removeClass('active');
        $(this).addClass('active');
        previewNodeElem.find('.forCheckImg').removeClass('active');
        previewNodeElem.find('.forCheckImg.'+positionID).addClass('active');
        /* set active select option for current checkpoint */
        let curOptionValue = '[value='+positionID+']';
        $('select#placeTxt :selected').each(function(){
            $(this).removeAttr('selected');
        })
        $('select#placeTxt ' + curOptionValue).prop("selected", true);
    })

    $('.THREAD .checkpoint').on('click', function(){
        let positionID = $(this).data('check-preview');
        $(this).parents('.position-block').find('.checkpoint').removeClass('active');
        $(this).addClass('active');
        let curOptionValue = '[value='+positionID+']';
        $('select#placeThread :selected').each(function(){
            $(this).removeAttr('selected');
        })
        $('select#placeThread ' + curOptionValue).prop("selected", true);
    })

    $('.THREAD .checkpoint').one('click',function(){
        let curColor = $(this).parents('.shirtsID-row').find('.color .active').data('color-thread');
        $(this).parents('.shirtsID-row').find('.preview-block .forCheckImg').filter('.'+curColor).addClass('active');
    })

    $('select#placeTxt').on('click',function(){
        let curVal = $(this).val();
        let posBlock = $(this).parents('.shirtsID-row').find('.position-block');
        let previewNodeElem = $(this).parents('.shirtsID-row').find('.preview-block');
        posBlock.find('.checkpoint').removeClass('active');
        posBlock.find('.checkpoint.'+curVal).addClass('active');
        previewNodeElem.find('.forCheckImg').removeClass('active');
        previewNodeElem.find('.forCheckImg.'+curVal).addClass('active');
    })

    $('select#placeThread').on('click',function(){
        let curVal = $(this).val();
        let posBlock = $(this).parents('.shirtsID-row').find('.position-block');
        let previewNodeElem = $(this).parents('.shirtsID-row').find('.preview-block');
        posBlock.find('.checkpoint').removeClass('active');
        posBlock.find('.checkpoint.'+curVal).addClass('active');
        let curColor = $(this).parents('.shirtsID-row').find('.color .active').data('color-thread');
        previewNodeElem.find('.forCheckImg').removeClass('active').filter('.'+curColor).addClass('active');;
    })

    $('.position-block .checkpoint, select#placeTxt, select#placeThread, .THREAD .color').one('click', function(){
        let previewNodeElem = $(this).parents('.shirtsID-row').find('.preview-block');
        previewNodeElem.find('p').css({'display':'none'});
    })

    $('.shirtsID-main-check .form-check-input').on('click', function(){
        let checkedStatus = ($(this).prop('checked'));
        checkedStatus ? (
            $(this).parents('.shirtsID-row').find('.settings-container').addClass('active')
            ) : (
            $(this).parents('.shirtsID-row').find('.settings-container').removeClass('active')
            );
    })

    $('.settings-block #initialTxt').on('keyup',function(){
        let curInitials = $(this).val();
        $(this).parents('.settings-container').find('.forCheckImg.active .initials-text-pos').text(curInitials);
    })

    let additional_fonts = [
        'https://fonts.googleapis.com/css?family=Pacifico&display=swap',
        'https://fonts.googleapis.com/css?family=Modak&display=swap',
        'https://fonts.googleapis.com/css?family=Indie+Flower&display=swap'
    ];

    $('#initialFont').on('click',function(){
        let fontLnk = $('#additional_font');
        let cur_font = additional_fonts[$(this).val()];
        let font_family = $(this).find("option:selected").data('font-fam');
        fontLnk.attr('href',cur_font);
        let previewNodeElem = $(this).parents('.shirtsID-row').find('.preview-block');
        previewNodeElem.find('.forCheckImg.active .initials-text-pos').css({'font-family':font_family});
    })

    $('.INITIALS .color .variant').on('click',function(e){
        e.preventDefault();
        $(this).parent().find('.variant').removeClass('active');
        $(this).addClass('active');
        let initialsNode = $(this).parents('.shirtsID-row').find('.forCheckImg.active .initials-text-pos');
        let curBgColor = rgb_to_hex($(this).find('.border-deco').css('background-color'));
        initialsNode.css('color', curBgColor);
        let curColor = $(this).data('color-initials');
        $('input#color-initials').val(curColor);
    })

    $('.THREAD .color .variant').on('click',function(e){
        e.preventDefault();
        $(this).parent().find('.variant').removeClass('active');
        $(this).addClass('active');
        let activeImg = $(this).parents('.shirtsID-row').find('.forCheckImg');
        let curColor = $(this).data('color-thread');
        
        activeImg.removeClass('active').filter('.'+curColor).addClass('active');
        $('input#thread-color').val(curColor);
    })

    function rgb_to_hex(color){
        var rgb = color.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
        return (rgb && rgb.length === 4) ? "#" + ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : color;
    }

    window.popupShirtsID = () => {
        $('.popupShirtsID').toggleClass('active');
        $('.popupHideLayout').toggleClass('active');
        $('body').toggleClass('popupOpen');
    }


    $('.popupShirtsID .main-btn').on('click', (e) => {
        e.preventDefault();
        $('.curShirtsIDSettings .initials').text($('#initialTxt').val());
        $('.curShirtsIDSettings .posTxt').text($('#placeTxt :selected').text());
        $('.curShirtsIDSettings .initialsFont').text($('#initialFont :selected').text());
        $('.curShirtsIDSettings .initialsColor').text($('.forInitials .active .txt').text());
        
        $('.curShirtsIDSettings .thread').text($('#placeThread :selected').text());
        $('.curShirtsIDSettings .threadColor').text($('.forThread .active .txt').text());

        $('.curShirtsIDSettings #initials').prop('checked', $('#initialsCheck').prop('checked'));
        $('.curShirtsIDSettings #thread').prop('checked');
    })

    $('#gallery').lightGallery({
        thumbnail:false,
        pager: $(window).width() >= 768 ? true : false,
        loop:true
    });

    var elems = $("#gallery a");
	$(".product-small a").click(function(e) 
		{
			e.preventDefault();
			$(".product-small a").removeClass("active");
			$(this).addClass("active");		
			
			var i = $(this).index();
			console.log(i);
			$(elems).hide();
			$(elems[i]).fadeIn(400); //fadeIn("slow");
					
	});

})()


