
import {GLTFLoader} from "";
const THREE = window.MINDAR.IMAGE.THREE;
document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    // initialize MindAR 
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.querySelector("#ar-container"),
      imageTargetSrc: '/webxr.github.io/mindFiles/targets.mind',
    });
    const {renderer, scene, camera} = mindarThree;

    // // create AR object
    // const geometry = new THREE.PlaneGeometry(1, 1);
    // const material = new THREE.MeshBasicMaterial({color: 0x00ffff, transparent: true, opacity: 0.5});
    // const plane = new THREE.Mesh(geometry, material);

    const loader = new GLTFLoader();

    loader.load("", (gltf) => {
        //gltf scene
        
    });

    // create anchor
    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(plane);

    // start AR
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
