import Container from 'components/Container'

export default function Home() {
  return (
    <Container>
      <div className='inset-0 max-w-2xl mx-auto mt-64 md:mt-48 flex flex-col gap-8 p-4'>
        <h1 className='text-4xl font-bold bg-gradient-to-b lg:bg-gradient-to-r from-yellow-300 to-yellow-900/50 dark:from-gray-500/60 dark:to-gray-500/60 bg-clip-text text-transparent'>
          Human Interface Guidelines: The Apple Desktop Interface
        </h1>
        <h2 className='text-2xl font-semibold bg-gradient-to-b lg:bg-gradient-to-r from-yellow-100/90 to-yellow-300/40 dark:from-gray-500/30 dark:to-gray-500/30 bg-clip-text text-transparent'>
          Metaphors from the real world
        </h2>
        <p className='text-lg bg-gradient-to-b lg:bg-gradient-to-br from-yellow-100/80 to-yellow-300/30 dark:from-gray-500/30 dark:to-gray-500/30 bg-clip-text text-transparent'>
          Use concrete metaphors and make them plain, so that users have a set
          of expectations to apply to computer environments. Whenever
          appropriate, use audio and visual effects that support the metaphor.
          Most people now using computers don&apos;t have years of experience
          with several different computer systems. What they do have is years of
          direct experience with their immediate world.
        </p>
        <p className='text-lg bg-gradient-to-b lg:bg-gradient-to-br from-yellow-100/60 to-yellow-300/20 dark:from-gray-500/30 dark:to-gray-500/30 bg-clip-text text-transparent'>
          To take advantage of this prior experience, computer designers
          frequendy use metaphors for computer processes that correspond to the
          everyday world that people are comfortable with. The desktop itself is
          the primary metaphor for the Apple Desktop Interface. It appears to be
          a surface on which users can keep tools and documents. Yet many of the
          elements of the Apple Desktop Interface don&apos;t have a clear
          physical counterpart. For example, scroll bars clearly belong to the
          computer domain; they only loosely resemble real scrolls. And
          pull-down menus aren&apos;t much like real restaurant menus, except in
          providing the opportunity to make choices from alternatives.
        </p>
        <p className='text-lg bg-gradient-to-b lg:bg-gradient-to-br from-yellow-100/50 to-yellow-300/10 dark:from-gray-500/30 dark:to-gray-500/30 bg-clip-text text-transparent'>
          The desktop, then, is an inviting metaphor that provides easy access
          to the system. Other metaphors, especially when consistent with the
          desktop, can fit into the system. Once immersed in the desktop
          metaphor, users can adapt readily to loose connections with physical
          situations—the metaphor need not be taken to its logical extremes.
        </p>

        <footer className='bg-gradient-to-b lg:bg-gradient-to-br from-yellow-100/30 to-yellow-300/5 dark:from-gray-500/30 dark:to-gray-500/30 bg-clip-text text-transparent'>
          Lightbulb made by
          <a
            href='https://codepen.io/joebocock/pen/eYZKOjR'
            className='ml-2 bg-gradient-to-b lg:bg-gradient-to-br opacity-90 hover:opacity-100 from-yellow-100/30 to-yellow-300/5 dark:from-gray-500/30 dark:to-gray-500/30 bg-clip-text text-transparent'
            rel='noopener noreferrer'
            target='_blank'
          >
            Joe Bocock
          </a>
        </footer>
      </div>
    </Container>
  )
}
