<script lang="ts">
	let {
		icon,
		title,
		description,
		slug
	}: { icon: string; title: string; description: string; slug: string } = $props();
</script>

<a href="/project/{slug}" class="card-link">
	<div class="card">
		<div class="icon-wrap">
			<span class="icon">{icon}</span>
		</div>
		<div class="text-wrap">
			<span class="title">{title}</span>
			<div class="description">{description}</div>
		</div>
	</div>
</a>

<style>
	.card-link {
		display: block;
	}

	.card {
		cursor: pointer;
		text-align: center;
		background: linear-gradient(to right, #ffffff, var(--color-card-bg));
		padding: var(--spacing-md);
		width: 100%;
		border: 4px solid var(--color-border);
		border-radius: var(--radius-md);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.card:hover {
		transform: translateY(-6px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
	}

	.icon-wrap {
		width: 100%;
		text-align: center;
	}

	.icon {
		display: inline-block;
		font-size: 3.5rem;
		margin-top: 0.5rem;
		margin-bottom: 0.25rem;
	}

	.text-wrap {
		margin-top: 0.5rem;
	}

	.title {
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--color-text);
	}

	.description {
		margin-top: 0.25rem;
		font-size: 1.25rem;
		font-weight: 900;
		color: var(--color-text);
	}

	@media (min-width: 1024px) {
		.title {
			font-size: 1.875rem;
		}

		.description {
			font-size: 1.5rem;
		}
	}
</style>
