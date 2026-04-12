<script lang="ts">
	import { HeroSection, ProjectGrid, CareerSection } from '$lib';
	import { personalProjects, companyProjects } from '$lib/data/projects';
</script>

<HeroSection />
<ProjectGrid
	id="toy"
	title="Toy"
	subtitle="직접 기획하고 만든 사이드 프로젝트들입니다."
	projects={personalProjects}
/>
<ProjectGrid
	id="company"
	title="Company"
	subtitle="회사에서 참여하고 기여한 프로젝트들입니다."
	projects={companyProjects}
/>
<CareerSection />
