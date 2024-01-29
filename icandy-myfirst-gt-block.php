<?php

/**
 * @package icandymygtblock
 */

/*
/*
 * Plugin Name: Icandy First Gutenberg Block
 * Plugin URI: https://icandevelop.com/plugins/phonepe-by-icandevelop
 * Description: My first Guterberg block
 * Author: I Can Develop
 * Author URI: https://icandevelop.com
 * Version: 1.0.0
 * License: GPLv2 or later
 * Text Domain: icandy-gt-block
 */

 // If the file is called directly! abort !!
defined('ABSPATH') or die ("Hey Dud! You are not in the right place.");
class IcandyMyFirstGTBlock{
    function __construct()
    {
        add_action('enqueue_block_editor_assets' , array($this, 'blockAccets'));
    }

    function blockAccets(){
        wp_enqueue_script( 'myFirstBlock', plugin_dir_url( __FILE__ ) . 'build/index.js', array('wp-blocks','wp-element') );
    }
}

$ourFirstGTBlock = new IcandyMyFirstGTBlock();