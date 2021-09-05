<?php get_header(); ?>
<style type="text/css">
	/* latin-ext */
	@font-face {
	  font-family: 'Isabel';
	  font-style: normal;
	  src: url("/wp-content/themes/cj/assets/fonts/isabel-light-webfont.woff2") format("woff2"),
	       url("/wp-content/themes/cj/assets/fonts/isabel-light-webfont.woff") format("woff");
	}
	/* latin-ext */
	@font-face {
	  font-family: 'Texta';
	  font-style: normal;
	  src: url("/wp-content/themes/cj/assets/fonts/texta-book-webfont.woff2") format("woff2"),
	       url("/wp-content/themes/cj/assets/fonts/texta-book-webfont.woff") format("woff");
	}
	.logo svg {
		width: 60px;
		height: 60px;
	}
	h1 {
		font-family: 'Isabel';
		color: #fff;
	}
	p {
		font-family: 'Texta';
		text-transform: uppercase;
		letter-spacing: 1.5px;
		color: #fff;
	}
	.page-not-found-container {
		height: 100%;
		min-height: 600px;
		background: #1e5799;
    	background: linear-gradient(-45deg,#56bda2,#2494a2 50%,#37627c);
    	display: flex;
	    align-items: center;
	    justify-content: center;
	    flex-direction: column;
	}
</style>
<div class="page-not-found-container">
	<a href="/" class="logo">
		<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
	        <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
	        <path d="M1350 2884 c-340 -43 -610 -173 -840 -404 -204 -204 -329 -439 -387
	        -726 -24 -123 -24 -385 0 -508 58 -287 183 -522 387 -726 203 -204 438 -329
	        726 -387 135 -26 395 -24 534 6 275 59 502 182 700 381 204 203 329 438 387
	        726 24 123 24 385 0 508 -58 287 -183 522 -387 726 -202 203 -441 330 -721
	        385 -82 16 -329 28 -399 19z m410 -123 c508 -116 886 -500 996 -1013 25 -116
	        25 -380 0 -496 -112 -520 -497 -906 -1016 -1018 -118 -25 -381 -26 -498 0
	        -392 84 -712 324 -892 668 -57 110 -100 228 -126 350 -25 116 -25 380 0 496
	        85 397 329 719 682 899 110 57 253 105 359 122 39 6 81 13 95 15 60 11 319 -4
	        400 -23z"></path>
	        <path d="M1130 2015 c-186 -53 -299 -205 -316 -427 -12 -158 33 -315 119 -413
	        121 -138 371 -177 527 -82 73 45 140 120 140 157 0 18 -18 11 -25 -10 -10 -33
	        -96 -109 -154 -138 -48 -23 -69 -27 -142 -27 -75 0 -92 4 -144 30 -142 73
	        -213 275 -186 526 23 212 97 324 240 366 114 33 278 -8 322 -81 26 -42 24 -57
	        -11 -91 -40 -39 -39 -91 2 -114 66 -37 123 37 98 128 -16 61 -89 132 -166 161
	        -77 29 -225 37 -304 15z"></path>
	        <path d="M1880 2010 c0 -5 13 -10 28 -10 15 0 33 -5 40 -12 9 -9 12 -156 12
	        -600 0 -630 0 -631 -49 -658 -33 -17 -78 -11 -108 15 l-28 24 23 40 c12 22 22
	        48 22 59 0 26 -31 52 -62 52 -58 0 -84 -90 -42 -147 38 -50 81 -68 164 -68 88
	        0 142 23 178 75 l22 33 0 574 c0 377 4 581 10 594 8 13 21 19 45 19 19 0 35 5
	        35 10 0 6 -55 10 -145 10 -90 0 -145 -4 -145 -10z"></path>
	        </g>
	    </svg>
	</a>
	<h1>404</h1>
	<p>Page not found</p>
</div>
<?php get_footer(); ?>