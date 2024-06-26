import { Block } from '@/components/blocks/block'
import { ExternalLink } from '@/components/external-link'

export const Juejin = () => (
  <Block
    data-type='about'
    className='group flex items-center justify-center bg-gradient-to-b from-blue-200 to-white text-black dark:from-blue-300/80 dark:to-white/70'
  >
    <svg
      className='size-24 dark:grayscale-[20%] xl:size-32'
      width='1em'
      height='1em'
      viewBox='0 0 38 38'
      xmlns='http://www.w3.org/2000/svg'

    >
      {/*<path*/}
      {/*  d='M22.293 7.583L19.017 5l-3.422 2.699-.178.143 3.6 2.87 3.612-2.87-.336-.259zm12.415 10.018l-15.7 12.38-15.69-12.373L1 19.47l18.008 14.199 18.018-14.207-2.318-1.861zm-15.7 1.004l-8.544-6.736-2.317 1.861 10.86 8.564 10.871-8.572-2.317-1.861-8.553 6.744z'*/}
      {/*  fill='#006CFF'*/}
      {/*  fillRule='evenodd'*/}
      {/*/>*/}
      <g>
        <path
          d='M36.491,40.31c0,0,13.827-0.006,13.858-0.006c3.201,0,5.82-2.344,5.873-5.556c0.051-3.244-2.537-6.15-5.781-6.201
        l-13.766,0.016c-3.249-0.031-5.914,2.537-5.966,5.78C30.658,37.586,33.247,40.258,36.491,40.31z'
          fill='#000000'
        />
        <path
          d='M62.55,55.48H35.021c-3.244,0-5.875,2.631-5.875,5.875s2.631,5.873,5.875,5.873H62.55c3.244,0,5.875-2.629,5.875-5.873
        S65.794,55.48,62.55,55.48z'
          fill='#000000'
        />
        <path
          d='M48.875,0C21.883,0,0,21.882,0,48.875S21.883,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.867,0,48.875,0z
        M76.777,77.021c-3.776,3.889-9.108,5.972-15.42,6.024h-0.059H36.688c-0.155,0.002-0.31,0.003-0.463,0.003
        c-7.074,0-12.534-1.994-16.227-5.927c-3.694-3.935-4.878-9.256-4.878-16.649c0.007-0.51-0.042-1.006-0.011-1.496l0.013-25.991
        c0.305-6.445,3.185-10.431,5.353-12.713c3.503-3.689,8.455-5.56,14.721-5.56h0.174L51.48,14.7l0.15,0.004
        c10.533,0.292,18.123,7.623,18.197,17.822c0.275,3.063,0.104,5.896-0.493,8.452c3.541,0.105,7.91,0.725,10.741,4.383
        c2.5,3.23,2.516,6.903,2.537,11.985c0.006,1.04,0.035,3.688,0.035,3.688C82.579,67.613,80.549,73.143,76.777,77.021z'
          fill='#000000'
        />
      </g>
    </svg>

    {/*没找到博客园logo svg了... ntr 掘金了 ...*/}
    <ExternalLink title='博客园' href='https://home.cnblogs.com/u/alohablogs' />
  </Block>
)
