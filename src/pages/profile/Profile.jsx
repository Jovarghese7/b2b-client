import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">

              <div className="profileCover">
                  <img src="assets/post/8.jpeg" alt="" className="profileCoverImg" />
                  <img src="assets/person/7.jpg" alt="" className="profileUserImg" />
              </div>
              <div className="profileInfo">
                <h4 className="profileUserName">
                  Manas Pauly 
                </h4>
                <span className="profileUserMsg">Hello Friends!</span>
              </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
