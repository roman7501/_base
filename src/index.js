// here you put all the js you want.
import lottie from "lottie-web";
import data from "./js/animations/data.json";

console.log(data);
const animationWrapper = document.getElementById("animation-wrapper");

lottie.loadAnimation({
  container: animationWrapper, // the dom element that will contain the animation
  renderer: "svg",
  loop: true,
  autoplay: true,
  animationData: data,
});
