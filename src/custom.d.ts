// CSS modules
declare module "*.css";

// JSON imports
declare module "*.json" {
  const value: any;
  export default value;
}

// Images
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";