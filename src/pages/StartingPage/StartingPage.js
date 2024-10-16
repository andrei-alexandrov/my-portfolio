import * as THREE from "three";
import { useRef, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from 'gsap';

import myLogo from "../../images/aboutMe/myLogo-1.png";
import "./StartingPage.scss";

const StartingPage = ({ onEnter }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const geometry = new THREE.SphereGeometry(3, 64, 64);
        const material = new THREE.MeshStandardMaterial({ color: "#00ff83", roughness: 0.5 });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        const light = new THREE.PointLight(0xffffff, 70, 100, 1.6);
        light.position.set(0, 10, 10);
        scene.add(light);

        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
        camera.position.z = 20;
        scene.add(camera);

        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(2);
        renderer.render(scene, camera);

        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.autoRotate = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.autoRotateSpeed = sizes.width < 860 ? 4 : 13;

        window.addEventListener("resize", () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            renderer.setSize(sizes.width, sizes.height);
            controls.autoRotateSpeed = sizes.width < 860 ? 4 : 13;
        });

        const loop = () => {
            controls.update();
            renderer.render(scene, camera);
            window.requestAnimationFrame(loop);
        }
        loop();

        const timeline = gsap.timeline({ defaults: { duration: 2 } });
        const timelineTwo = gsap.timeline({ defaults: { duration: 1.7 } })
        timeline.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
        timelineTwo.fromTo(".top-content-wrapper", {
            y: "-300%",
            duration: 1.5
        }, {
            y: "0%",
            duration: 1.5
        });
        // timeline.fromTo(".sphere-desc", { opacity: 0 }, { opacity: 1 });

        const colors = [
            new THREE.Color('red'),
            new THREE.Color('green'),
            new THREE.Color('purple'),
            new THREE.Color('orange'),
            new THREE.Color('yellow'),
            new THREE.Color('blue'),
        ];

        //Starting animation of the colors
        gsap.to(mesh.material.color, {
            r: colors[1].r,
            g: colors[1].g,
            b: colors[1].b,
            duration: 2,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true,
            onRepeat: () => {
                const nextColor = colors[Math.floor(Math.random() * colors.length)];
                gsap.to(mesh.material.color, {
                    r: nextColor.r,
                    g: nextColor.g,
                    b: nextColor.b,
                    duration: 2,
                    ease: 'power1.inOut',
                });
            },
        });
    }, []);

    return (
        <>
            <img className="my-logo" src={myLogo} alt="my-logo" />
            <div className="top-content-wrapper">
                <h1 className="">Welcome</h1>
            </div>
            <div className="bottom-content-wrapper">
                <h4 className="sphere-desc">Drag anywhere to interact with the sphere</h4>
                <button className="custom-btn btn-starting-page" onClick={onEnter}>
                    <span className="button-enter-btn-text">Enter</span>
                </button>
            </div>
            <canvas ref={canvasRef} className="canvas-style"></canvas>
        </>
    );
};

export default StartingPage;
