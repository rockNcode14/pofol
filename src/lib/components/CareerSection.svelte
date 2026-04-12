<script lang="ts">
	import { careers } from '$lib/data/careers';
</script>

<section id="career" class="career-section">
	<div class="section-title">Career</div>
	<div class="section-desc">지금까지의 경력 사항입니다.</div>

	<div class="timeline">
		{#each careers as career}
			<div class="career-item">
				<div class="period">{career.period}</div>
				<div class="content">
					<div class="company">{career.company}</div>
					<div class="role">{career.role}</div>
					<p class="desc">{career.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.career-section {
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

	.timeline {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		padding: var(--spacing-md);
		margin-top: var(--spacing-lg);
	}

	.career-item {
		display: flex;
		gap: var(--spacing-lg);
		padding: var(--spacing-lg);
		background: linear-gradient(to right, #ffffff, var(--color-card-bg));
		border: 4px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.career-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
	}

	.period {
		font-size: 1rem;
		font-weight: 900;
		color: var(--color-accent);
		white-space: nowrap;
		min-width: 160px;
	}

	.content {
		flex: 1;
	}

	.company {
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--color-text);
	}

	.role {
		font-size: 1.125rem;
		font-weight: 900;
		color: var(--color-text);
		opacity: 0.7;
		margin-top: 0.25rem;
	}

	.desc {
		margin-top: 0.5rem;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
		line-height: 1.6;
	}

	@media (min-width: 768px) {
		.section-title {
			font-size: 3.75rem;
		}

		.section-desc {
			font-size: 2.25rem;
		}

		.company {
			font-size: 1.875rem;
		}

		.role {
			font-size: 1.25rem;
		}

		.period {
			font-size: 1.125rem;
		}
	}

	@media (max-width: 640px) {
		.career-item {
			flex-direction: column;
			gap: var(--spacing-xs);
		}

		.period {
			min-width: auto;
		}
	}
</style>
