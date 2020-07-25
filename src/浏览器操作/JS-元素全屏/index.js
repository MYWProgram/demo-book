import './index.css';

const launchFullscreen = element => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
};
const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};
document.querySelector('#fullScreen').addEventListener('click', () => {
  launchFullscreen(document.querySelector('.text-wrapper'));
});
document.querySelector('#exitFullScreen').addEventListener('click', () => {
  exitFullscreen();
});
document.addEventListener('fullscreenchange', () => {
  console.info('成功进入全屏。');
});
document.addEventListener('fullscreenerror', () => {
  alert('全屏请求被拒绝，请先在浏览器中开启权限！');
});
