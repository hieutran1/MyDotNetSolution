export const USERS = [
    {
        id: 1,
        handle: 'bobbrown',
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        access: 'Owner',
        role: 'Co-Founder / CEO',
        avatarUrl: 'https://avatars.githubusercontent.com/u/2?v=4',
        online: true,
        initials: '',
    },
    {
        id: 2,
        handle: 'charliewhite',
        name: 'Charlie White',
        email: 'charlie.white@example.com',
        access: 'Admin',
        role: 'Co-Founder / CTO',
        avatarUrl: 'https://avatars.githubusercontent.com/u/1?v=4',
        online: false,
        initials: '',
    },
    {
        id: 3,
        handle: 'johndoe',
        name: 'John Doe',
        email: 'john.doe@example.com',
        access: 'Admin',
        role: 'Administrator',
        avatarUrl: 'https://avatars.githubusercontent.com/u/3?v=4',
        online: true,
        initials: 'jd',
    },
    {
        id: 4,
        handle: 'janesmith',
        name: 'Jane Smith',
        email: 'jane.smith@examle.com',
        access: 'User',
        role: 'Editor',
        avatarUrl: 'https://avatars.githubusercontent.com/u/4?v=4',
        online: false,
        initials: 'js',
    },
    {
        id: 5,
        handle: 'alicejohnson',
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        access: 'Guest',
        role: 'Viewer',
        avatarUrl: 'https://avatars.githubusercontent.com/u/5?v=4',
        online: true,
        initials: 'aj',
    },
    {
        id: 6,
        handle: 'dianagreen',
        name: 'Diana Green',
        email: 'diana.green@example.com',
        access: 'User',
        role: 'Contributor',
        avatarUrl: 'https://avatars.githubusercontent.com/u/6?v=4',
        online: false,
        initials: '',
    },
    {
        id: 7,
        handle: 'ethanblue',
        name: 'Ethan Blue',
        email: 'ethan.blue@example.com',
        access: 'Guest',
        role: 'Subscriber',
        avatarUrl: 'https://avatars.githubusercontent.com/u/7?v=4',
        online: true,
        initials: '',
    }
];

export const PLAYERS = [
    { rank: 1, name: 'Connor McDavid', position: 'C', gamesPlayed: 56, goals: 30, assists: 45, points: 75, plusMinus: 20 },
    { rank: 2, name: 'Auston Matthews', position: 'C', gamesPlayed: 58, goals: 28, assists: 40, points: 68, plusMinus: 15 },
    { rank: 3, name: 'Nathan MacKinnon', position: 'C', gamesPlayed: 55, goals: 25, assists: 42, points: 67, plusMinus: 18 },
    { rank: 4, name: 'Leon Draisaitl', position: 'C', gamesPlayed: 57, goals: 27, assists: 38, points: 65, plusMinus: 16 },
    { rank: 5, name: 'Sidney Crosby', position: 'C', gamesPlayed: 59, goals: 24, assists: 41, points: 65, plusMinus: 14 },
    { rank: 6, name: 'Alex Ovechkin', position: 'LW', gamesPlayed: 60, goals: 32, assists: 30, points: 62, plusMinus: 12 },
    { rank: 7, name: 'Patrick Kane', position: 'RW', gamesPlayed: 58, goals: 22, assists: 35, points: 57, plusMinus: -5 },
    { rank: 8, name: 'Brad Marchand', position: 'LW', gamesPlayed: 56, goals: 20, assists: 36, points: 56, plusMinus: -2 },
    { rank: 9, name: 'Steven Stamkos', position: 'C', gamesPlayed: '57', goals: '21', assists: '34', points: '55', plusMinus: '-3' },
    { rank: '10', name: 'Mark Scheifele', position: 'C', gamesPlayed: '59', goals: '19', assists: '35', points: '54', plusMinus: '-4' },
];

export const COUNTRIES = [
    { code: 'CA', name: 'Canada' },
    { code: 'US', name: 'United States' },
    { code: 'MX', name: 'Mexico' }
]

export const SOLID_COLOR_20 = [
    'dark/zinc', 'dark/white',
    'dark', 'zinc', 'white', 'red', 'orange',
    'amber', 'yellow', 'lime', 'green', 'emerald',
    'teal', 'cyan', 'sky', 'blue', 'indigo',
    'violet', 'purple', 'fuchsia', 'pink', 'rose'];

export const ORDERS = [
    { orderNumber: '3000', purchaseDate: 'May 9, 2024', customer: 'Leslie Alexander', event: ['Bear Hug: Live in Concert', 'bear-hug-thumb.jpg'], amount: 'US$80.00' },
    { orderNumber: '3001', purchaseDate: 'May 5, 2024', customer: 'Michael Foster', event: ['Six Fingers — DJ Set', 'six-fingers-thumb.jpg'], amount: 'US$299.00' },
    { orderNumber: '3002', purchaseDate: 'Apr 28, 2024', customer: 'Dries Vincent', event: ['We All Look The Same', 'we-all-look-the-same-thumb.jpg'], amount: 'US$150.00' },
    { orderNumber: '3003', purchaseDate: 'Apr 23, 2024', customer: 'Lindsay Walton', event: ['Bear Hug: Live in Concert', 'bear-hug-thumb.jpg'], amount: 'US$80.00' },
    { orderNumber: '3004', purchaseDate: 'Apr 18, 2024', customer: 'Courtney Henry', event: ['Viking People', 'viking-people-thumb.jpg'], amount: 'US$114.99' },
    { orderNumber: '3005', purchaseDate: 'Apr 14, 2024', customer: 'Tom Cook', event: ['Six Fingers — DJ Set', 'six-fingers-thumb.jpg'], amount: 'US$299.00' },
    { orderNumber: '3006', purchaseDate: 'Apr 10, 2024', customer: 'Whitney Francis', event: ['We All Look The Same', 'we-all-look-the-same-thumb.jpg'], amount: 'US$150.00' },
    { orderNumber: '3007', purchaseDate: 'Apr 6, 2024', customer: 'Leonard Krasner', event: ['Bear Hug: Live in Concert', 'bear-hug-thumb.jpg'], amount: 'US$80.00' },
    { orderNumber: '3008', purchaseDate: 'Apr 3, 2024', customer: 'Floyd Miles', event: ['Bear Hug: Live in Concert', 'bear-hug-thumb.jpg'], amount: 'US$80.00' },
    { orderNumber: '3009', purchaseDate: 'Mar 29, 2024', customer: 'Emily Selman', event: ['Viking People', 'viking-people-thumb.jpg'], amount: 'US$114.99' },
    { orderNumber: '3010', purchaseDate: 'Mar 25, 2024', customer: 'Kristin Watson', event: ['Six Fingers — DJ Set', 'six-fingers-thumb.jpg'], amount: 'US$299.00' },
    { orderNumber: '3011', purchaseDate: 'Mar 21, 2024', customer: 'Emma Dorsey', event: ['Bear Hug: Live in Concert', 'bear-hug-thumb.jpg'], amount: 'US$80.00' },
    { orderNumber: '3012', purchaseDate: 'Mar 16, 2024', customer: 'Alicia Bell', event: ['We All Look The Same', 'we-all-look-the-same-thumb.jpg'], amount: 'US$150.00' },
    { orderNumber: '3013', purchaseDate: 'Mar 12, 2024', customer: 'Jenny Wilson', event: ['Six Fingers — DJ Set', 'six-fingers-thumb.jpg'], amount: 'US$299.00' },
    { orderNumber: '3014', purchaseDate: 'Mar 8, 2024', customer: 'Anna Roberts', event: ['We All Look The Same', 'we-all-look-the-same-thumb.jpg'], amount: 'US$150.00' },
    { orderNumber: '3015', purchaseDate: 'Mar 4, 2024', customer: 'Benjamin Russel', event: ['We All Look The Same', 'we-all-look-the-same-thumb.jpg'], amount: 'US$150.00' },
    { orderNumber: '3016', purchaseDate: 'Feb 28, 2024', customer: 'Jeffrey Webb', event: ['Bear Hug: Live in Concert', 'bear-hug-thumb.jpg'], amount: 'US$80.00' },
    { orderNumber: '3017', purchaseDate: 'Feb 23, 2024', customer: 'Kathryn Murphy', event: ['Bear Hug: Live in Concert', 'bear-hug-thumb.jpg'], amount: 'US$80.00' },
    { orderNumber: '3018', purchaseDate: 'Feb 19, 2024', customer: 'Lawrence Hunter', event: ['Viking People', 'viking-people-thumb.jpg'], amount: 'US$114.99' },
    { orderNumber: '3019', purchaseDate: 'Feb 15, 2024', customer: 'Yvette Armstrong', event: ['Viking People', 'viking-people-thumb.jpg'], amount: 'US$114.99' },
    { orderNumber: '3020', purchaseDate: 'Feb 10, 2024', customer: 'Angela Fisher', event: ['Six Fingers — DJ Set', 'six-fingers-thumb.jpg'], amount: 'US$299.00' },
    { orderNumber: '3021', purchaseDate: 'Feb 5, 2024', customer: 'Blake Reid', event: ['Bear Hug: Live in Concert', 'bear-hug-thumb.jpg'], amount: 'US$80.00' },
    { orderNumber: '3022', purchaseDate: 'Feb 1, 2024', customer: 'Hector Gibbons', event: ['Viking People', 'viking-people-thumb.jpg'], amount: 'US$114.99' },
    { orderNumber: '3023', purchaseDate: 'Jan 27, 2024', customer: 'Fabricio Mendes', event: ['Viking People', 'viking-people-thumb.jpg'], amount: 'US$114.99' },
    { orderNumber: '3024', purchaseDate: 'Jan 22, 2024', customer: 'Jillian Steward', event: ['Viking People', 'viking-people-thumb.jpg'], amount: 'US$114.99' },
    { orderNumber: '3025', purchaseDate: 'Jan 18, 2024', customer: 'Chelsea Hagon', event: ['Viking People', 'viking-people-thumb.jpg'], amount: 'US$114.99' },

]

export const EVENTS = [
    { eventNumber: 1000, name: 'Bear Hug: Live in Concert', startDate: 'May 20, 2024 at 10 PM', playAt: 'Harmony Theater, Winnipeg, MB', soldTickets: 350, saleTickets: 500, status: 'On Sale', eventImage: 'bear-hug.jpg' },
    { eventNumber: 1001, name: 'Six Fingers — DJ Set', startDate: 'Jun 2, 2024 at 8 PM', playAt: 'Moonbeam Arena, Uxbridge, ON', soldTickets: 72, saleTickets: 150, status: 'On Sale', eventImage: 'six-fingers.jpg' },
    { eventNumber: 1002, name: 'We All Look The Same', startDate: 'Aug 5, 2024 at 4 PM', playAt: 'Electric Coliseum, New York, NY', soldTickets: 275, saleTickets: 275, status: 'Closed', eventImage: 'we-all-look-the-same.jpg' },
    { eventNumber: 1003, name: 'Viking People', startDate: 'Dec 31, 2024 at 8 PM', playAt: 'Tapestry Hall, Cambridge, ON', soldTickets: 6, saleTickets: 40, status: 'On Sale', eventImage: 'viking-people.jpg' }
]