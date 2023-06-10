import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import '../styles/splash.css'

export const Splash = () => {
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
          <h1 className="title">
            Dying Mate
          </h1>
          <p className="intro__scroll">스크롤하여 이동해보세요</p>
          <p
            className="start"
            onClick={() => {
              setPlay(true);
            }}
          >
            Click to Start
          </p>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Finish</p>
      </div>
    </div>
  );
};