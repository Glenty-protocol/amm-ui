import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  // {
  //   label: 'Home',
  //   icon: 'HomeIcon',
  //   href: 'https://bears.finance/'
  // },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://kittyswap.finance',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://kittyswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://kittyswap.finance/pools',
  },
  {
    label: 'Lottery (soon)',
    icon: 'TicketIcon',
    href: '#',
  },
  {
    label: 'Catsino Games (soon)',
    icon: 'IfoIcon',
    href: '#',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://testing.bears.finance/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x27162118C8690E30B584EC759E1Aa52AfDab4488',
      },
      // {
      //   label: 'GitHub',
      //   href: 'https://github.com/BEAR-finance',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: "Github",
        href: "https://github.com/KittySwap-Finance",
      },
      {
        label: "Docs",
        href: "https://kittyswap.gitbook.io/kittyswap/",
      },
      {
        label: "Blog",
        href: "https://kittyswap.medium.com/",
      },
    ],
  }
]

export default config
