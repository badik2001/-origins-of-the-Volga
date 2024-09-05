  $(document).ready(function(){


		// key up suggestion for search
            $(this).keydown(function(eventObject){
                if ((eventObject.which == 27)&&($('#suggestions').is(":visible")))
                   { setTimeout( function() { $('#suggestions').fadeOut(500); $('.finder').focus();},100);	}
            });

			// Scroll to hash animation

			$( function()
			{
				$( 'a[href*=#]:not([href=#])' ).click( function()
				{
					if( location.pathname.replace( /^\// , '' ) == this.pathname.replace( /^\// , '' ) && location.hostname == this.hostname )
					{
						var target = $( this.hash );
						target = target.length ? target : $( '[name='+this.hash.slice( 1 )+']' );
						if( target.length )
						{
							$( 'html,body' ).stop().animate(
							{
								scrollTop:target.offset().top - 120
							} , 1000 );
							return false;
						}
					}
				});
			});





        });


function lookupfinder()
{
	if($(".finder").val().length <= 3) 
	{
		$('#suggestions').fadeOut(); 
	}
	else 
	{
		$.post("/internal/suggestions.php?queryString="+encodeURIComponent($(".finder").val()), function(data) 
		{ 
			$('#suggestions').css('width',$('.finder').css('width'));
			$('#suggestions').css('left',$('.finder').offset().left);
			$('#suggestions').fadeIn();
			$('#suggestions').html(data); 
		});
	}
}

/// mouseover отображение меню
var showcataloglevel=0;


$(function(){

	$('a[href="#mobilemenu"]').click(function (){

		$('.mobilemenu').fadeIn(300);
		return false;
	});

	function checkshow()
	{
		$('.inmenu[data-show="0"]').fadeOut(300);
		console.log('check');
	}

	$('.hasSubmenu').mouseover(function(){
		$(this).siblings('.inmenu').attr('data-show','1');
		$(this).siblings('.inmenu').attr('data-overed','1');
		$(this).siblings('.inmenu').fadeIn(500);
		console.log('hasSubmenu over');
	});

	$('.inmenu').mouseover(function(){
		$(this).attr('data-show','1');
		console.log('inmenu over');
	});

	$('.hasSubmenu').click(function(e){
		if ($(this).siblings('.inmenu').attr('data-overed')==1)
		{
			$(this).siblings('.inmenu').attr('data-overed','0');
			return false;
		}

		if ($(this).siblings('.inmenu').attr('data-show')==1)
			$(this).siblings('.inmenu').attr('data-show','0');
		else
			$(this).siblings('.inmenu').attr('data-show','1');
		setTimeout(checkshow,500);
		$(this).siblings('.inmenu').toggle(300);
		e.preventDefault();
		console.log('click');
		return false;

	});

	$('.hasSubmenu').mouseout(function(){
		$(this).siblings('.inmenu').attr('data-show','0');
		setTimeout(checkshow,500);
		console.log('hassubmenu out');
	});

	$('.inmenu').mouseout(function(){
		$(this).attr('data-show','0');
		setTimeout(checkshow,500);
		console.log('inmenu out');
	});

	$(window).resize(function(){

		if ($(window).width()>980)
		{
			if ($('.mobilemenu').css('display')=='none')
			{
				$('.mobilemenu').css('display','inline-block');
			}
		}
	});


/*	$('a[href="#closemobilemenu"]').click(function (){*/
	$('.mobilemenu a').click(function (){

		if ($(window).width()<=980)
		{
			$('.mobilemenu').fadeOut(300);
//			return false;
		}
	});



	$('.backfon').parallax({speed: $('.backfon').data('speed') });

	$('a[href="#backcall"]').click(function (){

		$.arcticmodal({
		    type: 'ajax',
		    url: '/internal/showorder.php?text='+encodeURIComponent($(this).html())	});
	});

	$('a[href="#getprice"]').click(function (){

		var text="";
		if ($('.item.shoppage h1').length>0)
			text=$('.item.shoppage h1').html();
		else
			text=$(this).parent().parent().find('.title').find('a').html();
		
		$.arcticmodal({
		    type: 'ajax',
		    url: '/internal/showorder.php?text='+encodeURIComponent($(this).data('text')+text)	});
	});


	$(".finder").after("<div id='suggestions'></div>");
	$(".finder .close").click(function(){ $('#suggestions').fadeOut(500); $('.finder').focus(); });
	$(".finder").keyup(function(eventObject){

                if ((eventObject.which == 27)&&($('#suggestions').is(":visible")))
		{
			$('#suggestions').fadeOut(500); $('.finder').focus();
		}

                if ( (eventObject.which > 40) || (eventObject.which== 8) )
			lookupfinder();

		if (eventObject.which==40)
		{
		        if ($('#suggestions .selected').length==0)
			{
				$('#suggestions a:first').addClass('selected');
			}
			else
			{
				$('#suggestions .selected').next().addClass('selected');
				$('#suggestions .selected:first').removeClass('selected');
			}
			return false;
		}


		if (eventObject.which==13)
		{
		        if ($('#suggestions .selected').length==0)
			{
		                if ((eventObject.which == 13)&&($(".finder").val().length > 3))
					top.location.href='/&whatfind='+encodeURIComponent($(".finder").val());
        		}
			else
			{
//				alert($('#suggestions a.selected').attr('href'));
				top.location.href=$('#suggestions a.selected').attr('href');
			}
			return false;
		}

		if (eventObject.which==38)
		{
		        if ($('#suggestions .selected').length==0)
			{
				$('#suggestions a:last').addClass('selected');
			}
			else
			{
				$('#suggestions .selected').prev().addClass('selected');
				$('#suggestions .selected:last').removeClass('selected');
			}
			return false;
		}


	});

	$(".finderimg").click(function(){
		
		if ($(".finder").val().length > 3)
			top.location.href='/&whatfind='+encodeURIComponent($(".finder").val());
	});


	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
	{

	$(".phone").each(function(indx,el){

		var txt=$(el).html();
		txt=txt.replace(/<\/?[^>]+>/g,'');
		$(el).html("<a href='tel:"+txt+"'>"+$(el).html()+"</a>");

		});
	}

	$( ".wanthelp a" ).click(function(){

		var phone = $( ".wanthelp input" );
		var bValid = true;
		var tips = $( ".wanthelp a" );
	        phone.removeClass( "ui-state-error" );

		bValid = bValid && checkLength( phone, "Тел / e-mail", 2, 100 ,tips );
 
		if ( bValid ) 
		{
			var mess='';
			mess=mess+'reason='+encodeURIComponent('Хочу обратный звонок');
			mess=mess+'&contphone='+encodeURIComponent(phone.val());
			mess=mess+'&doaction=saveuser';
			phone.val('Отправляем сообщение');
			$('.wanthelp a').load('/internal/sendmail.php?'+mess);
			phone.val('');
		}
	});


	$('.messagecolumn h3').click(function(){

		if ( $('.messagecolumn form').css('display')=='none' )
			$('.messagecolumn form').fadeIn(500);
		else
			$('.messagecolumn form').fadeOut(500);

	});

	
	$("#footbackmessage").click( function(){

		var name = $( "#footname-field" );
		var phone = $( "#footphone-field" );
		var mail = $( "#footemail-field" );
		var text = $( "#footmessage-field" );
		var allFields = $( [] ).add( name ).add( mail ).add( phone ).add( text );
		var tips = $(this).parent().parent().parent().find('h3');

		var bValid = true;
        	allFields.removeClass( "ui-state-error" );

		bValid = bValid && checkLength( name, "Имя", 3, 100 ,tips );

		if ((phone.val()=='')&&(mail.val()==''))
		{
			bValid = false;			
			updateTips("Напишите телефон или email",tips);
		        phone.focus();
		        phone.select();
		}

		if (phone.val()!='')
		{
		        bValid = bValid && checkLength( phone, "Телефон", 5, 26 ,tips  );
        		bValid = bValid && checkRegexp( phone, /^([0-9_()]|\+|\-|\s)+$/, "В телефоне могут быть только символы : 0-9 или +"  ,tips );
		}


		if (mail.val()!='')
		{
			bValid = bValid && checkRegexp( mail, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "Неправильный формат email."  ,tips );
		}

 
		if ( bValid ) 
		{
			$('#footbackmessage').parent().parent().find('h3').html('СООБЩЕНИЕ ОТПРАВЛЯЕТСЯ...');
			var mess='';
		        mess=mess+'reason='+encodeURIComponent('Сообщение с сайта');
			mess=mess+'&contname='+encodeURIComponent(name.val());
			mess=mess+'&contphone='+encodeURIComponent(phone.val());
			mess=mess+'&contmail='+encodeURIComponent(mail.val());
			mess=mess+'&contprim='+encodeURIComponent(text.val());
			mess=mess+'&doaction=saveuser';
			tips.load('/internal/sendmail.php?'+mess);
			text.val('');
			mail.val('');
			phone.val('');
			name.val('');
			text.html('');
			setTimeout(function(){ $('#footbackmessage').parent().parent().find('h3').html('НАПИШИТЕ НАМ СООБЩЕНИЕ'); },4000);
		}

	});

});