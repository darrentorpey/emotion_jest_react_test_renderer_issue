import React from 'react';
import styled from 'emotion/react'

const AvatarCSS = (props) =>
  <div css={`
  & img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }
`} />

const AvatarStyled = styled('div')`
  & img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }
`

export default AvatarCSS
// export default AvatarStyled
