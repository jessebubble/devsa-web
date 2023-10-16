import { Menu, Transition } from '@headlessui/react';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisVerticalIcon,
} from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';
import { Container } from '~/components/Container';
import { SectionIntro } from '~/components/SectionIntro';
import { FadeIn } from '~/components/FadeIn';
import reactImage from '~/components/images/events/acidtrip.png';
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
} from 'date-fns';

const events = [
    {
        id: 1,
        name: 'Datanuts - Talk Nerdy to Me',
        location: 'The Hoppy Monk - 1010 N Loop 1604 E',
        meetupUrl: 'https://www.meetup.com/bianalytics/events/295684692/',
        imageUrl: reactImage,
        startDatetime: '2023-09-20T17:30',
        endDatetime: '2023-09-20T20:30',
    },
    {
        id: 2,
        name: 'ReactSA Meetup - Intro to React',
        location: 'Codeup Campus - 8700 Tesoro Dr',
        meetupUrl: 'https://www.meetup.com/reactsa/events/294497878/',
        imageUrl: reactImage,
        startDatetime: '2023-09-20T18:00',
        endDatetime: '2023-09-20T20:00',
    },
    {
        id: 3,
        name: 'Geeks and Drinks Monthly Meetup',
        location: "Pinkerton's BBQ - 107 W Houston St",
        meetupUrl:
            'https://www.meetup.com/meetup-group-umecjcqo/events/295946468/',
        imageUrl: reactImage,
        startDatetime: '2023-10-04T18:00',
        endDatetime: '2023-10-04T20:00',
    },
    {
        id: 4,
        name: 'Monthly Coding Challenge...and Tacos!',
        location: 'Codeup Campus - 8700 Tesoro Dr',
        meetupUrl:
            'https://www.meetup.com/san-antonio-php-meetup/events/294498595/',
        imageUrl: reactImage,
        startDatetime: '2023-10-04T18:00',
        endDatetime: '2023-10-04T20:00',
    },
    {
        id: 5,
        name: 'DevMountain Housewarming Happy Hour',
        location: 'Strayer University - 40 NE Loop 410 Suite 500',
        meetupUrl:
            'https://devmountain.com/san-antonio-in-person-coding-bootcamp',
        imageUrl: reactImage,
        startDatetime: '2023-10-11T17:30',
        endDatetime: '2023-10-11T19:00',
    },
    {
        id: 6,
        name: 'UXSA - Intro to Object-Oriented UX',
        location: 'ACCD Headquarters - 2222 North Alamo Street',
        meetupUrl:
            'https://www.meetup.com/uxsanantonio-public/events/296210582',
        imageUrl: reactImage,
        startDatetime: '2023-10-12T17:30',
        endDatetime: '2023-10-12T19:00',
    },
    {
        id: 7,
        name: 'ReactSA - Intermediate Hooks',
        location: 'Codeup Campus - 8700 Tesoro Dr',
        meetupUrl:
            'https://www.meetup.com/reactsa/events/296698853',
        imageUrl: reactImage,
        startDatetime: '2023-10-18T18:00',
        endDatetime: '2023-10-18T19:30',
    },
    {
        id: 8,
        name: 'DevMountain - Intro to HTML',
        location: 'Strayer University - 40 NE Loop 410 Suite 500',
        meetupUrl:
            'https://www.eventbrite.com/e/intro-to-html-tickets-726899926247',
        imageUrl: reactImage,
        startDatetime: '2023-10-18T18:00',
        endDatetime: '2023-10-18T20:00',
    },
    {
        id: 9,
        name: 'Women in Robotics SA - Launch Party Event',
        location: 'Capital Factory at Tech Port - 3331 General Hudnell Drive Access',
        meetupUrl:
            'https://www.eventbrite.com/e/women-in-robotics-san-antonio-launch-party-and-all-star-panel-discussion-tickets-734826434647',
        imageUrl: reactImage,
        startDatetime: '2023-10-19T17:30',
        endDatetime: '2023-10-19T19:00',
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export function CalendarSection() {
    let today = startOfToday();
    let [selectedDay, setSelectedDay] = useState(today);
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    });

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }

    let selectedEventDays = events.filter((event) =>
        isSameDay(parseISO(event.startDatetime), selectedDay)
    );

    return (
        <>
            <SectionIntro
                title="Get inspired by the work of others in the community"
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    As our platform grows, our goal is to expand the events
                    space and fully utilize the power of the web. We want to
                    facilitate discussions on the tools, techniques, and
                    technologies that are shaping the future of design and
                    development for users in San Antonio and beyond
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <FadeIn>
                    <div className="rounded-3xl bg-neutral-950 py-24 lg:py-32">
                        <div className="mx-auto max-w-md px-4 sm:px-7 md:max-w-4xl md:px-6">
                            <div className="md:grid md:grid-cols-2 md:divide-x md:divide-neutral-200">
                                <div className="md:pr-14">
                                    <div className="flex items-center">
                                        <h2 className="flex-auto font-semibold text-white">
                                            {format(
                                                firstDayCurrentMonth,
                                                'MMMM yyyy'
                                            )}
                                        </h2>
                                        <button
                                            type="button"
                                            onClick={previousMonth}
                                            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-neutral-300 hover:text-neutral-400"
                                        >
                                            <span className="sr-only">
                                                Previous month
                                            </span>
                                            <ChevronLeftIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </button>
                                        <button
                                            onClick={nextMonth}
                                            type="button"
                                            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-neutral-300 hover:text-neutral-400"
                                        >
                                            <span className="sr-only">
                                                Next month
                                            </span>
                                            <ChevronRightIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                    <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-white">
                                        <div>S</div>
                                        <div>M</div>
                                        <div>T</div>
                                        <div>W</div>
                                        <div>T</div>
                                        <div>F</div>
                                        <div>S</div>
                                    </div>
                                    <div className="mt-2 grid grid-cols-7 text-sm">
                                        {days.map((day, dayIdx) => (
                                            <div
                                                key={day.toString()}
                                                className={classNames(
                                                    dayIdx === 0 &&
                                                        colStartClasses[
                                                            getDay(day)
                                                        ],
                                                    'py-1.5'
                                                )}
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setSelectedDay(day)
                                                    }
                                                    className={classNames(
                                                        isEqual(
                                                            day,
                                                            selectedDay
                                                        ) && 'text-white',
                                                        !isEqual(
                                                            day,
                                                            selectedDay
                                                        ) &&
                                                            isToday(day) &&
                                                            'text-centroBlue',
                                                        !isEqual(
                                                            day,
                                                            selectedDay
                                                        ) &&
                                                            !isToday(day) &&
                                                            isSameMonth(
                                                                day,
                                                                firstDayCurrentMonth
                                                            ) &&
                                                            'text-neutral-100',
                                                        !isEqual(
                                                            day,
                                                            selectedDay
                                                        ) &&
                                                            !isToday(day) &&
                                                            !isSameMonth(
                                                                day,
                                                                firstDayCurrentMonth
                                                            ) &&
                                                            'text-neutral-300',
                                                        isEqual(
                                                            day,
                                                            selectedDay
                                                        ) &&
                                                            isToday(day) &&
                                                            'bg-centroBlue',
                                                        isEqual(
                                                            day,
                                                            selectedDay
                                                        ) &&
                                                            !isToday(day) &&
                                                            'bg-neutral-400',
                                                        !isEqual(
                                                            day,
                                                            selectedDay
                                                        ) &&
                                                            'hover:bg-neutral-700',
                                                        (isEqual(
                                                            day,
                                                            selectedDay
                                                        ) ||
                                                            isToday(day)) &&
                                                            'font-semibold',
                                                        'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                                    )}
                                                >
                                                    <time
                                                        dateTime={format(
                                                            day,
                                                            'yyyy-MM-dd'
                                                        )}
                                                    >
                                                        {format(day, 'd')}
                                                    </time>
                                                </button>

                                                <div className="mx-auto mt-1 h-1 w-1">
                                                    {events.some((event) =>
                                                        isSameDay(
                                                            parseISO(
                                                                event.startDatetime
                                                            ),
                                                            day
                                                        )
                                                    ) && (
                                                        <div className="h-1 w-1 rounded-full bg-centroPink"></div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <section className="mt-12 md:mt-0 md:pl-14">
                                    <h2 className="font-semibold text-white">
                                        Schedule for{' '}
                                        <time
                                            dateTime={format(
                                                selectedDay,
                                                'yyyy-MM-dd'
                                            )}
                                        >
                                            {format(selectedDay, 'MMM dd, yyy')}
                                        </time>
                                    </h2>
                                    <ol className="mt-4 space-y-1 text-sm leading-6 text-neutral-500">
                                        {selectedEventDays.length > 0 ? (
                                            selectedEventDays.map((event) => (
                                                <Event
                                                    event={event}
                                                    key={event.id}
                                                />
                                            ))
                                        ) : (
                                            <p>
                                                No local events scheduled for
                                                today.
                                            </p>
                                        )}
                                    </ol>
                                </section>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </>
    );
}

function Event({ event }) {
    let startDateTime = parseISO(event.startDatetime);
    let endDateTime = parseISO(event.endDatetime);

    return (
        <li className="group flex items-center space-x-4 rounded-xl px-4 py-2 text-white focus-within:bg-neutral-200 hover:bg-neutral-200 hover:text-neutral-950">
            <img
                src={event.imageUrl}
                alt=""
                className="h-10 w-10 flex-none rounded-full"
            />
            <div className="flex-auto">
                <p className="">{event.name}</p>
                <p className="mt-0.5 text-neutral-500">{event.location}</p>
                <p className="mt-0.5 text-neutral-600">
                    <time dateTime={event.startDatetime}>
                        {format(startDateTime, 'h:mm a')}
                    </time>{' '}
                    -{' '}
                    <time dateTime={event.endDatetime}>
                        {format(endDateTime, 'h:mm a')}
                    </time>
                </p>
            </div>
            <Menu
                as="div"
                className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
            >
                <div>
                    <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-neutral-500 hover:text-neutral-600">
                        <span className="sr-only">Open options</span>
                        <EllipsisVerticalIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href={event.meetupUrl}
                                        className={classNames(
                                            active
                                                ? 'bg-neutral-200 text-neutral-950'
                                                : 'text-neutral-500',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        RSVP
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="/"
                                        className={classNames(
                                            active
                                                ? 'bg-neutral-200 text-neutral-950'
                                                : 'text-neutral-500',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        Cancel
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </li>
    );
}

let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
];
