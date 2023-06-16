import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import '../styles/overlay.css'
import { useEffect } from "react";
import styled from "styled-components";

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
            <GuideText>스크롤을 통해 앞뒤로 이동해보세요</GuideText>
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

// styled-components
const GuideText = styled.div`
  width: 50%;
  padding: 0.75rem 0;
  font-size: 1.25rem;
  background-image:
    linear-gradient(
      to right, 
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 100),
      rgba(255, 255, 255, 0)
    );
`