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
			$(elems).hide();
			$(elems[i]).fadeIn(400); //fadeIn("slow");
					
    });
    
    $(".size-params input[type='range']").on('input', function() {
        let curValue = $(this).val();
        curValue = +curValue;
        let curValuePlace = $(this).parents('.size-params-row').find('.size-value');
        curValuePlace.text(curValue.toFixed(1)).addClass("active");
        // alert(typeof(curValue));
        getShirtSize();
    })

    $(".my-params").on('click', function(){
        $(".size-range-block").addClass("active");
    })

    $(".size-range-block .icon-close").on('click', function(){
        $(this).parent().removeClass("active");
    })

    function getShirtSize(){
        let neckSize = getNeckSize(),
            handSize = getHandSize(),
            backSize = getBackSize(),
            chestSize = getChestSize(),
            waistSize = getWaistSize();

        let neckSizeS = false,
            handSizeS = false,
            backSizeS = false,
            chestSizeS = false,
            waistSizeS = false;
            neckSizeM = false,
            handSizeM = false,
            backSizeM = false,
            chestSizeM = false,
            waistSizeM = false,
            neckSizeL = false,
            handSizeL = false,
            backSizeL = false,
            chestSizeL = false,
            waistSizeL = false;
            neckSizeXL = false,
            handSizeXL = false,
            backSizeXL = false,
            chestSizeXL = false,
            waistSizeXL = false,
            neckSizeXXL = false,
            handSizeXXL = false,
            backSizeXXL = false,
            chestSizeXXL = false,
            waistSizeXXL = false;
        
        if (neckSize >= 37.0 && neckSize <= 38.0) { neckSizeS = true} else { neckSizeS = false }
        if (handSize >= 63.5 && handSize <= 64.5) { handSizeS = true} else { handSizeS = false }
        if (backSize >= 69.5 && backSize <= 71.0) { backSizeS = true} else { backSizeS = false }
        if (chestSize >= 49.0 && chestSize <= 51.5) { chestSizeS = true} else { chestSizeS = false }
        if (waistSize >= 46.0 && waistSize <= 48.5) { waistSizeS = true} else { waistSizeS = false }
        //  alert(waistSizeS);
        if(neckSizeS && handSizeS && backSizeS && chestSizeS && waistSizeS) {
            $(".result-size .current-size").text("S");
        } 
        else {
            if (neckSize > 38.0 && neckSize <= 40.0) { neckSizeM = true} else { neckSizeM = false }
            if (handSize > 64.5 && handSize <= 65.5) { handSizeM = true} else { handSizeM = false }
            if (backSize > 70.5 && backSize <= 72.0) { backSizeM = true} else { backSizeM = false }
            if (chestSize > 51.5 && chestSize <= 54.0) { chestSizeM = true} else { chestSizeM = false }
            if (waistSize > 48.5 && waistSize <= 51.0) { waistSizeM = true} else { waistSizeM = false }
            if(neckSizeM && handSizeM && backSizeM && chestSizeM && waistSizeM) {
                $(".result-size .current-size").text("M");
            }
            else {
                if (neckSize > 40.0 && neckSize <= 42.0) { neckSizeL = true} else { neckSizeL = false }
                if (handSize > 65.5 && handSize <= 66.5) { handSizeL = true} else { handSizeL = false }
                if (backSize > 71.5 && backSize <= 73.0) { backSizeL = true} else { backSizeL = false }
                if (chestSize > 53.0 && chestSize <= 56.5) { chestSizeL = true} else { chestSizeL = false }
                if (waistSize > 50.0 && waistSize <= 53.5) { waistSizeL = true} else { waistSizeL = false }
                if(neckSizeL && handSizeL && backSizeL && chestSizeL && waistSizeL) {
                    $(".result-size .current-size").text("L");
                }
                else {
                    if (neckSize > 42.0 && neckSize <= 44.0) { neckSizeXL = true} else { neckSizeXL = false }
                    if (handSize > 66.5 && handSize <= 67.5) { handSizeXL = true} else { handSizeXL = false }
                    if (backSize > 72.0 && backSize <= 74.0) { backSizeXL = true} else { backSizeXL = false }
                    if (chestSize > 55.0 && chestSize <= 59.5) { chestSizeXL = true} else { chestSizeXL = false }
                    if (waistSize > 53.0 && waistSize <= 56.0) { waistSizeXL = true} else { waistSizeXL = false }
                    if(neckSizeXL && handSizeXL && backSizeXL && chestSizeXL && waistSizeXL) {
                        $(".result-size .current-size").text("XL");
                    }
                    else {
                        if (neckSize > 44.0 && neckSize <= 46.0) { neckSizeXXL = true} else { neckSizeXXL = false }
                        if (handSize > 67.5 && handSize <= 69.0) { handSizeXXL = true} else { handSizeXXL = false }
                        if (backSize > 73.5 && backSize <= 75.0) { backSizeXXL = true} else { backSizeXXL = false }
                        if (chestSize > 57.0 && chestSize <= 61.5) { chestSizeXXL = true} else { chestSizeXXL = false }
                        if (waistSize > 55.0 && waistSize <= 58.5) { waistSizeXXL = true} else { waistSizeXXL = false }
                        if(neckSizeXXL && handSizeXXL && backSizeXXL && chestSizeXXL && waistSizeXXL) {
                            $(".result-size .current-size").text("XXL");
                        }
                        else {$(".result-size .current-size").text("?");}
                    }
                }
            }
        }

        // console.log(neckSizeXXL);
        // console.log(handSizeXXL);
        // console.log(backSizeXXL);
        // console.log(chestSizeXXL);
        // console.log(waistSizeXXL);

    }

    function getNeckSize(){
        return $("#size-neck").val();
    }
    function getHandSize(){
        return $("#size-hand").val();
    }
    function getBackSize(){
        return $("#size-back").val();
    }
    function getChestSize(){
        return $("#size-chest").val();
    }
    function getWaistSize(){
        return $("#size-waist").val();
    }

})()


