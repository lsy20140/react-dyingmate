import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import '../styles/overlay.css'
import { useEffect } from "react";
import scrolling from '../assets/img/scrolling.png'

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();

  useEffect(() => 
    setPlay(true)
  )

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <div className="intro__scroll">
            <img src={scrolling} />
            <p>스크롤을 통해 앞뒤로 이동해보세요</p>
          </div>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Finish</p>
        {/* <p className="outro__text">🔁메인으로 돌아가기</p> */}
      </div>
    </div>
  );
};