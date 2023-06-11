import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import '../styles/overlay.css'
import Login from "./Login";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();

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
          <p className="intro__scroll">스크롤하여 이동해보세요</p>
          <p
            className="start"
            onClick={() => {
              setPlay(true);
            }}

          >
            시작하기
          </p>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Finish</p>
      </div>
    </div>
  );
};