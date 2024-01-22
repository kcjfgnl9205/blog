import { SKILL, ResumePersnalProject } from '@/types'

export const projects: ResumePersnalProject[] = [
  {
    name: 'ON&OFF',
    description: '취미 및 관심사 기반 소셜 네트워크 서비스',
    github: 'https://github.com/Team-OnAndOff',
    demo: 'http://kdt-sw-7-team05.elicecoding.com',
    date: '2023. 12. 11 ~ 2023. 12. 30',
    members: 'BackEnd 2명, FrontEnd 4명',
    stacks: [
      { name: 'React', flg: SKILL.FRONT },
      { name: 'TypeScript', flg: SKILL.FRONT },
      { name: 'TailwindCSS', flg: SKILL.FRONT },
      { name: 'Zustand', flg: SKILL.FRONT },
      { name: 'Express', flg: SKILL.BACK },
      { name: 'MySQL + TypeORM', flg: SKILL.BACK },
      { name: 'Mongo + Mongoose', flg: SKILL.BACK },
      { name: 'Socket.IO', flg: SKILL.BACK },
    ],
    detail: [
      { text: 'Socket.IO를 활용한 채팅 기능' },
      { text: 'RESTful API + Swagger 작성 (카테고리, 이벤트, 채팅)' },
      {
        text: '채팅 기능 악성유저 차단',
        link: `https://blog-three-peach-22.vercel.app/blog/2024-01-02-rate-limiting`,
      },
    ],
  },
  {
    name: 'ChatGPT',
    description: 'OpenAI API모델을 활용한 GPT 서비스',
    github: 'https://github.com/kcjfgnl9205/next-chatgpt-app',
    demo: 'https://next-chatgpt-app.vercel.app',
    date: '2023. 12. 07',
    members: '개인',
    stacks: [
      { name: 'NextJS', flg: SKILL.FRONT },
      { name: 'TypeScript', flg: SKILL.FRONT },
      { name: 'TailwindCSS', flg: SKILL.FRONT },
    ],
    detail: [{ text: 'OpenAI API모델을 활용한 ChatGPT 앱 구현' }],
  },
]
