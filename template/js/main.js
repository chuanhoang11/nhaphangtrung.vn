import MobileModule from "./module/MobileModule.js";
import AosModule from "./module/AosModule.js";
import BtnToTopModule from "./module/BtnToTopModule.js";
import SwiperModule from "./module/SwiperModule.js";
import Select2Module from "./module/Select2Module.js";
import GalleryModule from "./module/GalleryModule.js";
import TabModule from "./module/TabModule.js";
import HeaderModule from "./module/HeaderModule.js";
import CollapseModule from "./module/CollapseModule.js";
import TextAniModule from "./module/TextAniModule.js";
import CommonModule from "./module/CommonModule.js";
import SmoothScrollModule from "./module/SmoothScrollModule.js";

window.addEventListener("DOMContentLoaded", () => {
  // Animation
  TextAniModule();
  AosModule();
  CommonModule();
  // Tab
  TabModule();
  // Select
  Select2Module();
  // Component
  SwiperModule();
  MobileModule();
  BtnToTopModule();
  HeaderModule();
  GalleryModule();
  CollapseModule();
  SmoothScrollModule();
});
