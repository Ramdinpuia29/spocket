<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col">
	<div class="flex justify-between">
		<div class="form-control">
			<div class="input-group">
				<input type="text" placeholder="Search…" class="input outline-none border-none" />
				<button class="btn btn-square btn-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
			</div>
		</div>
		<a href="posts/new" class="btn btn-primary mb-4 float-right">Create post</a>
	</div>
	{#if data.posts?.length === 0}
		<p>No posts available</p>
	{:else}
		<div class="overflow-x-auto">
			<table class="table w-full">
				<!-- head -->
				<thead>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Content</th>
					</tr>
				</thead>
				<tbody>
					{#each data.posts as post}
						<tr>
							<th>{post.id}</th>
							<td>{post.title}</td>
							<td>{post.content}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>
