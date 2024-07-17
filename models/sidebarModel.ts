import { MenuModel } from './menuModel';
export interface SideBarModel{
    id?:string;
    name:string;
    icon?:string;
    menu?: Array<MenuModel>
}