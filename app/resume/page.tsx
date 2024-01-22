import { Badge } from '@/components/common'
import { EducationCard, Grid, SectionTitle, GridSidebar, GridMainContent } from '@/components/resume'

import { getResumeSkills, getResumeExperiences, getResumeProjects } from '@/data'

export default function Page() {
  const skills = getResumeSkills()
  const experiences = getResumeExperiences()
  const projects = getResumeProjects()

  return (
    <div className='flex flex-col gap-12 p-4 mt-12 mb-24'>
      <section className='flex flex-col gap-6'>
        <div>
          <h1 className='text-2xl md:text-3xl font-bold'>박철휘</h1>
          <span className='text-sm text-neutral-500'>kcjfgnl9205@gmail.com</span>
        </div>
        <div className='leading-8'>
          <p>
            안녕하세요! <span className='font-semibold text-[#5E87C9]'>꾸준한 성장과 도전 정신</span>을 가진 주니어
            개발자 박철휘입니다.
          </p>
          <p>사용자에게 편리하고 즐거운 경험을 제공하는 서비스를 만드는 개발자가 되고 싶습니다.</p>
        </div>
      </section>

      {/* 프로젝트 */}
      <section className='flex flex-col gap-6'>
        <SectionTitle name='💻 Project' />
        {projects.map((project) => (
          <Grid key={project.name}>
            <GridSidebar title={project.name} description={project.date} github={project.github} demo={project.demo} />
            <GridMainContent
              name={project.description}
              members={project.members}
              skills={project.stacks}
              detail={project.detail}
            />
          </Grid>
        ))}
      </section>

      {/* 경력 */}
      <section className='flex flex-col gap-6'>
        <SectionTitle name='🧑‍💻 Experience' />
        {experiences.map((experience) => (
          <Grid key={experience.companyName}>
            <GridSidebar title={experience.companyName} description={experience.date} />
            <div className='flex flex-col gap-4'>
              {experience.projects.map((project) => (
                <GridMainContent
                  key={project.name}
                  name={project.name}
                  date={project.date}
                  skills={project.stacks}
                  detail={project.detail}
                />
              ))}
            </div>
          </Grid>
        ))}
      </section>

      {/* 기술스택 */}
      <section className='flex flex-col gap-6'>
        <SectionTitle name='💪 Skills' />
        <ul className='flex flex-wrap gap-2'>
          {skills.map((skill) => (
            <Badge key={skill.name} name={skill.name} flg={skill.flg} />
          ))}
        </ul>
      </section>

      {/* 학교, 교육 */}
      <section className='flex flex-col gap-6'>
        <SectionTitle name='🎓 Education' />
        <div className='flex flex-col gap-4 md:gap-6'>
          <EducationCard name='[엘리스] 프론트엔드 SW엔지니어 트랙' description='2023. 09 ~ 2023. 12 (수료)' />
          <EducationCard name='강원대학교 수학과' description='2011. 03 ~ 2017. 08 (졸업)' />
        </div>
      </section>
    </div>
  )
}
