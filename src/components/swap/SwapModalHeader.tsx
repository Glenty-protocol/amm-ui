import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Trade, TradeType } from '@pancakeswap-libs/sdk'
import { Button, Text } from '@pancakeswap-libs/uikit'
import { ArrowDown, AlertTriangle } from 'react-feather'

import { Field } from '../../state/swap/actions'
import { TYPE } from '../Shared'
import { isAddress, shortenAddress } from '../../utils'
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown, warningSeverity } from '../../utils/prices'
import { AutoColumn } from '../Column'
import CurrencyLogo from '../CurrencyLogo'
import { RowBetween, RowFixed } from '../Row'
import { SwapShowAcceptChanges } from './styleds'

const { main: Main } = TYPE

const PriceInfoText = styled(Text)`
  font-style: italic;
  line-height: 1.3;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`

export default function SwapModalHeader({
  trade,
  allowedSlippage,
  recipient,
  showAcceptChanges,
  onAcceptChanges,
}: {
  trade: Trade
  allowedSlippage: number
  recipient: string | null
  showAcceptChanges: boolean
  onAcceptChanges: () => void
}) {
  const slippageAdjustedAmounts = useMemo(() => computeSlippageAdjustedAmounts(trade, allowedSlippage), [
    trade,
    allowedSlippage,
  ])
  const { priceImpactWithoutFee } = useMemo(() => computeTradePriceBreakdown(trade), [trade])
  const priceImpactSeverity = warningSeverity(priceImpactWithoutFee)

  const theme = useContext(ThemeContext)

  return (
    <AutoColumn gap="md" style={{ marginTop: '20px' }}>
      <RowBetween align="flex-end">
        <RowFixed gap="0px">
          <CurrencyLogo currency={trade.inputAmount.currency} size="24px" style={{ marginRight: '12px' }} />
          <Text
            fontSize="24px"
            color="white"
          >
            {trade.inputAmount.toSignificant(6)}
          </Text>
        </RowFixed>
        <RowFixed gap="0px">
          <Text fontSize="24px" style={{ marginLeft: '10px', fontWeight: 500 }} color="white">
            {trade.inputAmount.currency.symbol}
          </Text>
        </RowFixed>
      </RowBetween>
      <RowFixed>
        <ArrowDown size="16" color={theme.colors.textSubtle} style={{ marginLeft: '4px', minWidth: '16px' }} />
      </RowFixed>
      <RowBetween align="flex-end">
        <RowFixed gap="0px">
          <CurrencyLogo currency={trade.outputAmount.currency} size="24px" style={{ marginRight: '12px' }} />
          <Text
            fontSize="24px"
            style={{ marginLeft: '10px', fontWeight: 500 }}
            color="white"
          >
            {trade.outputAmount.toSignificant(6)}
          </Text>
        </RowFixed>
        <RowFixed gap="0px">
          <Text fontSize="24px" style={{ marginLeft: '10px', fontWeight: 500 }} color="white">
            {trade.outputAmount.currency.symbol}
          </Text>
        </RowFixed>
      </RowBetween>
      {showAcceptChanges ? (
        <SwapShowAcceptChanges justify="flex-start" gap="0px">
          <RowBetween>
            <RowFixed>
              <AlertTriangle size={20} style={{ marginRight: '8px', minWidth: 24 }} />
              <Main color="white"> Price Updated</Main>
            </RowFixed>
            <Button onClick={onAcceptChanges}>Accept</Button>
          </RowBetween>
        </SwapShowAcceptChanges>
      ) : null}
      <AutoColumn justify="flex-start" gap="sm" style={{ padding: '16px 0 0' }}>
        {trade.tradeType === TradeType.EXACT_INPUT ? (
          <PriceInfoText color="white">
            {`Output is estimated. You will receive at least `}
            <span style={{color:'white'}}>
              {slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(6)} {trade.outputAmount.currency.symbol}
            </span>
            {' or the transaction will revert.'}
          </PriceInfoText>
        ) : (
          <PriceInfoText color="white">
            {`Input is estimated. You will sell at most `}
            <span style={{color:'white'}}>
              {slippageAdjustedAmounts[Field.INPUT]?.toSignificant(6)} {trade.inputAmount.currency.symbol}
            </span>
            {' or the transaction will revert.'}
          </PriceInfoText>
        )}
      </AutoColumn>
      {recipient !== null ? (
        <AutoColumn justify="flex-start" gap="sm" style={{ padding: '16px 0 0' }}>
          <Main color="white">
            Output will be sent to{' '}
            <b style={{color:'white'}} title={recipient}>{isAddress(recipient) ? shortenAddress(recipient) : recipient}</b>
          </Main>
        </AutoColumn>
      ) : null}
    </AutoColumn>
  )
}
