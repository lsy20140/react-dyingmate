import { createContext, useContext, useState } from "react";

const Context = createContext();

export const PlayProvider = ({ children }) => {
  const [play, setPlay] = useState(false)
  const [end, setEnd] = useState(false)
  const [hasScroll, setHasScroll] = useState(false)
  const [focus, setFocus] = useState(false)
  const [startFunc, setStartFunc] = useState(false)
  const [friendList, setFriendList] = useState(false)

  return (
    <Context.Provider
      value={{
        play, setPlay, end, setEnd, hasScroll, setHasScroll, focus, setFocus, startFunc, setStartFunc, friendList, setFriendList
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