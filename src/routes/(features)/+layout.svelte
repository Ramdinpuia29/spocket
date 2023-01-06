<script lang="ts">
	import '../../app.postcss';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="drawer drawer-mobile ">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col bg-neutral">
		<!-- Page content here -->
		<Navbar />
		<div class="p-4">
			<slot />
		</div>
	</div>
	<div class="drawer-side bg-neutral">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			<!-- Sidebar content here -->
			<h2 class="text-xl text-center p-2 bg-neutral rounded-xl">SveltePocket</h2>
			<li class="menu-title">
				<span>Posts</span>
			</li>
			<li>
				<a href="/posts">Posts</a>
			</li>
		</ul>
	</div>
</div>
