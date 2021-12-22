import { ChainId } from '@pancakeswap-libs/sdk'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Button, LinkExternal } from '@pancakeswap-libs/uikit'
import { ArrowUpCircle } from 'react-feather'
import { AutoColumn } from '../Column'
import { getEtherscanLink } from '../../utils'
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers'

type TransactionSubmittedContentProps = {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
}

const TransactionSubmittedContent = ({ onDismiss, chainId, hash }: TransactionSubmittedContentProps) => {
  const theme = useContext(ThemeContext)

  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss} >Transaction submitted</ContentHeader>
        <ConfirmedIcon>
          <ArrowUpCircle strokeWidth={0.5} size={97} color="rgb(218, 165, 32)" />
        </ConfirmedIcon>
        <AutoColumn gap="8px" justify="center">
          {chainId && hash && (
            <LinkExternal href={getEtherscanLink(chainId, hash, 'transaction')} color="rgb(218, 165, 32)" >View on bscscan</LinkExternal>
          )}
          <Button onClick={onDismiss} mt="20px" style={{backgroundColor:"#788cff"}} >
            Close
          </Button>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default TransactionSubmittedContent
