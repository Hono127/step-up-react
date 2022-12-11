/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import { jsx, css } from '@emotion/react'

function Emotion() {
  const containerStyle = css`
      border: solid 2px #392eff;
      border-radius: 20px;
      padding: 8px;
      margin: 8px;
      display:flex;
      justify-content: space-around;
      align-items: center;
      `
  return (
    <>
      <div css={containerStyle}>
        <p>- Emotion -</p>
        <button>ボタン</button>
      </div>
    </>
  )
}

export default Emotion