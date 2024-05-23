import Link from 'next/link'

import { IconX } from '@tabler/icons-react'
import dayjs from 'dayjs'
import { type Metadata, type Viewport } from 'next'

import { Dot } from '@/components/blocks/resume'
import { Typed, TypedContent, TypedText } from '@/components/typed'

export const metadata: Metadata = {
  title: 'Resume',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#282935' },
    { media: '(prefers-color-scheme: dark)', color: '#282935' },
  ],
  colorScheme: 'dark',
}

export default function Page() {
  return (
    <div className='flex min-h-svh items-center justify-center bg-[#282935] p-4'>
      <main className='flex max-h-[90svh] max-w-[65ch] flex-1 flex-col overflow-hidden rounded-2xl border border-gray-600 shadow-2xl shadow-black'>
        <header className='grid h-11 flex-none grid-cols-[1fr_2fr_1fr] items-center border-b border-gray-800 bg-zinc-700 px-4 text-xs font-semibold'>
          <span className='flex gap-2'>
            <Link aria-label='Back to home page' href='/'>
              <Dot className='group relative flex items-center justify-center bg-red-500 before:absolute before:-inset-4 before:content-["_"]'>
                <IconX className='invisible size-2.5 group-hover:visible' />
              </Dot>
            </Link>
            <Dot className='cursor-not-allowed bg-yellow-400' />
            <Dot className='cursor-not-allowed bg-green-500' />
          </span>
          <span className='text-center text-gray-400'>
            wenLiu@MacBook-Air:~
          </span>
          <span className='text-end text-gray-500'>⌥⌘1</span>
        </header>
        <div className='min-h-60 flex-1 overflow-y-auto p-2 text-sm text-gray-200 duration-300 animate-in fade-in'>
          <p className='mb-2'>
            Last login: {dayjs().format('ddd MMM DD HH:mm:ss')} on ttys003
          </p>
          <Typed>
            <TypedText>whoami</TypedText>
            <TypedContent>
              <p>
                Hi, I&apos;m <strong>wenLiu(EVan)</strong>, in Chinese my name is{' '}
                <strong>刘文</strong>.
              </p>
              <p>
                I want to be a full-stack engineer who started learning programming
                since <strong>2018</strong>(my freshman year), with a preference for
                backend development.
              </p>
              <p>
                I have amassed substantial practical experience in the{' '}
                <code>Spring</code> technology stack.
              </p>
            </TypedContent>
            <TypedText afterDelay={1000}>ls</TypedText>
            <TypedContent>
              <div className='grid grid-cols-2 gap-2 px-4 font-semibold text-sky-500'>
                {/*<span>opensource</span>*/}
                <span>projects</span>
                <span>blog-info</span>
                <span>experience</span>
                <span>skills</span>
                <span>contact</span>
              </div>
            </TypedContent>
            {/*<TypedText afterDelay={700}>opensource</TypedText>*/}
            {/*<TypedContent>*/}
            {/*  <p>*/}
            {/*    I am passionate about contributing to the open-source community,*/}
            {/*    having made multiple contributions to well-known projects such*/}
            {/*    as <code>Ant Design</code>.*/}
            {/*  </p>*/}
            {/*  <p>*/}
            {/*    Additionally, I have developed and maintained lots of*/}
            {/*    open-source projects, which have been successfully published on*/}
            {/*    npm and collectively garnered nearly <i>20,000</i> downloads.*/}
            {/*  </p>*/}
            {/*</TypedContent>*/}
            <TypedText afterDelay={1000}>projects</TypedText>
            <TypedContent>
              <ul>
                <li>
                  <strong>
                    <a href='https://wen-liu-personal-information-introduction.vercel.app/zh'>
                      wenLiu-personal-information
                    </a>
                  </strong>
                </li>
                <li>This is a Next.js project bootstrapped with create-next-app, designed to introduce myself..</li>
              </ul>
              {/*<ul>*/}
              {/*  <li>*/}
              {/*    <strong>*/}
              {/*      <a href='https://github.com/zhangyu1818/from-to'>*/}
              {/*        from-to.js*/}
              {/*      </a>*/}
              {/*    </strong>*/}
              {/*  </li>*/}
              {/*  <li>Transitioning from one value to another.</li>*/}
              {/*</ul>*/}
              {/*<ul>*/}
              {/*  <li>*/}
              {/*    <strong>*/}
              {/*      <a href='https://github.com/zhangyu1818/react-server-only-context'>*/}
              {/*        react-server-only-context*/}
              {/*      </a>*/}
              {/*    </strong>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    A straightforward alternative for using context within React*/}
              {/*    Server Components.*/}
              {/*  </li>*/}
              {/*</ul>*/}
              {/*<ul>*/}
              {/*  <li>*/}
              {/*    <strong>*/}
              {/*      <a href='https://github.com/zhangyu1818/tw-styled'>*/}
              {/*        tw-styled*/}
              {/*      </a>*/}
              {/*    </strong>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    Create Tailwind CSS-styled React components with ease using*/}
              {/*    tw-styled.*/}
              {/*  </li>*/}
              {/*</ul>*/}
              {/*<ul>*/}
              {/*  <li>*/}
              {/*    <strong>*/}
              {/*      <a href='https://github.com/zhangyu1818/use-flip'>*/}
              {/*        use-flip*/}
              {/*      </a>*/}
              {/*    </strong>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    Effortless FLIP animations with a React Hook for smoother*/}
              {/*    transitions.*/}
              {/*  </li>*/}
              {/*</ul>*/}
            </TypedContent>
            <TypedText>blog-info</TypedText>
            <TypedContent>
              <p>
                I am keen on summarizing my learning and regularly writing blogs, covering topics such as
                <code>binary search</code>,
                <code>prefix sum and difference</code>,
                <code>searching collections</code>,
                <code>DFS and BFS</code>,
                <code>Redis and MySQL</code>, and <code>Java</code>, among others.
              </p>
              <p>
                <strong>
                  <a href="https://www.cnblogs.com/alohablogs">
                    Welcome to my blog~
                  </a>
                </strong>
                Highly appreciate your feedback and guidance.
              </p>
            </TypedContent>
            <TypedText>experience</TypedText>
            <TypedContent>
              <p>
                Master’s Degree from Hangzhou Dianzi University
                Hangzhou
                Achieved a master's degree, awarded the university's third-class scholarship multiple times, and served
                as a committee member of the 22nd graduate student party branch of the college. Gained in-depth
                understanding of various intelligent fields of machine learning, developed the ability to solve problems
                independently, and conducted research through literature and technical surveys. Possesses strong stress
                resistance and is fully prepared to apply knowledge efficiently in more complex environments in the
                future.
              </p>

              <p>
                Hangzhou Dianzi University Shaoxing Institute of Science and Technology Co., Ltd.
                Shaoxing, Shangyu
                Assisted in collecting enterprise friction stir welding (FSW) process test records and measuring
                execution strength. Processed raw data and completed site engineering. Established a 3D marker model to
                convert raw data into physical quantities. Conducted linear modeling comparisons between the original
                data and the calculated physical quantities. Ultimately, obtained adjustments and investigated the
                impact of related shear forces on execution torque and tensile strength. The KNN model achieved optimal
                performance with a 7:3 data set ratio (83.3% accuracy with the original parameter data set and 90%
                accuracy with the calculated data set).
              </p>

              <p>
                Bachelor’s Degree in Software Engineering from Jiangxi Agricultural University
                Nanchang
                GPA 4.0/5, received a bachelor's degree in software engineering. Mastered basic computer knowledge,
                including data structures, computer networks, and operating systems. Awarded the university's
                second-class scholarship once and the third-class scholarship multiple times. Served as the deputy head
                of the network construction department of the Youth League Committee. Graduation project: Community
                Epidemic Management System based on SpringBoot.
              </p>

            </TypedContent>
            <TypedText>skills</TypedText>
            <TypedContent>
              <p>
                I hava solid <code>Java</code> foundation, such as collections, high concurrency, multi-threading, etc.;
              </p>
              <p>
                I hava a good understanding of <code>object-oriented design</code>,
                be familiar with object-oriented design principles, and master <code>design patterns</code> and application scenarios;
              </p>
              <p>
                Familiar with mainstream frameworks such as <code>spring</code> and <code>MQ</code>, and have
                have little <code>spring-cloud</code> Frame development experience
              </p>
            </TypedContent>
            <TypedText>Contact</TypedText>
            <TypedContent>
              <div className="my-4 flex items-center">
                <p className="basis-1/4 text-center font-semibold">Social</p>
                <div className="grid flex-1 grid-cols-2 justify-items-start gap-2">
                  <a href="https://wen-liu-personal-information-introduction.vercel.app/zh">my personal web</a>
                  <a href="https://github.com/lw1725908379">Github</a>
                  <a href="https://www.cnblogs.com/alohablogs">blog</a>
                </div>
              </div>
              <div className="flex items-center">
                <p className="basis-1/4 text-center font-semibold">Email</p>
                <a href="mailto:wenliu991015@foxmail.com">wenliu991015@foxmail.com</a>
              </div>
            </TypedContent>
          </Typed>
        </div>
      </main>
    </div>
  )
}
