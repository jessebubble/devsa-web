
import Link from '@remix-run/react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { GridPattern } from '~/components/GridPattern'
import { JSIcon } from '~/components/icons/JSIcon'
import { HTTPIcon } from '~/components/icons/HTTPIcon'
import { ReactIcon } from '~/components/icons/ReactIcon'
import { PostgresqlIcon } from '~/components/icons/PostgresqlIcon'


const resources = [
  {
    href: '/javascript',
    name: 'Javascript',
    description:
      'Use JavaScript to augment the user experience by emulating browser behavior.',
    icon: JSIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/http',
    name: 'Client-Server Model',
    description:
      'The communication standard for the modern web. Learn how to send and receive data.',
    icon: HTTPIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/react',
    name: 'React',
    description:
      "Leveraging React's component-based architecture to build dynamic user interfaces.",
    icon: ReactIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/postgresql',
    name: 'PostgreSQL',
    description:
      'Reliable and powerful foundation for managing structured data.',
    icon: PostgresqlIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
]

function ResourceIcon({ icon: Icon }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-[2px] transition duration-300 group-hover:bg-white/10 dark:bg-white/7.5 dark:group-hover:bg-centroBlue/10 ">
      <Icon className="h-5 w-5 fill-neutral-700/10 stroke-neutral-700 transition-colors duration-300 group-hover:stroke-neutral-950 dark:fill-white/10 dark:stroke-neutral-400 dark:group-hover:fill-centroBlue/10 dark:group-hover:stroke-centroBlue/30" />
    </div>
  )
}

function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#EEEEEE] to-[#333333] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#333333] dark:to-[#1DB7BA]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Resource({ resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-neutral-50 transition-shadow hover:shadow-md hover:shadow-neutral-950/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-950/7.5 group-hover:ring-neutral-950/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <ResourceIcon icon={resource.icon} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-neutral-950 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">

      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-neutral-950/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}