<?php get_header();?>
<div class="main-content">


    <article id="post-<?php the_ID(); ?>" <?php post_class('container'); ?>>

        <div class="content">

            <header class="entry-header alignwide">
                <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
            </header><!-- .entry-header -->

            <div class="entry-content">
                <?php

                    the_content();

                ?>
            </div><!-- .entry-content -->

            <footer class="entry-footer default-max-width">

            </footer><!-- .entry-footer -->

        </div>

    </article><!-- #post-<?php the_ID(); ?> -->


</div>
<?php get_footer()?>