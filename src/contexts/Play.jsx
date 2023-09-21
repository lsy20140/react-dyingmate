import { createContext, useContext, useState } from "react";

const Context = createContext();

export const PlayProvider = ({ children }) => {
  const [play, setPlay] = useState(false)
  const [end, setEnd] = useState(false)
  const [hasScroll, setHasScroll] = useState(false)
  const [focus, setFocus] = useState(false)
  const [startFunc, setStartFunc] = useState(false)
  const [friendList, setFriendList] = useState(false)
  const [enter, setEnter] = useState(true)

  return (
    <Context.Provider
      value={{
        play, setPlay, 
        end, setEnd, 
        hasScroll, setHasScroll, 
        focus, setFocus, 
        startFunc, setStartFunc, 
        enter, setEnter,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const usePlay = () => {
  const context = useContext(Context)

  if(context === undefined) {
    throw new Error("must be used within a PlayProvider")
  }

  return context
}