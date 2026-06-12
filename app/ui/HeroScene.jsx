"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 100);
    camera.position.set(0, 0.3, 7.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Core icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.7, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xf4d35e,
      metalness: 0.22,
      roughness: 0.32,
      emissive: 0x172a3a,
      emissiveIntensity: 0.1,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Inner wireframe shell
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.18, 2),
      new THREE.MeshBasicMaterial({ color: 0x5bc0be, wireframe: true, transparent: true, opacity: 0.22 })
    );
    group.add(wire);

    // Outer ring torus
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(3.2, 0.012, 6, 80),
      new THREE.MeshBasicMaterial({ color: 0xf4d35e, transparent: true, opacity: 0.18 })
    );
    ring.rotation.x = Math.PI / 2.4;
    group.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.6, 0.009, 6, 80),
      new THREE.MeshBasicMaterial({ color: 0x5bc0be, transparent: true, opacity: 0.14 })
    );
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 5;
    group.add(ring2);

    // Particles
    const count = 180;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.9 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const h = (Math.random() - 0.5) * 4.2;
      positions[i * 3] = Math.cos(theta) * r;
      positions[i * 3 + 1] = h;
      positions[i * 3 + 2] = Math.sin(theta) * r;
    }

    const particles = new THREE.Points(
      new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(positions, 3)),
      new THREE.PointsMaterial({ color: 0xf7fff7, size: 0.032, transparent: true, opacity: 0.58 })
    );
    group.add(particles);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    const key = new THREE.PointLight(0xf4d35e, 7, 20);
    key.position.set(3.8, 3, 5);
    scene.add(key);
    const fill = new THREE.PointLight(0x5bc0be, 5, 18);
    fill.position.set(-4.2, -2, 3.2);
    scene.add(fill);

    // Entrance: scale up only — rAF loop owns rotation so don't tween it
    gsap.fromTo(group.scale, { x: 0.7, y: 0.7, z: 0.7 }, { x: 1, y: 1, z: 1, duration: 1.8, ease: "power3.out" });

    // Mouse parallax
    let mouseX = 0, mouseY = 0;
    const onMouse = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.6;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const resize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    let frameId;
    const clock = new THREE.Clock();
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      group.rotation.y += 0.0026;
      group.rotation.x = Math.sin(t * 0.38) * 0.09;
      group.rotation.x += (mouseY * 0.5 - group.rotation.x) * 0.04;
      group.rotation.y += (mouseX * 0.5 - (group.rotation.y % (Math.PI * 2))) * 0.01;
      ring.rotation.z += 0.0018;
      ring2.rotation.z -= 0.0014;
      particles.rotation.y -= 0.0016;
      wire.rotation.z += 0.0012;
      renderer.render(scene, camera);
    };

    resize();
    animate();
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(frameId);
      mount.removeChild(renderer.domElement);
      [coreGeo, coreMat, wire.geometry, wire.material,
       ring.geometry, ring.material, ring2.geometry, ring2.material,
       particles.geometry, particles.material].forEach((o) => o.dispose());
      renderer.dispose();
    };
  }, []);

  return <div className="hero-scene" ref={mountRef} aria-hidden="true" />;
}
