import dynamic from 'next/dynamic'
import { type StaticImageData } from 'next/image'

import cssSvg from '@/images/logo/css.svg'
import gatsbySvg from '@/images/logo/gatsby.svg'
import graphqlSvg from '@/images/logo/graphql.svg'
import htmlSvg from '@/images/logo/html.svg'
import javascriptSvg from '@/images/logo/javascript.svg'
import nestjsSvg from '@/images/logo/nestjs.svg'
import nextjsSvg from '@/images/logo/nextjs.svg'
import nodejsSvg from '@/images/logo/nodejs.svg'
import prismaSvg from '@/images/logo/prisma.svg'
import reactNativeSvg from '@/images/logo/react-native.svg'
import reactSvg from '@/images/logo/react.svg'
import swiftSvg from '@/images/logo/swift.svg'
import tailwindCSSSvg from '@/images/logo/tailwind-css.svg'
import typeScriptSvg from '@/images/logo/typescript.svg'
import vueSvg from '@/images/logo/vue.svg'
import webpackSvg from '@/images/logo/webpack.svg'
import springSvg from '@/images/logo/spring-svgrepo-com.svg'
import springbootSvg from '@/images/logo/spring-boot-svgrepo-com.svg'
import mySqlSvg from '@/images/logo/mysql-logo-svgrepo-com.svg'
import redisSvg from '@/images/logo/react-native.svg'
import mavenSvg from '@/images/logo/maven-svgrepo-com.svg'
import dockerSvg from '@/images/logo/docker-svgrepo-com.svg'
import linuxSvg from '@/images/logo/linux-svgrepo-com.svg'
import nacosSvg from '@/images/logo/react-native.svg'
import rocketMQSvg from '@/images/logo/apacherocketmq-svgrepo-com.svg'
import kafkaSvg from '@/images/logo/kafka-svgrepo-com.svg'
import esSvg from '@/images/logo/elastic-search-svgrepo-com.svg'
import tomcatSvg from '@/images/logo/tomcat-svgrepo-com.svg'
import javaSvg from '@/images/logo/java-svgrepo-com.svg'
import nginxSvg from '@/images/logo/nginx-svgrepo-com.svg'
import mybaitsSvg from '@/images/logo/logo-bird-ninja.svg'
import alibabaCloudSvg from '@/images/logo/Alibaba Cloud.svg'
import minioSvg from '@/images/logo/minio-1.svg'
import xxlSvg from '@/images/logo/xxl-logo.svg'



import { Block } from '@/components/blocks/block'


const Galton = dynamic(() => import('./galton').then(module => module.Galton), {
  ssr: false,
})

const images: StaticImageData[] = [
  htmlSvg,
  cssSvg,
  javascriptSvg,
  typeScriptSvg,
  reactSvg,
  tailwindCSSSvg,
  nextjsSvg,
  gatsbySvg,
  vueSvg,
  nodejsSvg,
  reactNativeSvg,
  webpackSvg,
  swiftSvg,
  nestjsSvg,
  prismaSvg,
  graphqlSvg,
  springSvg,
  springbootSvg,
  mySqlSvg,
  redisSvg,
  mavenSvg,
  dockerSvg,
  linuxSvg,
  nacosSvg,
  rocketMQSvg,
  kafkaSvg,
  esSvg,
  tomcatSvg,
  javaSvg,
  nginxSvg,
  mybaitsSvg,
  alibabaCloudSvg,
  minioSvg,
  xxlSvg,
]
export const Skills = () => {
  return (
    <Block
      data-type='about'
      className='z-20 row-span-4 bg-surface !p-0 max-sm:col-span-2 sm:row-span-2'
    >
      <div className='absolute right-0 top-0 w-20 -translate-y-1/2 translate-x-1/4 rotate-12 scale-75 rounded-lg p-1 shadow-lg before:absolute before:inset-x-0 before:bottom-0 before:z-20 before:origin-bottom before:scale-y-50 before:rounded-lg before:border-[40px] before:border-transparent before:border-b-red-500 before:border-l-red-500 before:content-["_"] after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:origin-bottom after:scale-y-50 after:rounded-lg after:border-[40px] after:border-transparent after:border-b-red-500 after:border-r-red-500 after:brightness-75 after:content-["_"] dark:before:border-b-blue-950 dark:before:border-l-blue-950 dark:after:border-b-blue-950 dark:after:border-r-blue-950 xl:scale-100'>
        <span className='block h-10 -translate-y-4 rounded bg-amber-50 px-2 py-1 uppercase text-slate-800 shadow dark:bg-gray-200'>
          Skills
        </span>
      </div>
      <Galton images={images} />
    </Block>
  )
}