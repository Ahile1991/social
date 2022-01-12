import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import {Rightbar} from "../../components/rightbar/Rightbar";

const Profile = () => {
    return (
        <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCorver">

                
                <img className="profileCorverImg" src="assets/images/profile/pp14.jpg" alt="" />
                <img className="profileUserImg" src="assets/images/profile/pp8.jpg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Ahile Victor</h4>
                    <span className="profileInfoDesc">Hello friends</span>
                </div>
            </div>
            <div className="profileRightBottom">   
        <Feed/>
        <Rightbar/>
        </div>
        </div>
    
        </div>
        
    
        

       
        </>
    );
}

export default Profile
