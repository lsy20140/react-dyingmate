import React from 'react'

export default function StyledButton({text, btnColor}) {
  const ButtonStyle = {
    width: "fit-content",
    color: "white",
    fontWeight: "700",
    borderRadius: "1.25rem",
    backgroundColor: `${btnColor}`,
    padding: "0.75rem 2.25rem",
    border: "none"
  }

  return (
    <button style={ButtonStyle}>
      {text}
    </button>
  )
}
