<?php get_header()?>
<?php 
    

// echo '<pre>';
// var_dump($categories);
// echo '</pre>';

if(count(get_the_category()) > 0 ) {
    $categories = get_the_category();
    $cat_name = $categories[0]->name // ID категории 


       
?>




	<div class="main_container">
		<div class="clear"></div><div class="dynatitle"><a href="https://istoki-volgi.ru/">Главная страница</a>&nbsp;<span>»</span>&nbsp;Проекты</div>
        
        <div class="headerfon">       
            <h1 class="pagetitle"><?= $cat_name; ?></h1>
        </div>
        
        <div class="newsslider">		<a href="https://istoki-volgi.ru/proektyi/konkurs-professionalnogo-masterstva">
			<h3>Конкурс профессионального мастерства</h3>
			<div class="hr1"></div>
			<div class="preview"><div style="background-image: url(/base/data/1104m.jpg);"></div></div>
						<div class="hr1"></div>
		</a>
		<a href="https://istoki-volgi.ru/proektyi/ekologiya-bezopasnost-jizn">
			<h3>Экология-безопасность-жизнь</h3>
			<div class="hr1"></div>
			<div class="preview"><div style="background-image: url(/base/data/1088m.jpg);"></div></div>
						<div class="hr1"></div>
		</a>
		<a href="https://istoki-volgi.ru/proektyi/istoki">
			<h3>Истоки</h3>
			<div class="hr1"></div>
			<div class="preview"><div style="background-image: url(/base/data/1086m.jpg);"></div></div>
						<div class="hr1"></div>
		</a>
</div>	<div class="clear"></div>
	<div>
		<div class="upscrollbutton">
			<a id="toTop" style="display: none;"><img src="./Проекты _ Совет музеев ПФО._files/upscroll.png" width="36" height="36" alt="^"></a>
		</div>
	</div>
</div><!-- main container -->
<script async="" src="./Проекты _ Совет музеев ПФО._files/spxl.js.Без названия" data-pixel-id="22985"></script>
<meta name="proculture-verification" content="905197975acdae856d5326b3fc94fda7">

	



<?php } else { ?>


В категории неть записей или ее не существует


<?php } ?>

 
<? get_footer()?>
