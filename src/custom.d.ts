declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  const src: string;
  export default src;
}