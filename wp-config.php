<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'calcul_brut_net' );

/** MySQL database username */
define( 'DB_USER', 'master' );

/** MySQL database password */
define( 'DB_PASSWORD', 'master' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',&UAai)DdQ4#LGba$^YH;taUP({_6E,aw?b#&{yRgh]&:-}*M+%gY}6(RYPo$=uL' );
define( 'SECURE_AUTH_KEY',  'De|&dk$tq[Os8z*5Kfa4sjJ=ClB]dBsF93<vv~ZMy[st!!j/_G`p@/<#}F3/d238' );
define( 'LOGGED_IN_KEY',    'hCvKUhZ_8S[>KZUy3rD=,p$VY((f%zxY?%gAp/=1ehYz%jquuM_2mjsb4?gv< ou' );
define( 'NONCE_KEY',        '5}T,J4a2Nc{1dE5u(&C9yFr=GHLXR@$8 GJdT+}`*mDZNO`H]5dv]$uiATd- A[z' );
define( 'AUTH_SALT',        '/^L}V{)L6><T>ze%@&W11ShJ*>x5J`(u64qHuw-Ntj),QnI16Z*A lCe{e|N#NlG' );
define( 'SECURE_AUTH_SALT', 'nWpX[Z79JN.Ro#jcjR5AwNC$ .``31&^|+EJR]jBJ]>57M%-w>LWyi0uY)yW}n&(' );
define( 'LOGGED_IN_SALT',   '4>^]4U!UHj+KEUTI}9WAk(pjS+bWZ;b@xJ;5/eC#y+:-Ftbj(1;m_MouTA2qWqhU' );
define( 'NONCE_SALT',       '.67=N.xtlQmyhE-[{!BMs NmEmFEqqoV;6{*PJlM!ruTIIDvEemsG,PrN+2%MHS[' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
