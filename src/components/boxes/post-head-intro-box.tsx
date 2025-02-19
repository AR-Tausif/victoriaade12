import React from "react";
import { MapDotIcon } from "../icons";

export const PostHeadIntroBox = () => {
  return (
    <div className="user-info">
      <img
        src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
        alt="profile picture"
        className="user-image"
      />
      <div className="user-details">
        <h5 className="studio-name">Bliss Beauty Studio</h5>
        <div className="location">
          <p className="map-icon">
            <MapDotIcon size="11.10" />
          </p>
          <p className="address">123/A- Florida, USA</p>
        </div>
      </div>
    </div>
  );
};
