function checkAllDiv(oForm, nDiva, cbName, checked)
{
}

function checkifanyDiv(oForm, nDiva, cbName, message)
{
  var aaa=true;

if (document.getElementsByName(cbName).length>1) aaa=false;
	for (var i=0; i < document.getElementsByName(cbName).length; i++) 
	{ 
		 if (document.getElementsByName(cbName)[i].checked == true) 
			{
			     aaa= true;
			} 
	}
	if (aaa==false) 
		{ 
		alert(message); 
		      document.getElementsByName(cbName)[0].focus();
		      document.getElementsByName(cbName)[0].select();
		}
	return aaa;	
}

function isValidInt( field, min, max )  
{ 
alert('123')
if (+field != field || field.indexOf(".") != -1)
 {
    return false;
  } else {
    return true;
  }

} 
//////////////////////////////////////////////
function getescapa()
{
document.onkeydown = function(e) {
	var keycode = key = escape = null;

	keycode	= (e == null) ? event.keyCode : e.which;

	key = String.fromCharCode(keycode).toLowerCase();

            escape = 27;

	if ((key == 'x') || (key == 'c') || (keycode == escape)) 
		{
	;
		}
 }

}

function CheckInta(f) {
  if (f.value<0) 	 f.value=0;
  if (isNaN(f.value)) 	 f.value=0;
}


function CheckEmpty(f, theName) {
   if (!f) return true;
   if (f.value == "") {
      f.focus();
      alert(theName);
      f.focus();
      return false;
   } else {
       return true;
   }
}

function CheckEmpty2(f, theName, promptv) {
   if ((f.value == "")||(f.value == promptv)) {
      alert(theName);
      f.focus();

      return false;
   } else {
       return true;
   }
}


function CheckCheckbox(f, theName) {
   if (f.checked == false) {
      alert(theName);
      f.focus();

      return false;
   } else {
       return true;
   }
}

function chkpass(f,f2,im,im2) {
var obj1 = f;
var obj2 = document.getElementById(f2);
var imobj1 = document.getElementById(im);
var imobj2 = document.getElementById(im2);

   if ((obj1 != obj2.value)||(obj1=='')) {
     imobj1.style.display='none';
     imobj2.style.display='none';
   } else {
     imobj1.style.display='';
     imobj2.style.display='';
   }
}


function CheckRadio(formid,messa)
{
  var sel = false;
  var radios  = formid; 
  for(var k = 0; k < radios.length; k++){
    if(radios[k].type == "radio"){
      if(radios[k].checked){
        sel = true;
        break;
      }
    }
  }
  if(!sel){
    alert(messa);
//      formid.focus();
//      formid.select();
      return false;
  }
else
{
     return true;
   }
}

function fmtMoney(n, c, d, t){ //v1.0
	var m = (c = Math.abs(c) + 1 ? c : 2, d = d || ".", t = t || " ",
		/(\d+)(?:(\.\d+)|)/.exec(n + "")), x = m[1].length > 3 ? m[1].length % 3 : 0;
	return (x ? m[1].substr(0, x) + t : "") + m[1].substr(x).replace(/(\d{3})(?=\d)/g,
		"$1" + t) + (c ? d + (+m[2] || 0).toFixed(c).substr(2) : "");
};


function want_back_call()
{
 var name = $( "#wbc_name-field" );
 var phone = $( "#wbc_phone-field" );
 var text = $( "#wbc_text-field" );
 var allFields = $( [] ).add(name).add(phone);
 var tips = $( "#wbc_tips" );

	var bValid = true;
        allFields.removeClass( "ui-state-error" );

          bValid = bValid && checkLength( name, "Имя", 2, 100 ,tips );
          bValid = bValid && checkLength( phone, "Телефон", 5, 26 ,tips  );
          bValid = bValid && checkRegexp( phone, /^([0-9_()]|\+|\-|\s)+$/, "В телефоне могут быть только символы : 0-9 или +"  ,tips );
 
          if ( bValid ) {
            var mess='';
            mess=mess+'reason='+encodeURIComponent('Заказан обратный звонок');
            mess=mess+'&contname='+encodeURIComponent(name.val());
            mess=mess+'&contphone='+encodeURIComponent(phone.val());
            mess=mess+'&contprim='+encodeURIComponent(text.val());
            mess=mess+'&doaction=saveuser';
            $('#wbc_tips').load('../../internal/sendmail.php?'+mess);
                        }
}

function make_request()
{
 var name = $( "#mrq_name-field" );
 var phone = $( "#mrq_phone-field" );
 var mail = $( "#mrq_mail-field" );
 var addr = $( "#mrq_addr-field" );
 var text = $( "#mrq_text-field" );
 var allFields = $( [] ).add( name ).add( phone ).add( mail ).add( addr ).add( text );
 var tips = $( "#mrq_tips" );

	var bValid = true;
        allFields.removeClass( "ui-state-error" );

          bValid = bValid && checkLength( name, "Имя", 3, 100 ,tips );
          bValid = bValid && checkLength( phone, "Телефон", 5, 26 ,tips  );
          bValid = bValid && checkLength( addr, "Адрес", 3, 180 ,tips  );

          bValid = bValid && checkRegexp( phone, /^([0-9_()]|\+|\-|\s)+$/, "В телефоне могут быть только символы : 0-9 или +"  ,tips );

          if (mail.val()!='') bValid = bValid && checkRegexp( mail, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i, "Неправильный формат email."  ,tips );
 
          if ( bValid ) {
            var mess='';
            mess=mess+'reason='+encodeURIComponent('Заявка на карту скидок');
            mess=mess+'&contname='+encodeURIComponent(name.val());
            mess=mess+'&contphone='+encodeURIComponent(phone.val());
            mess=mess+'&contaddr='+encodeURIComponent(addr.val());
            mess=mess+'&contmail='+encodeURIComponent(mail.val());
            mess=mess+'&contprim='+encodeURIComponent(text.val());
            mess=mess+'&doaction=saveuser';
            $('#mrq_tips').load('../../internal/sendmail.php?'+mess);
		name.val('');
		phone.val('');
		mail.val('');
		addr.val('');
		text.val('');
                        }
}

$(function() { $("#toTop").scrollToTop(); });
$(function() { $("#toTop").click(function(){ $('body,html').animate({scrollTop:0},500); return false; }); });

$(document).ready(function() {
 

	$(".itemdroptitle a").click(function (){
		var a=$(this).parent().parent().next().css('display');
		if (a=='none')
		{
			$(".itemdroptitle").parent().next().hide(500);
			$(this).parent().parent().next().toggle(500);
		}
		else
		{
			$(".itemdroptitle").parent().next().hide(500);
		}

		return false;
	});


	$("a[href='#print']").click(function (){
		event.preventDefault();
		event.stopPropagation();
		var str = window.location + '&template=print';
//		var res = str.replace("#print", "&template=print");
//		alert(str + ' -> ' + res);
		window.open(str, '_blank');		
		return false;
	});

	$("#mainslide").slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: 'linear'
	});


	$("#topslide").owlCarousel({
		pagination: true, 
		autoPlay : 10000, 
		singleItem:true,
		items : 1,
		itemsDesktop : [1399,1], 
		itemsDesktopSmall : [979,1], 
		slideSpeed : 1000,
		paginationSpeed : 2000,
		rewindSpeed : 3000,
		afterAction : afterAction
	});


	$(".owlslider").each(function(el,indx){

		switch($(this).find('div.short2').length)
		{
			case 1:
				$(this).owlCarousel({
					pagination: true, 
					autoPlay : 5000, 
					items:1,
					singleItem:true,
					rewindSpeed:1000
				});
				break;
			case 2:
				$(this).owlCarousel({
					pagination: true, 
					autoPlay : 5000, 
					items:2,
					itemsDesktop: [1399,2],
					itemsDesktopSmall: [1100,2],
					itemsTablet: [840,2],
					itemsTabletSmall: [580,2],
					itemsMobile:[480,1],
					rewindSpeed:1000
				});
				break;
			case 3:
				$(this).owlCarousel({
					pagination: true, 
					autoPlay : 5000, 
					items:3,
					itemsDesktop: [1399,3],
					itemsDesktopSmall: [1100,3],
					itemsTablet: [840,2],
					itemsTabletSmall: [580,2],
					itemsMobile:[480,1],
					rewindSpeed:1000
				});
				break;
			default:
				$(this).owlCarousel({
					pagination: true, 
					autoPlay : 5000, 
					items:4,
					itemsDesktop: [1399,4],
					itemsDesktopSmall: [1100,3],
					itemsTablet: [840,2],
					itemsTabletSmall: [580,2],
					itemsMobile:[480,1],
					rewindSpeed:1000
				});
				break;


		}

	});


	$(".owls1lider").owlCarousel({
		pagination: true, 
		autoPlay : 5000, 
		items:4,
		itemsDesktop: [1399,4],
		itemsDesktopSmall: [1100,3],
		itemsTablet: [840,2],
		itemsTabletSmall: [580,2],
		itemsMobile:[480,1],

		rewindSpeed:1000
	});


	function afterAction(){

		$('#topslidetext div:eq('+this.owl.prevItem+')').css('visibility','hidden');
		$('#topslidetext div:eq('+this.owl.currentItem+')').css('visibility','visible');

		$('#topslidetext div:eq('+this.owl.prevItem+')').css('opacity','0');
		$('#topslidetext div:eq('+this.owl.currentItem+')').css('opacity','1');

		$('#topslidea a:eq('+this.owl.prevItem+')').removeClass('active');
		$('#topslidea a:eq('+this.owl.currentItem+')').addClass('active');

	  }

	$("#topslidea a").each(function(i,val)
		{
			$(this).click(function(){

				if ($(this).hasClass('active'))
					top.location.href=$(this).attr('href').substr(1);
				else
					$("#topslide").data('owlCarousel').goTo(i);
			});
		}
	);


  $('.animatedTable img')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('zoomOut')
                 .addClass('zoomIn');
             else
                 $(this)
                 .removeClass('zoomIn')
                 .addClass('zoomOut');
         }, {
             offset: '90%'
         })
 
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('zoomIn')
                 .addClass('zoomOut');
             else
                 $(this)
                 .removeClass('zoomOut')
                 .addClass('zoomIn');
         }, {
             offset: -10
         });


  $('.animateddiv img')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('zoomOut')
                 .addClass('zoomIn');
             else
                 $(this)
                 .removeClass('zoomIn')
                 .addClass('zoomOut');
         }, {
             offset: '90%'
         })
 
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('zoomIn')
                 .addClass('zoomOut');
             else
                 $(this)
                 .removeClass('zoomOut')
                 .addClass('zoomIn');
         }, {
             offset: -10
         });

	$(".objtablel tr:not(:first) > td:first-child").attr("title","Нажмите для выбора объекта");

	$(".objtablel tr:not(:first) > td").click(function (){
		if ($(this).index()>0 && $(this).parent().attr('dataid')!=0 && !$(this).hasClass('noopen'))
		{
			$.arcticmodal({
			    type: 'ajax',
			    url: '../../internal/showobj.php?objnum='+$(this).parent().attr('dataid')			});
		}
		if ($(this).index()==0 || $(this).parent().index()==0)
		{
			if ( $(this).html().length < 10 )
			{
				$(this).html('<input type=\"checkbox\" checked olddata=\"'+$(this).html()+'\">');
				$.post(
					"../../internal/select.php", 
					{'id': $(this).parent().attr('dataid')},
					function (data)
					{
						if (data=="ok")
						{

						}
						else
						{
							alert('Ошибка '+data);
						}
					}
				);
			}
			else
			{
				$(this).html($(this).children("input").attr('olddata'));
				$.post(
					"../../internal/select.php", 
					{'id': '-'+$(this).parent().attr('dataid')},
					function (data)
					{
						if (data=="ok")
						{

						}
						else
						{
							alert('Ошибка '+data);
						}
					}
				);

			}
		}
	});


});
