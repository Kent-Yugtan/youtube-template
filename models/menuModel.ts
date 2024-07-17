import { SubMenuModel } from "./subMenuModel";
import { ThumbNails } from "./thumbNails"
export interface MenuModel{
    id?: string;
    menuName:string;
    subMenu?:Array<SubMenuModel>;
    thumbNails?:Array<ThumbNails>
}