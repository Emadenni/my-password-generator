import React from "react";
import "./layout.scss";

type Props = {
  logo?: React.ReactNode;
  title: string;
  titleClassName?: string;
  logoClassName?: string;
  headerId?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({
  logo,
  title,
  titleClassName,
  logoClassName,
  headerId,
  buttonLabel,
  onButtonClick,
  children,
}) => {
  return (
    <div className="layout-container">
      <header className="layout-header" id={`${headerId}`}>
        {logo && <div className={`layout-logo ${logoClassName}`}>{logo}</div>}
        <h1 className={titleClassName}>{title}</h1>
      </header>
      <main className="layout-main">{children}</main>
      {buttonLabel && onButtonClick && (
        <button onClick={onButtonClick} className="layout-button">
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default Layout;
