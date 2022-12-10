import React from 'react'

function ChildArea(props) {
  const { open } = props;
  return (
    <>
      {/* 三項演算子で?openの値がtrue(?)だったら()内を返し、そうでなければnullを返す */}
      {open ? (
        <div>表示コンポーネント</div>
      ) : null}

    </>
  )
}

export default ChildArea;