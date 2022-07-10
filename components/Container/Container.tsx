import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

import Lightbulb from 'components/Lightbulb'
import cn from 'lib/classNames'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Container(props: any) {
  const { children, ...customMeta } = props
  const router = useRouter()

  const meta = {
    title: 'Light switch',
    description: 'Light switch',
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <div
        className={cn(
          'relative  w-[100vw]',
          'motion-reduce:transition-none motion-reduce:transform-none'
        )}
      >
        <Head>
          <meta name='robots' content='follow, index' />
          <meta
            property='og:url'
            content={`https://light.cretu.dev/${router.asPath}`}
          />
          <link
            rel='canonical'
            href={`https://light.cretu.dev/${router.asPath}`}
          />
          <meta property='og:type' content={meta.type} />
          <meta property='og:site_name' content='Cristian Crețu' />
          <meta property='og:description' content={meta.description} />
          <meta property='og:title' content={meta.title} />
          <meta property='og:image' content={meta.image} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@cristicrtu' />
          <meta name='twitter:title' content={meta.title} />
          <meta name='twitter:description' content={meta.description} />
          <meta name='twitter:image' content={meta.image} />
          {meta.date && (
            <meta property='article:published_time' content={meta.date} />
          )}
        </Head>

        <div className='absolute left-48'>
          <Lightbulb />
        </div>
        <main className={cn('rounded-lg')}>{children}</main>
      </div>
    </>
  )
}
