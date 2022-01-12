import "./closeFriend.css"

export const CloseFriend = ({user}) => {
    return (
        <li className = "SidebarFriend">
        <img className = "sidebarFriendImg" src={user.ProfilePicture} alt = ""/>
        <span className = "sidebarFriendName">{user.username}</span>
    </li>
    )
}
