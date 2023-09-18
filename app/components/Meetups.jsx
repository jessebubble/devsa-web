import clsx from 'clsx';

function Office({ name, children, invert = false }) {
    return (
        <address
            className={clsx(
                'text-sm not-italic',
                invert ? 'text-neutral-300' : 'text-neutral-600'
            )}
        >
            <strong className={invert ? 'text-white' : 'text-neutral-950'}>
                {name} <span aria-hidden="true">→</span>
            </strong>
            <br />
            {children}
        </address>
    );
}

export function Meetups({ invert = false, ...props }) {
    return (
        <ul {...props}>
            <li>
                <Office name="MDX San Antonio" invert={invert}>
                    mdxsanantonio.com
                    <br />
                </Office>
            </li>
            <li>
                <Office name="DevMountain" invert={invert}>
                    devmountain.com
                    <br />
                </Office>
            </li>
        </ul>
    );
}
