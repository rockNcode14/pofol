<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '$lib/data/projects';

	let {
		id,
		title,
		subtitle,
		projects
	}: { id: string; title: string; subtitle: string; projects: Project[] } = $props();
</script>

<section {id} class="projects-section">
	<div class="section-title">{title}</div>
	<div class="section-desc">{subtitle}</div>

	<div class="grid">
		{#each projects as project}
			<div class="grid-item">
				<ProjectCard
					icon={project.icon}
					title={project.title}
					description={project.description}
					slug={project.slug}
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	.projects-section {
		padding: var(--spacing-md);
		padding-top: var(--spacing-2xl);
		padding-bottom: 6rem;
		scroll-margin-top: 80px;
	}

	.section-title {
		padding: var(--spacing-md);
		padding-top: var(--spacing-lg);
		font-size: 2.25rem;
		font-weight: 900;
		color: var(--color-text);
	}

	.section-desc {
		padding: var(--spacing-md);
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--color-text);
		max-width: 83%;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.grid-item {
		padding: var(--spacing-md);
	}

	@media (min-width: 768px) {
		.section-title {
			font-size: 3.75rem;
		}

		.section-desc {
			font-size: 2.25rem;
		}
	}

	@media (max-width: 1023px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 767px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
