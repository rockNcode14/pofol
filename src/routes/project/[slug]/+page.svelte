<script lang="ts">
	import { base } from '$app/paths';
	import { ProjectDetailHero, ProjectFeatures } from '$lib';

	let { data } = $props();
</script>

<div class="hero-screen">
	<div class="back-link-wrap">
		<a href="{base}/" class="back-link">← 돌아가기</a>
	</div>

	<ProjectDetailHero project={data.project} />
</div>

<ProjectFeatures features={data.project.features} />

{#if !data.project.detailUrl}
	<section id="detail-section" class="detail-section">
		<div class="section-title">상세 설명</div>

		{#if data.project.detailSections && data.project.detailSections.length > 0}
			{#each data.project.detailSections as section}
				<div class="detail-card">
					<div class="detail-card-title">{section.title}</div>
					<div class="detail-card-content">{section.content}</div>
				</div>
			{/each}
		{:else}
			<div class="detail-placeholder">
				준비 중입니다.
			</div>
		{/if}
	</section>
{/if}

<style>
	.hero-screen {
		min-height: calc(100vh - var(--accent-bar-height, 4px) - 80px);
		display: flex;
		flex-direction: column;
	}

	.back-link-wrap {
		padding: var(--spacing-md);
		padding-top: var(--spacing-lg);
	}

	.back-link {
		font-size: 1.25rem;
		font-weight: 900;
		color: var(--color-text);
		transition: color 0.2s;
	}

	.back-link:hover {
		color: var(--color-accent);
	}

	.detail-section {
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

	.detail-card {
		background: linear-gradient(to right, #ffffff, var(--color-card-bg));
		border: 4px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
		padding: var(--spacing-lg);
		margin: var(--spacing-md);
	}

	.detail-card-title {
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--color-text);
		margin-bottom: var(--spacing-sm);
	}

	.detail-card-content {
		font-size: 1.125rem;
		font-weight: 900;
		color: var(--color-text);
		line-height: 1.8;
		white-space: pre-line;
	}

	.detail-placeholder {
		padding: var(--spacing-lg);
		margin: var(--spacing-md);
		font-size: 1.25rem;
		font-weight: 900;
		color: var(--color-text);
		text-align: center;
		background: linear-gradient(to right, #ffffff, var(--color-card-bg));
		border: 4px dashed var(--color-border);
		border-radius: var(--radius-md);
	}

	@media (min-width: 768px) {
		.section-title {
			font-size: 3rem;
		}
	}
</style>
