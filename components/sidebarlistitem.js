import { Avatar } from '@mui/material';
import Link from 'next/link';

const src ='./static/images/avatar/avatar-generations_prsz.jpg';
export default function SidebarListItem({item}){
    return(
       <Link className="link" href={`/?roomId=${item.id}`}>
        <div className="sidebar__chat">
            <div className="avatar__container">
                <Avatar 
                style={{height:"45px",width:"45px"}}
                >{item.short}</Avatar>
            </div>
            <div className="sidebar__chat--info">
                <h2>{item.name}</h2>
            </div>
        </div>
       </Link>
    )
}