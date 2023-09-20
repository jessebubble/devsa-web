import clsx from 'clsx';

export function DevSaLogo({ className, ...props }) {
    return (
        <svg
            className={clsx('h-full w-full', className)}
            viewBox="0 0 792 612"
            {...props}
        >
            <style>{'.st3{fill:#eee}'}</style>
            <path d="M213.6 222.4h364.8v205.2c0 8.4-6.8 15.2-15.2 15.2H228.8c-8.4 0-15.2-6.8-15.2-15.2V222.4z" />
            <path
                fill="#ef436f"
                d="M337.7 169.2H454.2V214.79999999999998H337.7z"
            />
            <path
                d="M330.1 169.2H228.8c-8.4 0-15.2 6.8-15.2 15.2v30.4h116.5v-45.6z"
                fill="#00b1a9"
            />
            <path
                d="M563.2 169.2H461.8v45.6h116.6v-30.4c0-8.4-6.8-15.2-15.2-15.2z"
                fill="#f58220"
            />
            <path
                className="st3"
                d="M388.4 397.2c0 4.6 3 7.6 7.6 7.6h121.6c4.6 0 7.6-3 7.6-7.6v-22.8c0-4.6-3-7.6-7.6-7.6H396c-4.6 0-7.6 3-7.6 7.6v22.8zM309.4 328l-47.1 47.1c-3.8 3.8-3.8 9.1 0 12.2L276 401c3.8 3.8 9.1 3.8 12.2 0l66.9-66.9c3.4-2.8 3.8-7.8 1-11.1-.3-.4-.7-.7-1-1l-66.9-66.9c-3-3-9.1-3-12.2 0l-13.7 13.7c-3.8 3-3.8 8.4 0 12.2l47.1 47z"
            />
            <path fill="none" d="M403.6 289.6H510.1V375.5H403.6z" />
            <text
                transform="translate(403.555 342.925)"
                className="st3"
                fontSize="80px"
                fontFamily="Poppins-Black"
            >
                {'SA'}
            </text>
        </svg>
    );
}
