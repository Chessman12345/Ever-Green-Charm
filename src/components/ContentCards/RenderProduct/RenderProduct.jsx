import React from "react";
import ContentLoader from "react-content-loader";

function RenderProduct() {
  return (
    <ContentLoader
      speed={2}
      width={310}
      height={415}
      viewBox="0 0 290 415"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="40" y="0" rx="50" ry="50" width="210" height="190" />
      <rect x="0" y="210" rx="15" ry="15" width="290" height="60" />
      <rect x="0" y="294" rx="15" ry="15" width="290" height="53" />
      <rect x="0" y="365" rx="15" ry="15" width="123" height="30" />
      <rect x="175" y="360" rx="15" ry="15" width="112" height="40" />
    </ContentLoader>
  );
}

export default RenderProduct;
