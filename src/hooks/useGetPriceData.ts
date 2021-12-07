import { _fetchData } from '@ethersproject/web'
import { useEffect, useState } from 'react'
import { useMulticallContract } from './useContract'


type ApiResponse = {
  prices: {
    [key: string]: string
  }
  update_at: string
}
let gValue = 0
let bValue = 1
let bUsd = 1
const useGetPriceData = () => {
  const [data, setData] = useState<number>(0)
  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchdata=()=>{
      fetch('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x97769506e36988d08745b64e78f66e37858f14e9&address=0xfcdf033e55ca6a62300337d88da1810933a54f82&tag=latest&apikey=G9GR47NUZ9B32CHEYFQE7N99Z5V54V1SC8')
      .then(res=>res.json())
      .then(glenty=>{gValue=glenty.result/1000000000000000000})
      fetch('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&address=0xfcdf033e55ca6a62300337d88da1810933a54f82&tag=latest&apikey=G9GR47NUZ9B32CHEYFQE7N99Z5V54V1SC8')
      .then(res=>res.json())
      .then(bnb=>{bValue=bnb.result/1000000000000000000})
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd')
      .then(res=>res.json())
      .then(usd=>{bUsd=usd.binancecoin.usd})
    
    setData((gValue/bValue)*bUsd)  
    }
    fetchdata();
  },[multicallContract]);
  return data
}

export default useGetPriceData