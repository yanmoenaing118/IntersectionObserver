/* 
boxes are target elements which I refered to as persons 
I change their bg color (but you can do whatever you want to) when they are visisble in the viewport.
*/
const boxes = document.querySelectorAll(".box");

/*
observer was refererd to as watcher 
*/
const observerOptions = {
  threshold: 0.5,
};
const observer = new IntersectionObserver(observerCallback, observerOptions);

function observerCallback(entries) {
  // entries are boxes we targeted
  // we loop over each targted element(a box) to apply actions we want to them
  entries.forEach((entry) => {
    // here we will change bg color of targeted element(a box) if it is visible in the viewport
    const box = entry.target;
    if (entry.isIntersecting) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// now, the observer(watcher) watches all boxes(persons)
boxes.forEach((box) => observer.observe(box));
