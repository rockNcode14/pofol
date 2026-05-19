<script>
	import { base } from '$app/paths';

	let showModal = $state(false);
</script>

<nav>
	<div class="accent-bar"></div>
	<div class="navbar">
		<a href="{base}/#top" class="logo">YN</a>

		<div class="nav-links">
			<a href="{base}/#toy">Toy</a>
			<a href="{base}/#company">Company</a>
			<a href="{base}/#career">Career</a>
		</div>

		<button class="contact-btn" onclick={() => showModal = true}>연락하기</button>
	</div>

	<!-- Mobile: logo only -->
	<div class="navbar-mobile">
		<a href="{base}/#top" class="logo">YN</a>
	</div>
</nav>

{#if showModal}
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="modal-overlay" onclick={() => showModal = false} onkeydown={(e) => e.key === 'Escape' && (showModal = false)}>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="modal" onclick={(e) => e.stopPropagation()} onkeydown={() => {}}>
		<button class="modal-close" onclick={() => showModal = false}>&times;</button>
		<h2 class="modal-title">Contact</h2>
		<div class="modal-info">
			<div class="info-row">
				<span class="info-label">Name</span>
				<span class="info-value">이원기</span>
			</div>
			<div class="info-row">
				<span class="info-label">Email</span>
				<a href="mailto:dnjs1490@gmail.com" class="info-value info-link">dnjs1490@gmail.com</a>
			</div>
			<div class="info-row">
				<span class="info-label">Phone</span>
				<a href="tel:01090481490" class="info-value info-link">010-9048-1490</a>
			</div>
		</div>
	</div>
</div>
{/if}

<style>
	nav {
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: var(--color-white);
	}

	.accent-bar {
		height: var(--accent-bar-height);
		background-color: var(--color-accent);
	}

	.navbar {
		display: flex;
		align-items: center;
		max-width: var(--max-width);
		margin: 0 auto;
		padding: var(--spacing-lg) var(--spacing-md);
	}

	.navbar-mobile {
		display: none;
	}

	.logo {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 4px solid var(--color-border);
		border-radius: var(--radius-sm);
		font-weight: 900;
		font-size: 1.5rem;
		color: var(--color-text);
		padding: 0.5rem;
		user-select: none;
		margin-right: var(--spacing-lg);
	}

	.nav-links {
		display: flex;
		gap: var(--spacing-lg);
	}

	.nav-links a {
		font-size: 1.5rem;
		font-weight: 900;
		background-image: linear-gradient(120deg, #ff3e00 0%, #ff3e00 100%);
		background-repeat: no-repeat;
		background-size: 100% 0.25em;
		background-position: 0 89%;
		padding: 0 3px;
		transition: background-size 0.2s ease-in;
	}

	.nav-links a:hover {
		background-size: 100% 100%;
	}

	@media (min-width: 1280px) {
		.nav-links a {
			font-size: 1.875rem;
		}

		.logo {
			font-size: 1.875rem;
			margin-right: var(--spacing-xl);
		}

		.contact-btn {
			font-size: 1.875rem;
			padding: 0.5rem 2rem;
		}
	}

	.contact-btn {
		margin-left: auto;
		padding: 0.5rem 1.5rem;
		border: 4px solid var(--color-border);
		border-radius: var(--radius-sm);
		font-weight: 900;
		font-size: 1.5rem;
		transition: background-color 0.3s, color 0.3s;
	}

	.contact-btn:hover {
		background-color: var(--color-border);
		color: var(--color-white);
	}

	.modal-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 200;
	}

	.modal {
		background: var(--color-white);
		border-radius: var(--radius-md);
		padding: 2.5rem;
		min-width: 360px;
		max-width: 90vw;
		position: relative;
		border: 4px solid var(--color-border);
	}

	.modal-close {
		position: absolute;
		top: 0.75rem;
		right: 1rem;
		background: none;
		border: none;
		font-size: 2rem;
		cursor: pointer;
		color: var(--color-text);
		line-height: 1;
	}

	.modal-title {
		font-size: 1.75rem;
		font-weight: 900;
		margin-bottom: 1.5rem;
		color: var(--color-text);
	}

	.modal-info {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.info-row {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.info-label {
		font-weight: 900;
		font-size: 1rem;
		min-width: 60px;
		color: var(--color-accent);
	}

	.info-value {
		font-size: 1rem;
		color: var(--color-text);
	}

	.info-link {
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.info-link:hover {
		color: var(--color-accent);
	}

	@media (max-width: 768px) {
		.navbar {
			display: none;
		}

		.navbar-mobile {
			display: flex;
			justify-content: center;
			padding: var(--spacing-sm) var(--spacing-md);
		}
	}
</style>
