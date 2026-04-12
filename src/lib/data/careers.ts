export interface Career {
	company: string;
	role: string;
	period: string;
	description: string;
}

export const careers: Career[] = [

	{
		company: '쿨스',
		role: '주임',
		period: '2023.07 - 현재',
		description: '주요 서비스 프론트엔드 개발 및 유지보수를 담당하고 있습니다.'
	},
	{
		company: '산녹',
		role: '팀장',
		period: '2024.07 - 현재',
		description: '사이드 프로젝트 팀으로써 팀원 관리 및 프로젝트 기획, 개발을 담당하고 있습니다. 새로운 기술을 사용하고 팀원들과 공유합니다. 때때로 외주도 맡아서 진행합니다.'
	},
	{
		company: '그린컴퓨터아카데미',
		role: '학생',
		period: '2022.09 - 2023.05',
		description: '웹 프론트엔드 개발을 주로 배웠습니다.'
	},
	{
		company: '울산제일일보',
		role: '편집국 취재기자',
		period: '2017.07 - 2017.12',
		description: '울산 중구와 북구를 주요 취재 지역으로 삼아 다양한 기사와 보도를 담당했습니다.'
	},
];
