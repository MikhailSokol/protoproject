declare module '*.css'; 
declare module '*.scss'; 
// declare module "*.png"
 declare module "*.svg"

declare module "*.png" {
  const content: any;
  export default content;
}
declare module "*.svg" {
  const content: any;
  export default content;
}
