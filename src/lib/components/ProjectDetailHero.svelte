<script lang="ts">
	import type { Project } from '$lib/data/projects';

	let { project }: { project: Project } = $props();
</script>

<section class="hero">
	<div class="hero-grid">
		<div class="info">
			<h1 class="title">{project.title}</h1>

			<div class="badges">
				<span class="badge">{project.period}</span>
				<span class="badge">{project.role}</span>
			</div>

			<p class="description">{project.longDescription}</p>

			<div class="tech-stack">
				{#each project.techStack as tech}
					<span class="tech-tag">{tech}</span>
				{/each}
			</div>

			<div class="detail-btn-wrap">
				{#if project.detailUrl}
					<a href={project.detailUrl} target="_blank" rel="noopener noreferrer" class="detail-btn">
						상세 보기 →
					</a>
				{:else}
					<button class="detail-btn" onclick={() => document.getElementById('detail-section')?.scrollIntoView({ behavior: 'smooth' })}>
						상세 보기 ↓
					</button>
				{/if}
			</div>
		</div>

		<div class="visual">
			<div class="icon-display">
				<span class="icon">{project.icon}</span>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: var(--spacing-md);
		padding-top: var(--spacing-xl);
	}

	.hero-grid {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-content: start;
		padding-top: 15%;
		gap: var(--spacing-xl);
		background: linear-gradient(to right, #ffffff, var(--color-card-bg));
		border: 4px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
		padding: var(--spacing-xl);
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.title {
		font-size: 2.25rem;
		font-weight: 900;
		color: var(--color-text);
		margin: 0;
	}

	.badges {
		display: flex;
		gap: var(--spacing-sm);
		flex-wrap: wrap;
	}

	.badge {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		border: 4px solid var(--color-border);
		border-radius: var(--radius-sm);
		font-weight: 900;
		font-size: 1rem;
		color: var(--color-text);
	}

	.description {
		font-size: 1.25rem;
		font-weight: 900;
		color: var(--color-text);
		line-height: 1.6;
		margin: 0;
	}

	.tech-stack {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
	}

	.tech-tag {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		background-color: var(--color-accent);
		color: #ffffff;
		border-radius: var(--radius-sm);
		font-weight: 900;
		font-size: 0.9rem;
	}

	.visual {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon-display {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		aspect-ratio: 1;
		max-width: 300px;
		background: linear-gradient(135deg, #ffffff, var(--color-card-bg));
		border: 4px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
	}

	.icon {
		font-size: 8rem;
	}

	.detail-btn-wrap {
		margin-top: var(--spacing-sm);
	}

	.detail-btn {
		display: inline-block;
		padding: 0.75rem 2rem;
		font-size: 1.125rem;
		font-weight: 900;
		color: #fff;
		background: var(--color-accent, #2563eb);
		border: none;
		border-radius: var(--radius-md);
		cursor: pointer;
		text-decoration: none;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.detail-btn:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
	}

	@media (min-width: 1024px) {
		.title {
			font-size: 3rem;
		}

		.description {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		.hero-grid {
			grid-template-columns: 1fr;
		}

		.visual {
			order: -1;
		}

		.icon-display {
			max-width: 200px;
		}

		.icon {
			font-size: 5rem;
		}
	}
</style>
