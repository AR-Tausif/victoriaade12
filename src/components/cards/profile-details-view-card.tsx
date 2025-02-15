import {CloseOutlined,} from '@ant-design/icons'
import { Lists } from '../lists'
import "./styles/profile-details-view-card.css"
export const ProfileDetailsViewCard = () => {
  return (
    <div className="profile-details">
        {/* profile intro with name and email */}
        <div className="profile-intro">
          <p className="close-button">
            <CloseOutlined />
          </p>
          <img
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            alt="profile picture"
            className="profile-image"
          />
          <h5 className="profile-name">Anna Suraiya</h5>
          <p className="profile-email">tausif.ritu1@gmail.com</p>
        </div>

        <div className="lists-container">
          <Lists />
        </div>
      </div>
  )
}
