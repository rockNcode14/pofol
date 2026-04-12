export interface ProjectFeature {
    title: string;
    description: string;
}

export interface Project {
    icon: string;
    title: string;
    description: string;
    href?: string;
    slug: string;
    longDescription: string;
    techStack: string[];
    features: ProjectFeature[];
    period: string;
    role: string;
    detailUrl?: string;
    detailSections?: { title: string; content: string }[];
}

export const personalProjects: Project[] = [
    {
        icon: '🐟',
        title: '오션스토리',
        description: '낚시 정보 및 게이미피케이션 웹 애플리케이션',
        slug: 'ocean-story',
        longDescription:
            '간조/만조 시간, 날씨, 어종 시즌 정보를 한눈에 확인할 수 있는 낚시 정보 웹 애플리케이션입니다. 랜덤 물고기 미션, 랭킹 시스템 등 게이미피케이션 요소를 결합하여 사용자 참여를 유도하며, AI 챗봇을 통한 낚시 정보 안내 기능도 제공합니다. Docker 기반으로 배포되었으며, Nginx 리버스 프록시를 통해 프론트엔드와 백엔드를 통합 운영합니다.',
        techStack: ['Vue.js', 'NestJS', 'PostgreSQL', 'TypeORM', 'Docker', 'Nginx'],
        features: [
            { title: '조석 정보 캘린더', description: '지역별 간조/만조 시간을 FullCalendar 기반 월별 캘린더로 제공하며, 국립해양조사원 API 연동으로 전국 60여 개 관측소 데이터를 수집합니다.' },
            { title: '실시간 날씨 대시보드', description: '기온, 습도, 강수확률, 풍속, 풍향 등 시간대별 기상 정보를 애니메이션 아이콘과 함께 시각화합니다.' },
            { title: '어종 지도', description: '대한민국 지도 위에 지역별 시즌 어종과 금어기 어종을 표시하며, 어종별 활동 수온, 금어기간, 금지체장 등의 상세 정보를 제공합니다.' },
            { title: '낚시 미션 시스템', description: '사용자에게 5종의 랜덤 어종을 미션으로 부여하고, 잡은 물고기를 체크하여 미션 완료 시 랭킹에 등록되는 게이미피케이션 시스템입니다.' },
            { title: '랭킹 시스템', description: '미션 시작부터 완료까지 소요 시간을 측정하여 실시간 리더보드에 반영하며, 5초 간격 자동 갱신과 GSAP 애니메이션으로 구현했습니다.' },
            { title: 'AI 챗봇', description: 'OpenAI API를 연동한 위치 기반 낚시 정보 챗봇으로, 현재 선택된 지역의 맥락을 반영하여 응답합니다.' }
        ],
        period: '2025',
        role: '풀스택 개발',
        detailSections: [
            {
                title: '조석 데이터 수집 및 캘린더',
                content: '국립해양조사원 OpenAPI를 통해 전국 60여 개 관측소의 조석 예보 데이터를 일별로 수집하여 PostgreSQL에 저장합니다. 사용자는 지역을 선택하여 FullCalendar 기반 월별 캘린더에서 간조/만조 시간을 확인할 수 있습니다.'
            },
            {
                title: '어종 시즌 및 금어기 지도',
                content: '대한민국 지도 위에 지역별로 낚을 수 있는 시즌 어종과 현재 금어기인 어종을 시각적으로 표시합니다. 어종별 활동 적정 수온, 금어기간, 금지체장 등의 상세 정보를 카드 형태로 제공합니다.'
            },
            {
                title: '게이미피케이션 - 미션 & 랭킹',
                content: '사용자에게 등록된 어종 중 5종을 랜덤으로 미션 부여하고, 현장에서 잡은 물고기를 체크하면 미션 완료 처리됩니다. 미션 시작부터 완료까지의 소요 시간을 측정하여 실시간 리더보드에 반영합니다.'
            },
            {
                title: '날씨 대시보드',
                content: '기온, 습도, 이슬점, 강수확률, 강수량, 적설량, 운량, 가시거리, 풍속, 풍향, 돌풍 등 시간대별 상세 기상 데이터를 Lottie 애니메이션 아이콘과 함께 시각화합니다.'
            },
            {
                title: 'Docker 기반 배포',
                content: 'Vue.js 프론트엔드, NestJS 백엔드, PostgreSQL을 각각 Docker 컨테이너로 구성하고, Nginx 리버스 프록시를 통해 프론트엔드(/)와 API(/api)를 통합 라우팅합니다.'
            }
        ]
    },
    {
        icon: '❤️',
        title: '모바일 청첩장',
        description: '직장 동료 모바일 청첩장',
        slug: 'mobile-invitation',
        longDescription:
            '직장 동료를 위해 제작한 모바일 청첩장입니다. 갤러리, 오시는 길, 축의금 송금 기능을 포함합니다.',
        techStack: ['Svelte', 'node.js', 'sqlite'],
        features: [
            { title: '방문록', description: '방문객의 메시지 작성 및 관리' },
            { title: '오시는 길', description: '지도 API 연동 길찾기 기능' },
            { title: '배포 및 SSL인증', description: '가상서버 호스팅 통한 배포 및 SSL 인증' }
        ],
        period: '2025',
        role: '배포 및 데이터베이스 연결',
        detailUrl: 'https://shhs.rockdev.co.kr'
    },
    {
        icon: '📊',
        title: '한의원 재고관리 서비스',
        description: '한약 재고 실시간 추적 및 알림 시스템',
        slug: 'inventory-management',
        longDescription:
            '한의원을 위한 한약 재고 관리 시스템입니다. 입출고 등록·이력 관리, 실시간 재고 현황 조회, 유통기한 임박 알림, 안전재고 미달 경고 등을 대시보드에서 한눈에 확인할 수 있습니다. 기준정보(품목·코드) 관리와 역할 기반 사용자 관리, 엑셀 내보내기 기능도 제공합니다.',
        techStack: ['SvelteKit', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'Tabulator', 'Docker', 'Nginx'],
        features: [
            { title: '대시보드', description: '총 재고량, 유통기한 임박(30일 이내), 안전재고 미달, 활성 품목 수 등 4가지 KPI 카드와 최근 거래 내역을 실시간으로 표시합니다.' },
            { title: '입출고 관리', description: '입고·출고 등록 시 행 단위 CRUD 추적(I/U/D)과 유효성 검증을 수행하며, 일괄 저장 방식으로 처리합니다.' },
            { title: '실시간 재고 현황', description: '품목별 현재 재고량(입고 합계 - 출고 합계)을 실시간 집계하고, 품목 클릭 시 전체 거래 이력을 조회할 수 있습니다.' },
            { title: '유통기한·안전재고 알림', description: '유통기한 임박 품목을 잔여일수별 색상 구분으로 표시하고, 안전재고 미달 품목은 부족량 심각도에 따라 경고합니다.' },
            { title: '기준정보 관리', description: '품목 마스터(품목코드·분류·단위·안전재고)와 계층형 코드 마스터(대분류·소분류)를 관리합니다.' },
            { title: '사용자 관리', description: 'JWT 기반 인증, 역할별 접근 제어(관리자/매니저/사용자), 회원가입 승인 워크플로우를 제공합니다.' }
        ],
        period: '2024',
        role: '풀스택 개발',
        detailSections: [
            {
                title: '실시간 대시보드',
                content: '총 재고량, 유통기한 임박 품목(30일 이내), 안전재고 미달 품목, 활성 품목 수를 KPI 카드로 표시합니다. 유통기한 임박 품목은 잔여일수에 따라 빨강/노랑/초록으로 구분하고, 안전재고 미달 품목은 부족량 심각도별로 색상 경고를 제공합니다.'
            },
            {
                title: '입출고 등록 및 이력 관리',
                content: '입고·출고를 행 단위로 추가·수정·삭제하며, 변경 상태(I/U/D)를 추적하여 일괄 저장합니다. 품목 검색 모달, 단위·분류 드롭다운 등 편의 기능을 제공하며, 등록된 모든 거래는 이력 화면에서 조회 및 엑셀 내보내기가 가능합니다.'
            },
            {
                title: '재고 현황 및 거래 이력 조회',
                content: '품목별 현재 재고량을 입고 합계 - 출고 합계로 실시간 집계하여 표시합니다. 각 품목의 거래 이력 아이콘을 클릭하면 해당 품목의 전체 입출고 내역을 모달로 조회할 수 있습니다.'
            },
            {
                title: '기준정보 관리',
                content: '품목 마스터에서 품목코드, 품목명, 분류, 단위, 안전재고 수량을 관리하고, 계층형 코드 마스터에서 대분류(코드그룹)와 소분류(코드상세)를 좌우 패널로 동기화하여 관리합니다.'
            },
            {
                title: '사용자 관리 및 인증',
                content: 'JWT 토큰 기반 인증과 Axios 인터셉터를 통한 자동 인증 처리를 구현했습니다. 관리자/매니저/사용자 역할별 접근 제어와 회원가입 승인 워크플로우를 제공합니다.'
            }
        ]
    },
    {
        icon: '📱',
        title: '강서구 셔틀버스 모바일앱',
        description: '강서구 셔틀버스 정보 앱',
        slug: 'gangseo-shuttle',
        longDescription:
            '강서구 셔틀버스 노선, 시간표, 실시간 위치 정보를 제공하는 모바일 앱입니다.',
        techStack: ['React Native', 'TypeScript', 'Express'],
        features: [
            { title: '노선 안내', description: '셔틀버스 노선 및 정류장 정보' },
            { title: '시간표 조회', description: '요일별 셔틀버스 시간표 확인' }
        ],
        period: '2024',
        role: '앱 개발'
    },
    {
        icon: '🔧',
        title: '외주 견적 관리 서비스',
        description: '외주 프로젝트 견적·정산·고객 통합 관리 시스템',
        slug: 'outsource-estimate',
        longDescription:
            '외주 프로젝트의 견적서 작성부터 정산, 고객 관리까지 전 과정을 통합 관리하는 서비스입니다. 견적 항목의 계층 구조(상위/하위 항목)를 지원하고, 담당자별 진행률 추적 및 자동 정산 생성 기능을 제공합니다. 고객 전용 포털을 통해 접근코드 기반 로그인으로 진행 상황을 공유하며, 캘린더, 알림 등 협업 기능도 포함합니다.',
        techStack: ['SvelteKit', 'Go', 'PostgreSQL', 'Tailwind CSS', 'JWT'],
        features: [
            { title: '견적서 관리', description: '상위/하위 항목 계층 구조의 견적서를 작성하고, VAT 포함 여부·할인율·단가를 적용한 자동 금액 산출 및 인쇄용 견적서 출력을 지원합니다.' },
            { title: '정산 및 결제 관리', description: '수락된 견적에서 담당자별 정산을 자동 생성하고, 결제 내역 입력·미정산 현황·월별 정산 리포트를 제공합니다.' },
            { title: '항목별 진행률 추적', description: '견적 항목마다 담당자를 배정하고 0~100% 진행률과 상태(대기→진행→검토→완료)를 개별 관리하며 진행 로그를 기록합니다.' },
            { title: '고객 포털', description: '고객사별 접근코드 기반 로그인을 통해 견적 확인, 진행 상황 조회, 자료준비 체크리스트 완료 등의 기능을 제공합니다.' },
            { title: '프리셋 템플릿', description: '자주 사용하는 견적 항목을 개발/디자인/기획 등 카테고리별 프리셋으로 저장하고, 견적서 작성 시 빠르게 추가할 수 있습니다.' },
            { title: '캘린더 및 알림', description: '마감일·미팅·정산 등 이벤트를 캘린더로 관리하고, 알림 시스템을 통해 견적 변경·정산 현황 등을 실시간으로 공유합니다.' }
        ],
        period: '2026',
        role: '풀스택 개발',
        detailUrl: 'https://outs.rockdev.co.kr',
        detailSections: [
            {
                title: '견적서 작성 및 관리',
                content: '견적 항목을 상위/하위 계층 구조로 구성하여 복잡한 프로젝트 견적을 체계적으로 관리합니다. 항목별 단가, 수량, VAT, 할인율을 적용한 자동 금액 계산과 인쇄 전용 페이지를 제공합니다.'
            },
            {
                title: '담당자별 정산 자동화',
                content: '견적이 수락되면 담당자별 정산을 자동 생성하고, 결제 내역을 입력하여 미정산 현황을 실시간으로 파악합니다. 월별·담당자별 정산 리포트를 통해 재무 관리를 지원합니다.'
            },
            {
                title: '고객 전용 포털',
                content: '고객사별 접근코드를 발급하여 별도의 회원가입 없이 포털에 로그인할 수 있습니다. 고객은 자신의 견적서 확인, 항목별 진행 상황 조회, 자료준비 체크리스트 작성을 수행할 수 있습니다.'
            },
            {
                title: '자료준비 체크리스트',
                content: '프로젝트 착수 전 고객에게 필요한 자료/환경설정 항목을 체크리스트로 제공합니다. 고객이 포털에서 직접 완료 체크 및 메모를 남기면 팀에서 준비 현황을 확인할 수 있습니다.'
            },
            {
                title: '역할 기반 접근제어',
                content: 'Owner, Member, Client 세 가지 역할로 접근 권한을 구분합니다. Owner는 팀원 관리·설정을 포함한 전체 기능을, Member는 견적·진행 관리를, Client는 자신의 프로젝트 열람만 가능합니다.'
            }
        ]
    }
];

export const companyProjects: Project[] = [
    {
        icon: '📈',
        title: 'YTCK',
        description: '탱크관리서비스 기준정보 페이지',
        slug: 'ytck-tank',
        longDescription:
            'YTCK 탱크관리서비스의 기준정보 관리 페이지를 개발한 프로젝트입니다. 입사 후 맡은 첫 작업으로, php와 vanilla js로 개발되었습니다.',
        techStack: ['php', 'vanilla js', 'mssql'],
        features: [
            { title: '기준정보 관리', description: '거래처 기준정보 CRUD 기능' },
            { title: '탱크 입고 관리', description: '탱크 입고 정보(파손 시 위치 등) 저장 및 관리' },
        ],
        period: '2023',
        role: '프론트엔드 개발 및 백엔드 개발',
        detailSections: [
            {
                title: '파손 정보 마킹',
                content: '탱크 컨테이너의 위치에 직접 마킹하여 이미지 EXPORT 시 마킹된 탱크 컨테이너를 작업자들이 확인할 수 있도록 구현하였습니다.'
            },
            {
                title: '탱크 컨테이너 기본정보 입력',
                content: '탱크 컨테이너의 기본정보를 입력 및 관리할 수 있는 기능을 개발하였습니다.'
            },
            {
                title: '사진 업로드',
                content: '탱크 컨테이너 관련 사진을 업로드하여 관리할 수 있는 기능을 구현하였습니다.'
            }
        ]
    },
    {
        icon: '🏢',
        title: '대한스텐레스 SCM',
        description: 'SCM 마이그레이션',
        slug: 'daehan-scm',
        longDescription:
            '대한스텐레스의 기존 SCM 시스템을 웹 기반으로 마이그레이션 했습니다. jsp 기반의 프로젝트를 vanilla js와 php로 전환했습니다',
        techStack: ['Java', 'PHP', 'mssql', 'vanilla js'],
        features: [
            { title: 'SCM 마이그레이션', description: '레거시 시스템에서 웹 기반 SCM으로 전환' },
            { title: '데이터 이관', description: '기존 데이터 정합성 유지하며 이관' }
        ],
        period: '2023',
        role: '프론트 개발 및 백엔드 개발'
    },
    {
        icon: '🛒',
        title: '한양공업',
        description: 'MES 개발 및 SAP 인터페이스',
        slug: 'hanyang-mes',
        longDescription:
            `한양공업의 MES 시스템 개발 및 SAP 인터페이스 연동 프로젝트입니다. 기능정의 단계부터 참여하여 프로젝트를 마무리 지었습니다.
            `,
        techStack: ['php', 'vanilla js', 'mssql'],
        features: [
            { title: 'MES 개발', description: '생산 관리 시스템 구축' },
            { title: 'SAP 연동', description: 'SAP RFC를 통한 데이터 인터페이스' }
        ],
        period: '2024',
        role: '백엔드 및 프론트엔드 개발',
        detailSections: [
            {
                title: '작업지시 등록',
                content: 'SAP 업체로부터 제공받은 지시번호 또는 수기 작업지시번호를 등록하여 생산 작업을 관리합니다.'
            },
            {
                title: '공정 라우팅 및 검사항목 등록',
                content: '공정 라우팅을 설정하고, 공정별 검사항목을 등록하여 품질 관리 기준을 수립합니다.'
            },
            {
                title: '생산실적 및 불량 실적 등록',
                content: '현장 작업자가 생산실적 및 불량 실적을 직접 등록할 수 있도록 구현하였습니다.'
            },
            {
                title: '생산오더별 공정현황',
                content: '생산오더 단위로 각 공정의 진행 현황을 조회할 수 있습니다.'
            },
            {
                title: '기타 집계화면',
                content: '생산 데이터를 기반으로 다양한 집계 및 통계 화면을 제공합니다.'
            }
        ]
    },
    {
        icon: '📈',
        title: '쿨스종합건설',
        description: '노임,장비관리,외주관리 페이지 작업',
        slug: 'cools-construction',
        longDescription:
            '쿨스종합건설의 노임, 장비관리, 외주관리 페이지를 개발한 프로젝트입니다. 쿼리 작업을 주로 진행하여 마무리 하였습니다.',
        techStack: ['php', 'vanilla js', 'mssql'],
        features: [
            { title: '노임 관리', description: '인력별 노임 관리 및 정산' },
            { title: '장비/외주 관리', description: '장비 및 외주 업체 관리' }
        ],
        period: '2024',
        role: '프론트엔드 개발'
    },
    {
        icon: '📈',
        title: '다우정밀',
        description: 'MES 개발',
        slug: 'dawoo-mes',
        longDescription: '다우정밀의 MES(제조실행시스템)를 개발한 프로젝트입니다.',
        techStack: ['php', 'vanilla js', 'mssql'],
        features: [
            { title: '생산 관리', description: '생산 계획 및 실적 관리' },
            { title: '품질 관리', description: '공정별 품질 검사 및 관리' },
            { title: '구매자재 관리', description: '자재 입출고 관리' },
            { title: '영업 관리', description: '고객사 관리 등' }
        ],
        period: '2025 - 2026',
        role: '풀스택 개발',
        detailSections: [
            {
                title: '납품계획 등록',
                content: '영업부서는 거래처 상황 및 별도의 공급/수요를 판단하여 납품계획을 등록합니다.'
            },
            {
                title: '생산계획 산정 및 작업지시 편성',
                content: '생산부서는 납품계획을 토대로 생산계획을 산정하고, 생산 계획과 현재고를 통하여 작업지시를 편성합니다.'
            },
            {
                title: '자재 출고요청',
                content: '생산계획에서 작업지시 편성 시 현재고를 파악 후 부족한 경우 자재부서로 자재 출고요청을 진행합니다.'
            },
            {
                title: '현장 작업 및 포장',
                content: '현장 작업자는 태블릿을 가지고 작업지시에 따른 작업을 진행하며, 완료된 작업은 태블릿을 통하여 포장 작업을 실시합니다.'
            },
            {
                title: '출하 처리',
                content: '내수품의 경우 출하처리 되며, 수출품의 경우 인보이스 작업 후 출하 처리합니다.'
            }
        ]
    },
    {
        icon: '📈',
        title: '동일고무벨트',
        description: '웹 유지보수 및 물류 자동화 시스템 유지보수',
        slug: 'dongil-rubber',
        longDescription:
            '동일고무벨트의 MES 유지보수, 타 업체 간 인터페이스 API 유지보수, 물류 자동화 시스템 현장 지원을 수행한 프로젝트입니다. 베트남 현지에 파견되어 물류 자동화 현장 지원 작업을 진행하였습니다.',
        techStack: ['Java', 'Spring', 'mssql', 'jQuery', 'RabbitMQ'],
        features: [
            { title: '인터페이스 API 유지보수', description: '타 업체 간 인터페이스 처리 API 유지보수' },
            { title: '물류 자동화 현장 지원', description: '베트남 파견을 통한 물류 자동화 시스템 현장 지원' },
            { title: 'MES 유지보수', description: '구축된 MES 시스템 버그 수정 및 기능 개선' }
        ],
        period: '2026',
        role: '유지보수'
    },
    {
        icon: '📈',
        title: '개발도감',
        description: '프로젝트 관리 시스템',
        slug: 'dev-dogam',
        longDescription:
            '개발 프로젝트를 체계적으로 관리할 수 있는 프로젝트 관리 시스템입니다.',
        techStack: ['php', 'TypeScript', 'mssql'],
        features: [
            { title: '프로젝트 관리', description: '프로젝트 생성, 일정, 진행률 관리' },
            { title: '팀 협업', description: '팀원 배정 및 업무 분배' }
        ],
        period: '2026',
        role: '풀스택 개발'
    },
    {
        icon: '📈',
        title: 'VECTOR 데이터베이스 RAG API',
        description: '벡터 데이터베이스를 활용한 RAG API 구축',
        slug: 'vector-rag-api',
        longDescription:
            '벡터 데이터베이스를 활용하여 RAG(Retrieval-Augmented Generation) API를 구축한 프로젝트입니다.',
        techStack: ['nodejs', 'llama', 'qdrant', 'linux'],
        features: [
            { title: '벡터 검색', description: '문서 임베딩 기반 유사도 검색' },
            { title: 'RAG 파이프라인', description: 'LLM과 벡터 DB 연동 응답 생성' }
        ],
        period: '2026',
        role: '백엔드 개발'
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return [...personalProjects, ...companyProjects].find((p) => p.slug === slug);
}
