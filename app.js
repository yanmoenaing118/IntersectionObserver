const main = document.querySelector(".main");
const target = document.querySelector(".target");

let previousY = 0;
let previousRatio = 0;

const thresholdArray = steps => Array(steps + 1)
 .fill(0)
 .map((_, index) => index / steps || 0)

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      const currentY = entry.boundingClientRect.y;
      const currentRatio = entry.intersectionRatio;
      const isIntersecting = entry.isIntersecting;

  
      if (currentY < previousY) {
        if (currentRatio > previousRatio && isIntersecting) {
          console.log("Scrolling down enter");
        } else {
          console.log("Scrolling down leave");
        }
      } else if (currentY > previousY && isIntersecting) {
        if (currentRatio < previousRatio) {
          console.log("Scrolling up leave");
        } else {
          console.log("Scrolling up enter");
        }
      }

      previousY = currentY;
      previousRatio = currentRatio;
    });
  },
  {
    root: main,
    threshold: thresholdArray(20)
  }
);

observer.observe(target);
