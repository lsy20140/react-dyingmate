import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { usePlay } from '../contexts/Play';
import { useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, useScroll, OrbitControls} from "@react-three/drei";
import * as THREE from "three";
import { Group, Vector3, Euler } from "three";
import { gsap } from "gsap";
import { House2 } from './models/House2';
import { MainBackground } from './MainBackground';
import { House1 } from './models/House1';
import { Campfire } from './models/Campfire';
import { Cemetery } from './models/Cemetry';


const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 50;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;
const FRICTION_DISTANCE = 42;

export default function MainExperience() {

  const curvePoints = useMemo(
    () => [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(20, 0, -CURVE_DISTANCE),
      new THREE.Vector3(50, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(-20, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(-30, 0, 1* CURVE_DISTANCE),
    ],
    []
  );

  const sceneOpacity = useRef(0);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
  }, []);

  const houses = useMemo(
    () => [

      // // First House - 주인 할머니
      // {
      //   scale: new Vector3(20, 20, 20),
      //   position: new Vector3(
      //     curvePoints[1].x - 10,
      //     curvePoints[1].y,
      //     curvePoints[1].z + 5
      //   ),
      // },
      // Second House - 아저씨
      {
        scale: new Vector3(15, 15, 15),
        position: new Vector3(
          curvePoints[2].x + 8,
          curvePoints[2].y,
          curvePoints[2].z + 5
        ),
        rotation: new Euler(0, -Math.PI / 2, 0),
      },

      // Third House - 20대 여자
      {
        scale: new Vector3(15, 15, 15),
        position: new Vector3(
          curvePoints[3].x,
          curvePoints[3].y,
          curvePoints[3].z - 5
        ),
      },

      // Fourth House - 사용자의 집
      {
        scale: new Vector3(10, 10, 10),
        position: new Vector3(
          curvePoints[4].x - 4,
          curvePoints[4].y,
          curvePoints[4].z + 5
        ),
        rotation: new Euler(0, Math.PI / 2, 0),
      },

      // End - Campfire
      // {
      //   scale: new Vector3(15, 15, 15),
      //   position: new Vector3(
      //     curvePoints[5].x,
      //     curvePoints[5].y,
      //     curvePoints[5].z + 5
      //   ),
      // },

    ],
    []
  );

  const shape = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, -1)
    shape.lineTo(0, 1)

    return shape
  }, [curve])

  const cameraGroup = useRef();
  const cameraRail = useRef();
  const camera = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0);

  const { play, setHasScroll, end, setEnd } = usePlay();

  useFrame((_state, delta) => {
    if (window.innerWidth > window.innerHeight) {
      // LANDSCAPE
      camera.current.fov = 42;
      camera.current.position.z = 5;
    } else {
      // PORTRAIT
      camera.current.fov = 80;
      camera.current.position.z = 2;
    }

    if (lastScroll.current <= 0 && scroll.offset > 0) {
      setHasScroll(true);
    }

    if (play && !end && sceneOpacity.current < 1) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        1,
        delta * 0.1
      );
    }

    if (end && sceneOpacity.current > 0) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        0,
        delta
      );
    }

    if (end) {
      return;
    }

    const scrollOffset = Math.max(0, scroll.offset);

    let friction = 1;
    let resetCameraRail = true;

    if (resetCameraRail) {
      const targetCameraRailPosition = new Vector3(0, 0, 0);
      cameraRail.current.position.lerp(targetCameraRailPosition, delta);
    }

    // CALCULATE LERPED SCROLL OFFSET
    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta * friction
    );
    // PROTECT BELOW 0 AND ABOVE 1
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    lastScroll.current = lerpedScrollOffset;
    tl.current.seek(lerpedScrollOffset * tl.current.duration());

    const curPoint = curve.getPoint(lerpedScrollOffset);

    // Follow the curve points
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // Make the group look ahead on the curve

    const lookAtPoint = curve.getPoint(
      Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    // Airplane rotation

    const tangent = curve.getTangent(lerpedScrollOffset + CURVE_AHEAD_AIRPLANE);

    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // stronger angle

    // LIMIT PLANE ANGLE
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE);
    }

    // SET BACK ANGLE
    angle = (angleDegrees * Math.PI) / 180;

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angle
      )
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);

    if (
      cameraGroup.current.position.z > CURVE_DISTANCE - 5
    ) {
      setEnd(true);
      planeOutTl.current.play();
    }
  });

  const airplane = useRef();

  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#79a9d0",
    colorB: "#ffbd76",
  });

  const planeInTl = useRef();
  const planeOutTl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 100,
      colorA: "#6f35cc",
      colorB: "#8aa6ed",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#2f167a",
      colorB: "#2f327d",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#001424",
      colorB: "#0d3352",
    });

    tl.current.pause();

    planeInTl.current = gsap.timeline();
    planeInTl.current.pause();
    planeInTl.current.from(airplane.current.position, {
      duration: 3,
      z: 5,
      y: -2,
    });

    planeOutTl.current = gsap.timeline();
    planeOutTl.current.pause();

    planeOutTl.current.to(
      airplane.current.position,
      {
        duration: 10,
        z: -250,
        y: 10,
      },
      0
    );
    planeOutTl.current.to(
      cameraRail.current.position,
      {
        duration: 8,
        y: 12,
      },
      0
    );
    planeOutTl.current.to(airplane.current.position, {
      duration: 1,
      z: -1000,
    });
  }, []);

  useEffect(() => {
    if (play) {
      planeInTl.current.play();
    }
  }, [play]);


  return useMemo(() => (
    <>
      <directionalLight position={[0, 3, 1]} intensity={0.1} />
      {/* <group position={[0,0,0]}>
        <mesh>
          <extrudeGeometry
            args={[
              shape, 
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              }
            ]} />
            <meshStandardMaterial color={"red"} opacity={1} transparent/>
        </mesh>
      </group> */}
      <group ref={cameraGroup}>
          <MainBackground backgroundColors={backgroundColors} />
          <group ref={cameraRail}>
            <PerspectiveCamera
              ref={camera}
              position={[0, 3, 0]}
              fov={42}
              makeDefault
            />
          </group>
          <group ref={airplane}>
              <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
                {/* <House2
                  rotation-y={Math.PI / 2}
                  scale={[0.2, 0.2, 0.2]}
                  position-y={0.1}
                /> */}
              </Float>
          </group>
      </group>
      <group position={[0,-17,0]}>
        <Cemetery/> 
      </group>
      

      {/* HOUSES */}
      <group 
        position={ new Vector3(
          curvePoints[1].x - 12,
          curvePoints[1].y,
          curvePoints[1].z + 5
        )}
        scale={new Vector3(10, 10, 10)}
        rotation-y={Math.PI / 3}

      >
        <House1 />
      </group>

      {houses.map((house, index) => (
        <House2 sceneOpacity={sceneOpacity} {...house} key={index} />
      ))}



      <group
        position={new Vector3(
          curvePoints[5].x,
          curvePoints[5].y,
          curvePoints[5].z + 5
        )}
        scale={new Vector3(1,1,1)}
        rotation-y={Math.PI / 2}
      >
        <pointLight positon={curvePoints[5]} intensity={2} />
        <Campfire />
      </group>
    </>
  )
  )
}
