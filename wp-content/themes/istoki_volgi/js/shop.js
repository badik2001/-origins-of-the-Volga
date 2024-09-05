/// js для магазина

function ajax_buy(kod,cnt,vari) 
{
	k = 1;
	if(cnt!=false) 
	{
		//	k = prompt("Введите кол-во штук");
        	k=cnt;
	}

	$.post(
		"/internal/mybuy.php?action=add", 
		{code: kod, count: cnt, vari: vari},
		function (data)
			{
					$("#bsk_count").html(data.count);
					$("#bsk_sum").html(data.sum);

					$("#bsk_form_full").show();
					$("#bsk_form_empty").hide();           
					$("tr#tr_"+kod).css("background-color", "#DDFFDD");
					$("#bskback_"+kod).fadeIn(300);
                                        $("#countcart").html(data.count);
                                        setTimeout(function() { $("#bskback_"+kod).fadeOut(300); }, 2000); 

					var pheight=$('#itemimagetofly'+kod).height();
					var pwidth=$('#itemimagetofly'+kod).width();

				        var o1 = $('#itemimagetofly'+kod).parent().offset();
				        var o2 = $('#bsk_sum').offset();

				        var dx = o1.left -  o2.left;
				        var dy = Math.round(o1.top) - Math.round(o2.top)-pheight;

					//              .css({'position' : 'absolute', 'z-index' : '100','top': o1.top-o3.top, 'left': o1.left-o3.left })

					$('#itemimagetofly'+kod).clone()
			              .prependTo('body')
			              .css({'width': pwidth+'px','height':pheight+'px','position' : 'absolute', 'z-index' : '100','top': Math.round(o1.top-pheight)+'px', 'left': o1.left,'transition': 'none' })
			              .animate({opacity: 0.5,   
		                            top: "-="+dy,
		                            left: "-="+dx,
		                            width: 20,   
		                            height: 20}, 1000, function() {  
							                    $(this).remove(); 
								              });  
//					


			}
		);

}

function eachfunctions(element)
{

			$(element).blur(function()
				{
					setTimeout( function() { $('.suggestions').hide(); $('.suggestions .selected').removeClass('selected'); }, 500);
				});

			$(element).keyup(function(event)
				{
					if ((event.keyCode >= 41)||(event.keyCode == 8))
					{
						$(this).siblings('.suggestions').show().load('/internal/prelook.php?what='+encodeURIComponent($(this).val()) );
					}
					if (event.keyCode==27)
					{
						$('.suggestions').hide();
					}

					if (event.keyCode==40)
					{
					        if ($(this).siblings('.suggestions').find('.selected').length==0)
						{
							$(this).siblings('.suggestions').find('a:first').addClass('selected');
						}
						else
						{
							var a=$(this).siblings('.suggestions').find('.selected').index;
							$(this).siblings('.suggestions').find('.selected').next().addClass('selected');
							$(this).siblings('.suggestions').find('.selected:first').removeClass('selected');
						}
					return false;
					}


					if (event.keyCode==13)
					{
					        if ($(this).siblings('.suggestions').find('.selected').length==0)
						{

						}
						else
						{
							$(this).siblings('.suggestions').find('.selected').trigger('click');
						}
					return false;
					}

					if (event.keyCode==38)
					{
					        if ($(this).siblings('.suggestions').find('.selected').length==0)
						{
							$(this).siblings('.suggestions').find('a:last').addClass('selected');
						}
						else
						{
							var a=$(this).siblings('.suggestions').find('.selected').index;
							$(this).siblings('.suggestions').find('.selected').prev().addClass('selected');
							$(this).siblings('.suggestions').find('.selected:last').removeClass('selected');
						}
					return false;
					}

				});

}

$(function(){

	$('#bsk_form_full').click(function(){ top.location.href=$(this).attr('data-path');});
	$('#bsk_form_empty').click(function(){ top.location.href=$(this).attr('data-path');});

	$('.filter .makeclear').click(function(){ 
		$('.filter input[type="checkbox"]').prop('checked',''); 
		$('.filter #selminprice').val($('.filter #selminprice').data('original')); 
		$('.filter #selmaxprice').val($('.filter #selmaxprice').data('original')); 

		$('.filter').submit(); 

	});
	$('.openfilter').click(function(){ $('.filter').fadeToggle(500); });

	$(".item .prices input:radio").click(function(){

		$(".item .prices div").removeClass('active');
		$(".item .prices input:radio:checked").parent().addClass('active');
		if ($(".item .prices input:radio:checked").parent().attr('data-pic'))
		{
			$(".itemmainimg .itemphotoz a img").removeClass('selected');
			$('.itemmainimg .itemphotoz a[href="'+$(".item .prices input:radio:checked").parent().attr('data-pic')+'"] img').addClass('selected');
			$(".itemmainimg>a").attr('href',$(".item .prices input:radio:checked").parent().attr('data-pic'));
			$(".itemmainimg>a>img").attr('src',$(".item .prices input:radio:checked").parent().attr('data-pic').replace('mid.','m.'));
		}
	});

	$('.menuleft H3').click(function(){

		if ($(this).css('background-image')!='none')
		{
			if ($('.menuleft .subMenu2').css('display')=='none')
			{
				$('.menuleft .subMenu2').show(500);
				$(this).css('background-image','url(/img/catup32.png)')
			}
			else
			{
				$('.menuleft .subMenu2').hide(200);
				$(this).css('background-image','url(/img/catdown32.png)')
			}
		}
	});

});

setTimeout( function() {

	$('.sort a').click(function(){
		$('.sort>div').fadeToggle(300);
	});

	$('a[href="#secondary-filter"]').click(function(){
		$('a[href="#secondary-filter"]').fadeOut(500);
		$('div.secondary').fadeIn(500);
	});

	if ($(".itemphotoz>a").length)
	{
		$(".itemmainimg>a").attr("rel",$(".itemphotoz a").eq(1).attr("rel"));
		$(".itemphotoz a img").first().addClass("selected");

	

	}


	if ($(".owlmyslider").length)
	{

		setTimeout( function() {
			$(".owlmyslider").animate({ opacity: 1 }, 200);
		}, 100);

		$(".owlmyslider.itemphotoz").owlCarousel({
		
			autoplay : true, 
			autoplayTimeout: 5000,
 			nav:true, 
			dots: false,
			items:3,

			responsive:
			{
				0:	{items:3},
				470:	{items:3},
				720: 	{items:3}
			}
		}); 

		$(".owlmyslider.mobile1").owlCarousel({
		
			autoplay : true, 
			autoplayTimeout: 5000,
 			nav:true, 
			dots: false,
			items:3,

			responsive:
			{
				0:	{items:1},
				470:	{items:2},
				720: 	{items:3}
			}
		}); 

                $(".owlmyslider.smallmobile1").each(function(){

			var divs=$(this).children('a').length;
			console.log($(this).children('a').length + '-->>' + divs);

			$(this).owlCarousel({
		
				autoplay : true, 
				autoplayTimeout: 5000,
	 			nav:true, 
				dots: false,
				items:  divs < 6 ? divs : 6,

				responsive:
				{
					0:	{items: divs < 1 ? divs : 1},
					520:	{items: divs < 2 ? divs : 2},
					780:	{items: divs < 3 ? divs : 3},
					1040:	{items: divs < 4 ? divs : 4},
					1300:	{items: divs < 5 ? divs : 5},
					1560: 	{items: divs < 6 ? divs : 6}
				}
			}); 

			$('.owlmyslider .owl-item a').qtip({
				style: { classes: 'atip' },
				 position: {
		        	     target: 'mouse', // Track the mouse as the positioning target
			      	     adjust: { x: 25, y: 5 } // Offset it slightly from under the mouse
		        	 }
			});


		});

	}


	$("a[href='#makereview']").click(function(){

		$.arcticmodal({
		    type: 'ajax',
		    url: '/internal/makereview.php?parent_id='+$(this).attr('data-id')+'&item='+encodeURIComponent($('h1').html())	});
		return false;
	});

	$(".itemmainimg .itemphotoz a img").click(function(event){

		$(this).closest(".itemphotoz").find("img").removeClass("selected");
		$(this).addClass("selected");

/*		var width=$(".itemmainimg").css("width");
		$(".itemmainimg").css("width",width);*/

		$(".itemmainimg>a>img").attr("src",$(this).parent().attr("href"));//.css("width",width);
	
		$(".itemmainimg>a").attr("href",$(this).parent().attr("href"));

		if ($(this).parent().attr('data-var')) 
		{
			$(".item .prices div").removeClass('active');
			$('.item .prices div[data-pic="'+$(this).parent().attr('href')+'"] input').prop('checked','checked');
			$('.item .prices div[data-pic="'+$(this).parent().attr('href')+'"]').addClass('active');
		}

		event.stopPropagation();
		return false;
	});

},1000);
