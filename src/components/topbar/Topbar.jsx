import "./topbar.css"
import {Search, Person, Chat, Notifications} from "@material-ui/icons"

const Topbar = () => {
    return (
        <div className = "topbarContainer">
           <div className="topbarLeft">
           <span className = "logo">Whispers</span>
           </div>
           
           <div className="topbarCenter">
               <div className="searchbar">
                   <Search className = "searchIcon"/>
                   <input placeholder="search for friend's posts or any video" className="input searchInput"/>
            
               </div>
           </div>
           <div className="topbarRight">
           <div className="topbarLinks">
               <span className="topbarLink">Home page</span>
               <span className="topbarLink">Timeline</span>
           </div>
          
           <div className="topbarIcons">
           <div className="topbarIconItem">
                   <Person/>
           <span className="topbarIconBadge">1</span>
           </div>
           </div>

           <div className="topbarIcons">
           <div className="topbarIconItem">
                   <Chat/>
           <span className="topbarIconBadge">2</span>
           </div>
           </div>

           <div className="topbarIcons">
           <div className="topbarIconItem">
                   <Notifications/>
           <span className="topbarIconBadge">1</span>
           </div>
           </div>
          

            <img src="/assets/images/profile/pp2.jpg" alt=""  className="topbarImg"/>


            </div>
        </div>
    )
}

export default Topbar
