<?php 
add_theme_support( 'post-thumbnails');
// подключаем стили и скрипты
add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );
$get_template_directory_uri = get_template_directory_uri();

function theme_name_scripts() {
  wp_enqueue_style( 'common-styles', get_template_directory_uri() . '/css/styles.css', [], date("HmsdmY"), "all" );
  wp_enqueue_style( 'grid', get_template_directory_uri() . '/css/grid.css', [], null, "all" );
  wp_enqueue_style( 'slick', get_template_directory_uri() . '/css/slick.css', [], null, "all" );
  wp_enqueue_style( 'slick-theme', get_template_directory_uri() . '/css/slick-theme.css', [], null, "all" );
  
  wp_enqueue_style( 'animate', get_template_directory_uri() . '/css/animate.css', [], null, "all" );
  wp_enqueue_style( 'css', get_template_directory_uri() . '/css/css.css', [], date("HmsdmY"), "all" );
  wp_enqueue_style( 'custom', get_template_directory_uri() . '/css/custom.css', [], null, "all" );
  wp_enqueue_style( 'flipclock', get_template_directory_uri() . '/css/flipclock.css', [], null, "all" );
  wp_enqueue_style( 'foot', get_template_directory_uri() . '/css/foot.css', [], null, "all" );
  wp_enqueue_style( 'fullpage', get_template_directory_uri() . '/css/fullpage.css', [], null, "all" );
  wp_enqueue_style( 'head', get_template_directory_uri() . '/css/head.css', [], null, "all" );
  wp_enqueue_style( 'highslide', get_template_directory_uri() . '/css/highslide.css', [], null, "all" );
  wp_enqueue_style( 'jquery-ui-1.10.2.custom.min', get_template_directory_uri() . '/css/jquery-ui-1.10.2.custom.min.css', [], null, "all" );
  wp_enqueue_style( 'jquery.arcticmodal-0.3', get_template_directory_uri() . '/css/jquery.arcticmodal-0.3.css', [], null, "all" );
  wp_enqueue_style( 'jquery.qtip.min', get_template_directory_uri() . '/css/jquery.qtip.min.css', [], null, "all" );
  wp_enqueue_style( 'lytebox', get_template_directory_uri() . '/css/lytebox.css', [], null, "all" );
  wp_enqueue_style( 'mobile', get_template_directory_uri() . '/css/mobile.css', [], null, "all" );
  wp_enqueue_style( 'owl.carousel', get_template_directory_uri() . '/css/owl.carousel.css', [], null, "all" );
  wp_enqueue_style( 'owl.theme.default.min', get_template_directory_uri() . '/css/owl.theme.default.min.css', [], null, "all" );
  wp_enqueue_style( 'reset', get_template_directory_uri() . '/css/reset.css', [], null, "all" );
  wp_enqueue_style( 'shop', get_template_directory_uri() . '/css/shop.css', [], null, "all" );
  wp_enqueue_style( 'showobj', get_template_directory_uri() . '/css/showobj.css', [], null, "all" );
  wp_enqueue_style( 'simple', get_template_directory_uri() . '/css/simple.css', [], null, "all" );
  wp_enqueue_style( 'slick-theme', get_template_directory_uri() . '/css/slick-theme.css', [], null, "all" );
  wp_enqueue_style( 'slick', get_template_directory_uri() . '/css/slick.css', [], null, "all" );
  wp_enqueue_style( 'style', get_template_directory_uri() . '/css/style.css', [], null, "all" );
  wp_enqueue_style( 'style(1)', get_template_directory_uri() . '/css/style(1).css', [], null, "all" );
  wp_enqueue_style( 'style(2)', get_template_directory_uri() . '/css/style(2).css', [], null, "all" );
//   wp_enqueue_style( 'styles', get_template_directory_uri() . '/css/styles.css', [], null, "all" );
  wp_enqueue_style( 'templatestyle', get_template_directory_uri() . '/css/templatestyle.css', [], null, "all" );
  wp_enqueue_style( 'text', get_template_directory_uri() . '/css/text.css', [], null, "all" );
  
  
  wp_enqueue_script( 'common', get_template_directory_uri() . '/js/common.js', array(), '1.0.0', true );
  wp_enqueue_script( 'slick', get_template_directory_uri() . '/js/slick.min.js', array(), '1.0.0', true );


  wp_enqueue_script( 'flipclock', get_template_directory_uri() . '/js/flipclock.js', array(), '1.0.0', true );
  wp_enqueue_script( 'head', get_template_directory_uri() . '/js/head.js', array(), '1.0.0', true );
  wp_enqueue_script( 'highslide', get_template_directory_uri() . '/js/highslide.js', array(), '1.0.0', true );
  wp_enqueue_script( 'jquery-latest.min', get_template_directory_uri() . '/js/jquery-latest.js', array(), '1.0.0', true );
  wp_enqueue_script( 'jquery-ui-1.10.2.custom.min', get_template_directory_uri() . '/js/jquery-ui-1.10.2.custom.min.js', array(), '1.0.0', true );
  wp_enqueue_script( 'jquery.arcticmodal-0.3.min', get_template_directory_uri() . '/js/jquery.arcticmodal-0.3.min.js', array(), '1.0.0', true );
  wp_enqueue_script( 'jquery.mousewhell.min', get_template_directory_uri() . '/js/jquery.mousewhell.js', array(), '1.0.0', true );
  wp_enqueue_script( 'jquery.qtip.min', get_template_directory_uri() . '/js/jquery.qtip.min.js', array(), '1.0.0', true );
  wp_enqueue_script( 'jquery.scrollme', get_template_directory_uri() . '/js/jquery.scrollme.js', array(), '1.0.0', true );
  wp_enqueue_script( 'jquery.waypoints', get_template_directory_uri() . '/js/jquery.waypoints.js', array(), '1.0.0', true );
  wp_enqueue_script( 'lytebox', get_template_directory_uri() . '/js/lytebox.js', array(), '1.0.0', true );
  wp_enqueue_script( 'owl.carousel', get_template_directory_uri() . '/js/owl.carousel.js', array(), '1.0.0', true );
  wp_enqueue_script( 'placeholders.jquery.min', get_template_directory_uri() . '/js/placeholders.jquery.min.js', array(), '1.0.0', true );
  wp_enqueue_script( 'script', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true );
  wp_enqueue_script( 'share', get_template_directory_uri() . '/js/share.js', array(), '1.0.0', true );
  wp_enqueue_script( 'shop', get_template_directory_uri() . '/js/shop.js', array(), '1.0.0', true );
  wp_enqueue_script( 'slick.min', get_template_directory_uri() . '/js/slick.min.js', array(), '1.0.0', true );
  wp_enqueue_script( 'spxl', get_template_directory_uri() . '/js/spxl.js', array(), '1.0.0', true );
  wp_enqueue_script( 'tag', get_template_directory_uri() . '/js/tag.js', array(), '1.0.0', true );
  wp_enqueue_script( 'top', get_template_directory_uri() . '/js/top.js', array(), '1.0.0', true );
  wp_enqueue_script( 'wb.parallax.min', get_template_directory_uri() . '/js/wb.parallax.min.js', array(), '1.0.0', true );

}
// Отключаем Guttengerg
if( 'disable_gutenberg' ){
    remove_theme_support( 'core-block-patterns' ); // WP 5.5
  
    add_filter( 'use_block_editor_for_post_type', '__return_false', 100 );
  
    // отключим подключение базовых css стилей для блоков
    // ВАЖНО! когда выйдут виджеты на блоках или что-то еще, эту строку нужно будет комментировать
    remove_action( 'wp_enqueue_scripts', 'wp_common_block_scripts_and_styles' );
  
    // Move the Privacy Policy help notice back under the title field.
    add_action( 'admin_init', function(){
      remove_action( 'admin_notices', [ 'WP_Privacy_Policy_Content', 'notice' ] );
      add_action( 'edit_form_after_title', [ 'WP_Privacy_Policy_Content', 'notice' ] );
    } );
  }
  
  add_filter( 'use_block_editor_for_post_type', 'my_disable_gutenberg', 10, 2 );
  
  function my_disable_gutenberg( $current_status, $post_type ) {
  
    $disabled_post_types = [ 'book', 'movie' ];
  
    return ! in_array( $post_type, $disabled_post_types, true );
  }
?>