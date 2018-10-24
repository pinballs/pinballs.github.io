// main.js
// handles the dom and knows nothing about threejs
// attach listeners so that we know when windowresize or mousemove or so happens
// starts the rendering loop

const canvas = document.getElementById('canvas');


const sceneManager = new SceneManager(canvas);

bindEventListeners();
render();

function bindEventListeners() {
    //window.onresize = resizeCanvas;

   // resizeCanvas();
   // window.onmousemove = sceneManager.onMouseMove;

}

function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    sceneManager.onWindowResize();
}

function render() {
    requestAnimationFrame(render);
    sceneManager.update();
}