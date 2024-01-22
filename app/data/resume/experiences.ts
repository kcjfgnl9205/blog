import { SKILL } from '@/types'

export const experiences = [
  {
    companyName: 'ニューテック株式会社(일본)',
    date: '2020. 04 ~ 2023. 03',
    projects: [
      {
        name: 'FAX시스템',
        date: '2022. 09 - 2023. 03 (7개월)',
        stacks: [
          { name: '.NET Framework', flg: SKILL.BACK },
          { name: 'SQL Server', flg: SKILL.BACK },
          { name: 'Git', flg: SKILL.BACK },
        ],
        detail: [{ text: '시스템 유지보수 및 기능 구현' }],
      },
      {
        name: '학생정보관리시스템',
        date: '2021. 04 ~ 2022. 08 (17개월)',
        stacks: [
          { name: 'PHP', flg: SKILL.BACK },
          { name: 'Java', flg: SKILL.BACK },
          { name: 'DB2', flg: SKILL.BACK },
          { name: 'Git', flg: SKILL.BACK },
        ],
        detail: [{ text: '시스템 유지보수 및 기능 구현' }],
      },
      {
        name: '온라인 수강 신청 시스템',
        date: '2020. 10 ~ 2021. 03 (6개월)',
        detail: [{ text: '마이페이지 UI 및 기능 설계' }],
      },
    ],
  },
]
