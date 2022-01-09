import { _fetchData } from '@ethersproject/web'
import { useEffect, useState } from 'react'
import { useMulticallContract } from './useContract'


type ApiResponse = {
  prices: {
    [key: string]: string
  }
  update_at: string
}

const useGetPriceData = () => {
  const [data, setData] = useState(0)
  const [gValue, setG] = useState(0)
  const [bValue, setB] = useState(0)
  const [bUsd, setU] = useState(0)
  const multicallContract = useMulticallContract();

  useEffect(() => {
    const fetchdata=async ()=>{
      await fetch('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x97769506e36988d08745b64e78f66e37858f14e9&address=0xfcdf033e55ca6a62300337d88da1810933a54f82&tag=latest&apikey=G9GR47NUZ9B32CHEYFQE7N99Z5V54V1SC8')
      .then(res=>res.json())
      .then(glenty=>setG(glenty.result/1000000000000000000))
      await fetch('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&address=0xfcdf033e55ca6a62300337d88da1810933a54f82&tag=latest&apikey=G9GR47NUZ9B32CHEYFQE7N99Z5V54V1SC8')
      .then(res=>res.json())
      .then(bnb=>setB(bnb.result/1000000000000000000))
      await fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd')
      .then(res=>res.json())
      .then(usd=>setU(usd.binancecoin.usd))
    
    setData((bValue/gValue)*bUsd);
    }
    fetchdata();
  },[gValue,bValue,bUsd]);
  return data
}

export default useGetPriceData