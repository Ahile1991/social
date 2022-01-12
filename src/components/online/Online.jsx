import "./online.css"

export const Online = ({user}) => {
    return (
        <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img className="rightbarProfileImg" src={user.ProfilePicture}
                   alt="" />

                   <span className = "rightbarOnline"></span>
                </div>

                <span className="rightbarUserName">{user.username}</span>
              </li>
    );
}
