export default (() => {
  window.addEventListener('load', function () {
    const sPlatform = navigator.platform;
    const isWindows = sPlatform === 'Win32' || sPlatform === 'Windows';
    if(isWindows){
      document.body.className = 'bin-scroll';
    }
  })
});
