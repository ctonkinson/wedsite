<div class="page-content">
	<?php if($page['logo']) : ?>
		<a class="logo" href="/"><?php include TEMPLATEPATH.'/incs/logo.php'; ?></a> 
	<?php endif; ?>
	<?php if($page['main_image']) : ?>
		<div class="page-content-background-outer">
			<?php if($page['main_content']) : ?>
				<div class="page-main-content">
					<?= $page['main_content']; ?>
				</div>
			<?php endif; ?>
			<img src="<?= $page['main_image']['url']; ?>" class="page-background-image">
			<div class="page-content-background" >
			</div>
			<a class="mouse" href="#introduction">
				<div class="mouse-wheel"><span class="wheel"></span><span class="arrow"></span><span class="arrow"></span></div>
			</a>
		</div>
	<?php else : ?>
		<?php if($page['main_content']) : ?>
			<div class="page-main-content standard">
				<?= $page['main_content']; ?>
			</div>
		<?php endif; ?>
	<?php endif; ?>
	<?php if($page['secondary_content']) : ?>
	<div class="sub-content" id="introduction">
		<?= $page['secondary_content']; ?>
	</div>
	<?php endif; ?>
	<?php if($page['repeater_content']) : ?>
		<div class="container-fluid repeater-content-outer">
			<?php 
				$l = 0;
				foreach ($page['repeater_content'] as $r) : 
					$l++;
					if($l % 2) {
						$class1 = "order-1";
						$class2 = "order-2";
					} else {
						$class1 = "order-2";
						$class2 = "order-1";
					}
					?>
					<div class="row">
						<div class="col-md-6 repeater-content <?= $class1; ?>">
							<?= $r['content']; ?>
						</div>
						<div class="dotted-line"></div>
						<div class="col-md-6 repeater-image <?= $class2; ?>">
							<?php if($r['images']) : ?>
								<div class="repeater-image-container">
									<img src="<?= $r['images']['url']; ?>">
								</div>
							<?php endif; ?>
						</div>
					</div>
			<?php endforeach; ?>
		</div>
	<?php endif; ?>
	<?php if($page['map']) : ?>
		<?php include TEMPLATEPATH.'/incs/map.php'; ?>
	<?php endif; ?>
	<div class="footer">
		&copy; 2021 C & J Wedding
	</div>
</div>