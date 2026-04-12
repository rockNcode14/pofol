<script lang="ts">
	import type { ProjectFeature } from '$lib/data/projects';

	let { features }: { features: ProjectFeature[] } = $props();
</script>

<section class="features-section">
	<div class="section-title">구현 기능</div>

	<div class="features-grid">
		{#each features as feature}
			<div class="feature-card">
				<div class="feature-title">{feature.title}</div>
				<div class="feature-desc">{feature.description}</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.features-section {
		padding: var(--spacing-md);
		padding-top: var(--spacing-xl);
		padding-bottom: var(--spacing-2xl);
	}

	.section-title {
		padding: var(--spacing-md);
		font-size: 2.25rem;
		font-weight: 900;
		color: var(--color-text);
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--spacing-md);
		padding: var(--spacing-md);
	}

	.feature-card {
		background: linear-gradient(to right, #ffffff, var(--color-card-bg));
		border: 4px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
		padding: var(--spacing-lg);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.feature-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
	}

	.feature-title {
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--color-text);
		margin-bottom: var(--spacing-sm);
	}

	.feature-desc {
		font-size: 1.125rem;
		font-weight: 900;
		color: var(--color-text);
		line-height: 1.5;
	}

	@media (min-width: 768px) {
		.section-title {
			font-size: 3rem;
		}
	}

	@media (max-width: 768px) {
		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
