// BreadcrumbNavigation.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../components/BreadCrumb/BreadCrumb.css";
const BreadcrumbNavigation = ({ currentSection, previousSections }) => {
  return (
    <Breadcrumb className="custom-breadcrumb">
      {previousSections.map((section, index) => (
        <Breadcrumb.Item
          key={index}
          linkAs={Link}
          linkProps={{ to: section.link }}
          className="breadcrumb-item"
        >
          {section.name}
        </Breadcrumb.Item>
      ))}
      <Breadcrumb.Item className="breadcrumb-item active">
        {currentSection}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbNavigation;
