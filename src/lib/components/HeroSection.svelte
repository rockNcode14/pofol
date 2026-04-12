<section class="hero">
	<div class="image-wrap">
		<img
			src="/profile.jpeg"
			alt="Profile"
			class="profile-image"
		/>
	</div>

	<p class="intro">
		안녕하세요, <span class="name">이원기</span>입니다. 
		<br>
		요즘은 AI를 사용해보면서 개발하는 것을<br> 즐기고 있습니다. RAG 기반의 챗봇 개발에 관심이 많습니다.
	</p>
</section>

<style>
	.hero {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: var(--spacing-2xl) var(--spacing-md);
		text-align: center;
	}

	.image-wrap {
		text-align: center;
		margin-bottom: var(--spacing-xl);
	}

	.profile-image {
		display: inline-block;
		width: 320px;
		height: 320px;
		border-radius: 50%;
		border: 8px solid var(--color-border);
		object-fit: cover;
		transition: border-color 0.3s ease;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	.profile-image:hover {
		border-color: var(--color-accent);
	}

	.intro {
		font-size: 1.875rem;
		font-weight: 900;
		color: var(--color-text);
		line-height: 1.4;
		padding: var(--spacing-xl);
		margin-top: var(--spacing-lg);
	}

	.name {
		color: var(--color-accent);
	}

	@media (min-width: 1024px) {
		.profile-image {
			width: 384px;
			height: 384px;
		}

		.intro {
			font-size: 3rem;
		}
	}

	@media (max-width: 640px) {
		.profile-image {
			width: 256px;
			height: 256px;
		}

		.intro {
			font-size: 1.5rem;
			padding: var(--spacing-sm);
		}
	}
</style>
