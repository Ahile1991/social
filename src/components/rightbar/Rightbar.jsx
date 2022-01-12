import "./rightbar.css"
import {Users} from "../../dummyData"
import { Online } from "../online/Online"

export const Rightbar = () => {
    return (
        <div className = "rightbar">
          <div className="rightbarWrapper">
            <div className="birthdayContainer">
              <img className="birthdayImg" src="/assets/images/post 1.jpg" alt="" />
              <span className="birthdaText">
                <b>DooTer</b> and <b>3 other friends</b> have a birthday today
                </span>
            </div>

            <img className="rightbarAd" src="/assets/images/ad1.jpg" alt="" />
            <img className="rightbarAd" src="/assets/images/ad3.png" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
             {Users.map(u=>(
               <Online key={u.id} user={u}/>

             ))}
            </ul>
          </div>
        </div>
    )
}
