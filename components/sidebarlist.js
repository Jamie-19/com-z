import SidebarListItem from "./sidebarlistitem"


export default function SidebarList({title,data}){
    return(
        <div className="sidebar__chat--container">
            <h2>{title}</h2> 
            {data.map((item) => (
                <SidebarListItem key={item.id} item={item}/>
            ))}
        </div>
    )
}