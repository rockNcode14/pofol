<script>
	import { base } from '$app/paths';
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

		<a href="{base}/#contact" class="contact-btn">연락하기</a>
	</div>

	<!-- Mobile: logo only -->
	<div class="navbar-mobile">
		<a href="{base}/#top" class="logo">YN</a>
	</div>
</nav>

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
