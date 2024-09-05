<?php get_header(); ?>


<div class="main_container">
    <div class="clear"></div>


    <?php
/* Start the Loop */
while ( have_posts() ) :
  the_post();

  $current_post_id = get_the_ID();
?>


    <div class="dynatitle"><a href="https://istoki-volgi.ru/">Главная страница</a>&nbsp;<span>»</span>&nbsp;<a href="https://istoki-volgi.ru/novosti/">Новости</a> <span>»</span> Подведены итоги работы IV Онлайн-съезда молодых работников Совета музеев Приволжского федерального округа «Время молодых»</div>
    <div id="podvedenyi-itogi-rabotyi-IV-onlayn-syezda-molodyih-rabotnikov-soveta-muzeev-privoljskogo-federalnogo-okruga-vremya-molodyih" data-tooltip="">
        <div style="float:left;"><small>10.04.2024</small>
            <div class="hr1"></div>
        </div>
        <div style="float:right;"><a style="text-decoration:none;" href="https://istoki-volgi.ru/novosti">Все новости</a>
            <div class="hr1"></div>
        </div>
        <div class="clear"></div>
        <div class="headerfon marged">
            <?php the_title( '<h1 class="pagetitle" style="display: block; margin: 0em 2em; padding: 0em;">', '</h1>' ); ?>            
        </div>
        <div class="itemtext">
            <div class="itemmainimg">
                <?php $thumbnail_image = get_the_post_thumbnail($current_post_id, 'full') ?>
                <?= $thumbnail_image ?>              
            </div>
             
            <?php
          the_content();        
        ?>

        </div>


    </div>

<?php endwhile; ?>
    <div class="clear"></div>
    
</div><!-- main container -->
<?php get_footer(); ?>