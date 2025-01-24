import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
`;

const BreadcrumbItem = styled.a`
  text-decoration: none;
  color: ${props => props.active ? '#999' : '#007bff'};

  &:hover {
    text-decoration: underline;
  }
`;

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbItem to="/">Главная</BreadcrumbItem>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <React.Fragment key={pathname}>
            <span>/</span>
            {isLast ? (
              <BreadcrumbItem active>{decodeURIComponent(pathname)}</BreadcrumbItem>
            ) : (
              <BreadcrumbItem to={routeTo}>{decodeURIComponent(pathname)}</BreadcrumbItem>
            )}
          </React.Fragment>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
