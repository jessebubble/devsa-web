import { useId } from 'react';
import clsx from 'clsx';

export function Logomark({ invert = false, filled = false, ...props }) {
    let id = useId();

    return (
        <svg viewBox="0 -960 960 960" aria-hidden="true" {...props}>
            <rect
                clipPath={`url(#${id})-clip`}
                className={clsx(
                    'h-8 transition-all duration-300',
                    invert ? 'fill-centroGreen' : 'fill-centroYellow',
                    filled ? 'w-8' : 'w-0 group-hover/logo:w-8'
                )}
            />
            <use
                href={`#${id}-path`}
                className={invert ? 'fill-centroBlue' : 'fill-centroPink'}
                fill="none"
                strokeWidth="1.5"
            />
            <defs>
                <path
                    id={`${id}-path`}
                    d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160zm0-80h640v-400H160v400zm140-40l-56-56 103-104-104-104 57-56 160 160-160 160zm180 0v-80h240v80H480z"
                />
                <clipPath id={`${id}-clip`}>
                    <use href={`#${id}-path`} />
                </clipPath>
            </defs>
        </svg>
    );
}

export function Logo({
    className,
    invert = false,
    filled = false,
    fillOnHover = false,
    ...props
}) {
    return (
        <svg
            aria-hidden="true"
            className={clsx(fillOnHover && 'group/logo', className)}
            {...props}
        >
            <Logomark
                preserveAspectRatio="xMinYMid meet"
                invert={invert}
                filled={filled}
            />
            <text
                className={invert ? 'fill-white' : 'fill-neutral-950'}
                x="36"
                y="24"
                fontSize="20"
                fontWeight="bold"
                fontFamily="Inter var, sans-serif"
                letterSpacing="-.02em"
            >
                <tspan>San Antonio</tspan>
            </text>
        </svg>
    );
}

export function DevSaLogo(props) {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 792 612"
      xmlSpace="preserve"
      {...props}
    >
      <style>{".st3{fill:#fff}"}</style>
      <path d="M130.93 140.73h262.35V288.3c0 6.01-4.92 10.93-10.93 10.93H141.86c-6.01 0-10.93-4.92-10.93-10.93V140.73z" />
      <path fill="#ef436f" d="M220.18 102.47H303.97V135.26H220.18z" />
      <path
        d="M214.72 102.47h-72.86c-6.01 0-10.93 4.92-10.93 10.93v21.86h83.79v-32.79z"
        fill="#00b1a9"
      />
      <path
        d="M382.35 102.47h-72.91v32.79h83.84V113.4c0-6.01-4.92-10.93-10.93-10.93z"
        fill="#f58220"
      />
      <path
        className="st3"
        d="M256.64 266.44c0 3.28 2.19 5.47 5.47 5.47h87.45c3.28 0 5.47-2.19 5.47-5.47v-16.4c0-3.28-2.19-5.47-5.47-5.47H262.1c-3.28 0-5.47 2.19-5.47 5.47v16.4zM199.8 216.7l-33.89 33.89c-2.73 2.73-2.73 6.56 0 8.74l9.84 9.84c2.73 2.73 6.56 2.73 8.74 0l48.1-48.1c2.41-2.01 2.75-5.59.74-8-.22-.27-.47-.52-.74-.74l-48.1-48.1c-2.19-2.19-6.56-2.19-8.74 0l-9.84 9.84c-2.73 2.19-2.73 6.01 0 8.74l33.89 33.89z"
      />
    </svg>
  )
}

