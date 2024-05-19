
export interface SubMenu {
    title: string;
    url: string;
    subMenu?: SubMenu[];
}

export interface MenuItem {
    title: string;
    url: string;
    subMenu?: SubMenu[];
    depthLevel?:number
} 


  // Define the menu data array with the MenuItem type
export const menuItemsData: MenuItem[] = [
{
    title: 'Home',
    url: '/',
    
},
{
    title: 'Engineering Support',
    url: '/engineeringSupport',
    subMenu: [
        {title: "Aur Main", url: "aurMain", subMenu:[{title: "Something", url:"/something"}]},
        {title: "Deport Induction System", url: "inductionSystem"}
    ],
},
{
    title: 'Fleet Support',
    url: '/fleetSupport',

},
{
    title: 'Program Management',
    url: '/programManagement',

},
{
    title: 'Program Support',
    url: '/programSupport',

},
{
    title: 'Help Desk',
    url: '/helpdesk',

},
{
    title: 'Reports',
    url: '/reports',

},
];