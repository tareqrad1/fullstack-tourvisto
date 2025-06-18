type TLink = {
    name: string;
    link: string;
    icon: string;
};
export const LINK_DASHBOARD: TLink[] = [
    {name: 'Dashboard', link: '/dashboard', icon: '/home.svg'},
    {name: 'All Users', link: '/dashboard/users', icon: '/profileUser.svg'},
    {name: 'Create Trip', link: '/dashboard/create-trip', icon: '/map.svg'},
    {name: 'AI Trip', link: '/dashboard/all-trips', icon: '/mark.svg'},
];

type TCountries = { name: string, code: string }
export const countries: TCountries[] = [
    { name: "United States", code: "us" },
    { name: "China", code: "cn" },
    { name: "Japan", code: "jp" },
    { name: "Singapore", code: "sg" },
    { name: "Australia", code: "au" },
    { name: "Netherlands", code: "nl" },
    { name: "United Kingdom", code: "gb" },
    { name: "Germany", code: "de" },
    { name: "France", code: "fr" },
    { name: "Italy", code: "it" },
    { name: "Spain", code: "es" },
    { name: "Sweden", code: "se" },
    { name: "Norway", code: "no" },
    { name: "Denmark", code: "dk" },
    { name: "Finland", code: "fi" },
    { name: "Poland", code: "pl" },
    { name: "Switzerland", code: "ch" },
    { name: "Austria", code: "at" },
    { name: "Belgium", code: "be" },
    { name: "Greece", code: "gr" },
    { name: "Portugal", code: "pt" },
    { name: "Ireland", code: "ie" },
    { name: "Czech Republic", code: "cz" },
    { name: "Hungary", code: "hu" },
    { name: "Romania", code: "ro" },
    { name: "Bulgaria", code: "bg" },
    { name: "Croatia", code: "hr" },
];

type TGroupType = { name: string }
export const groupType: TGroupType[] = [
    {name: 'Family'},
    {name: 'Couple'},
    {name: 'Friends'},
    {name: 'Solo'},
    {name: 'Business'},
];

type TTravelStyle = { name: string }
export const travelStyle: TTravelStyle[] = [
    {name: 'Relaxed'},
    {name: 'Adventure'},
    {name: 'Culture'},
    {name: 'Luxury'},
    {name: 'Nature & Outdoors'},
    {name: 'City Exploration'},
];

type TInterest = { name: string }
export const interests: TInterest[]  = [
{name: 'Local Experiences'},
{name: 'Shopping'},
{name: 'Photography Spots'},
{name: 'Nightlife & Bars'},
{name: 'Beaches & Water Activities'},
{name: 'Hiking & Nature Walks'},
{name: 'Food & Culinary'},
{name: 'Historical Sites'},
];

type TBudget = { name: string }
export const budget: TBudget[] = [
    {name: "Budget"},
    {name: "Mid-Range"},
    {name: "Premium"},
    {name: "Luxury"}
]