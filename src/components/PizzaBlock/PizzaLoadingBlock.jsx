import React from "react";
import ContentLoader from "react-content-loader";

const PizzaLoadingBlock = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="139" r="140" />
    <rect x="52" y="309" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="290" rx="6" ry="6" width="280" height="24" />
    <rect x="1" y="325" rx="6" ry="6" width="280" height="84" />
    <rect x="1" y="420" rx="0" ry="0" width="90" height="27" />
    <rect x="130" y="415" rx="20" ry="20" width="150" height="35" />
  </ContentLoader>
);

export default PizzaLoadingBlock;
