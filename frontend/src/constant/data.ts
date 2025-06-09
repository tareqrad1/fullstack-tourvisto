type TLink = {
    name: string;
    link: string;
    icon: string;
};
export const LINK_DASHBOARD: TLink[] = [
    {name: 'Dashboard', link: '/dashboard', icon: '/home.svg'},
    {name: 'All Users', link: '/dashboard/users', icon: '/profileUser.svg'},
    {name: 'AI Trip', link: '/dashboard/create-trip', icon: '/map.svg'},
];