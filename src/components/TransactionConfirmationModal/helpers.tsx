import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, CloseIcon } from '@pancakeswap-libs/uikit'
import { AutoColumn, ColumnCenter } from '../Column'


export const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  background: rgb(49, 39, 131) !important;
`
export const Section = styled(AutoColumn)`
  padding: 24px;
`

export const ConfirmedIcon = styled(ColumnCenter)`
  padding: 40px 0;
`

export const BottomSection = styled(Section)`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: rgb(49, 39, 131) !important;
`

/**
 * TODO: Remove this when modal system from the UI Kit is implemented
 */
const StyledContentHeader = styled.div`
  align-items: center;
  display: flex;

  & > ${Heading} {
    flex: 1;
    color:rgb(218, 165, 32);
  }
`

type ContentHeaderProps = {
  children: ReactNode
  onDismiss: () => void
}

export const ContentHeader = ({ children, onDismiss }: ContentHeaderProps) => (
  <StyledContentHeader>
    <Heading>{children}</Heading>
    <IconButton onClick={onDismiss} variant="text">
      <CloseIcon color="rgb(218, 165, 32)" />
    </IconButton>
  </StyledContentHeader>
)
