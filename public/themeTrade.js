window.onload=()=>{
    window.innerWidth > 900? setTimeout(function() {document.querySelector('#swap-page')?swap():liquidPc() }, 2000) :setTimeout(function() { document.querySelector('#swap-page')?swapMob():liquidMob() }, 2000)
    window.innerWidth > 900? setInterval(function(){document.querySelector('#swap-page')?clickSwapPc():clickLiquidPc()}, 1):setInterval(function(){document.querySelector('#swap-page')?clickSwapMobile():clickLiquidMob()}, 1)

}
// global 

function clickSwapPc(){
  document.querySelector('#swap-page div').style.backgroundColor='#788cff';
  document.querySelectorAll('#swap-page div')[4].style.backgroundColor='#312783';
  document.querySelector('#swap-currency-input div').style.background='#1c1951';
  document.querySelector('#swap-currency-input button span div').style.color='#f3ba2f';
  document.querySelector('#swap-currency-input button span svg').style.fill='#f3ba2f';
  document.querySelector('#swap-currency-input input').style.color='white';

  document.querySelector('#swap-currency-output div').style.background='#1c1951';
  document.querySelector('#swap-currency-output button span div').style.color='#f3ba2f';
  document.querySelector('#swap-currency-output button span svg').style.fill='#f3ba2f';
  document.querySelector('#swap-currency-output input').style.color='white';
  document.querySelector('#swap-page div').style.borderBottom='0';
  document.querySelectorAll('#swap-page button')[5].style.background='rgb(218, 165, 32)'; 
  document.querySelectorAll('#swap-page h2')[0].style.color='rgb(218, 165, 32)'; 
  document.querySelectorAll('#swap-page h2')[0].parentElement.querySelector('div').style.color='white'; 
  document.querySelector('#root div div').querySelectorAll('div')[22].style.marginLeft='-5%';
  document.querySelector('a').style.marginTop='7%';
  document.querySelector('a').style.marginLeft='1%';
 }
 function clickLiquidPc(){
  const container = document.querySelector('#liquid').childNodes[1];
     container.childNodes[0].style.background='#788cff';
     container.childNodes[0].style.borderBottom='0';
     container.childNodes[1].style.background='#312783';
     document.querySelector('#liquid').childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].style.background='#1c1951';
     document.querySelector('#liquid').childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].style.border='0';
     document.querySelector('#liquid').childNodes[1].querySelector('a').style.background='#f3ba2f';
     document.querySelector('#liquid').childNodes[1].querySelector('h2').style.color='#f3ba2f';
     document.querySelector('#liquid').childNodes[1].querySelector('div[color]').style.color='white';
     document.querySelector('#root div div').querySelectorAll('div')[22].style.marginLeft='-5%';
     document.querySelector('#liquid').childNodes[0].style.marginLeft='15%';
     document.querySelector('a').style.marginTop='7%';
     document.querySelector('a').style.marginLeft='1%';

 }
 function clickSwapMobile(){
  document.querySelector('#swap-page div').style.backgroundColor='#788cff';
  document.querySelectorAll('#swap-page div')[4].style.backgroundColor='#312783';
  document.querySelector('#swap-currency-input div').style.background='#1c1951';
  document.querySelector('#swap-currency-input button span div').style.color='#f3ba2f';
  document.querySelector('#swap-currency-input button span svg').style.fill='#f3ba2f';
  document.querySelector('#swap-currency-input input').style.color='white';

  document.querySelector('#swap-currency-output div').style.background='#1c1951';
  document.querySelector('#swap-currency-output button span div').style.color='#f3ba2f';
  document.querySelector('#swap-currency-output button span svg').style.fill='#f3ba2f';
  document.querySelector('#swap-currency-output input').style.color='white';
  document.querySelector('#swap-page div').style.borderBottom='0';
  document.querySelectorAll('#swap-page button')[5].style.background='rgb(218, 165, 32)'; 
  document.querySelectorAll('#swap-page h2')[0].style.color='rgb(218, 165, 32)'; 
  document.querySelectorAll('#swap-page h2')[0].parentElement.querySelector('div').style.color='white';
}
function clickLiquidMob(){
  const container = document.querySelector('#liquid').childNodes[1];
     container.childNodes[0].style.background='#788cff';
     container.childNodes[0].style.borderBottom='0';
     container.childNodes[1].style.background='#312783';
     document.querySelector('#liquid').childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].style.background='#1c1951';
     document.querySelector('#liquid').childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].style.border='0';
     document.querySelector('#liquid').childNodes[1].querySelector('a').style.background='#f3ba2f';
     document.querySelector('#liquid').childNodes[1].querySelector('h2').style.color='#f3ba2f';
     document.querySelector('#liquid').childNodes[1].querySelector('div[color]').style.color='white';
     document.querySelector('#liquid').childNodes[0].style.textAlign='center';

 }
//global finished
function swap(){
    document.querySelector('nav').style.backgroundColor='transparent';
    document.querySelector('nav').style.borderBottom='0';
    document.querySelector('#root').style.background = 'url("./images/GLENTY_background.png")'
    document.querySelector('#root').style.backgroundPositionX = 'center'
    document.querySelector('#root').style.backgroundSize='cover';
    document.querySelectorAll('nav svg')[2].style.width='310px';
    /* document.querySelector('#root div div').querySelectorAll('div')[16].classList.add('price'); */
    setTimeout(function() {
    document.querySelector('#root div div').querySelectorAll('div')[17].classList.add('socialL');
    document.querySelector('#root').appendChild(document.querySelector('.socialL')); 
    document.querySelector('#root div div').querySelectorAll('div')[18].classList.add('lang')
    document.querySelector('.lang').querySelector('button').querySelector('svg').style.fill = 'white';
    document.querySelector('.lang').querySelector('button').querySelector('div').style.color = 'white';
    document.querySelector('nav').insertBefore(document.querySelector('#root div div').querySelectorAll('div')[18], document.querySelector('nav').childNodes[2])   
    document.querySelector('#root div div').querySelectorAll('div')[17].style.background='transparent';
    document.querySelector('.lang').style.marginRight='-8%';
}, 2000);

  const home = document.createElement("div")
  const trade = document.createElement("div")
  const farms = document.createElement("div")
  const gigapool = document.createElement("div")
  const github = document.createElement("div")
  const docs = document.createElement("div")
  const drop = document.createElement('div')

  const homel = document.createElement("a")
  const tradel = document.createElement("a")
  const farmsl = document.createElement("a")
  const gigapooll = document.createElement("a")
  const githubl = document.createElement("a")
  const docsl = document.createElement("a")
 
   homel.innerHTML= 'Top100'
   tradel.innerHTML= 'Trade'
   farmsl.innerHTML= 'Farms'
   gigapooll.innerHTML= 'Giga Pool'
   githubl.innerHTML= 'Github'
   docsl.innerHTML= 'Docs'
   

   homel.setAttribute("href", "https://glenty.com/top100")
   tradel.setAttribute("href", "https://exchange.glenty.com/#/swap")
   farmsl.setAttribute("href", "https://glenty.com/farms")
   gigapooll.setAttribute("href", "https://giga.glenty.com/")
   githubl.setAttribute("href", "https://github.com/glenty-protocol")
   docsl.setAttribute("href", "https://glenty.gitbook.io/glenty/")

   homel.setAttribute("class", "nav-links")
   tradel.setAttribute("class", "nav-links")
   farmsl.setAttribute("class", "nav-links")
   gigapooll.setAttribute("class", "nav-links")
   githubl.setAttribute("class", "nav-links")
   docsl.setAttribute("class", "nav-links")


   home.appendChild(homel)
   trade.appendChild(tradel)
   trade.appendChild(drop)
   farms.appendChild(farmsl)
   gigapool.appendChild(gigapooll)
   github.appendChild(githubl)
   docs.appendChild(docsl)
 

   const heade = document.createElement('div')
   const nav = document.querySelector('nav')
   heade.appendChild(trade)
   heade.appendChild(farms)
   heade.appendChild(home)
   heade.appendChild(gigapool)
   heade.appendChild(github)
   heade.appendChild(docs)

   nav.insertBefore(heade, nav.childNodes[1])
   heade.classList.add('header-grid')

   document.querySelector('#root div div').querySelectorAll('div')[12].style.background='transparent';
   document.querySelector('button').remove();
   for(var i = 0; i < document.querySelectorAll('button').length;i++){
    if(document.querySelectorAll('button')[i].textContent ==='Connect'){
     document.querySelectorAll('button')[i].style.backgroundColor= 'white';
     document.querySelectorAll('button')[i].style.color= 'black';
     document.querySelectorAll('button')[i].style.fontWeight= 'normal';
     document.querySelectorAll('button')[i].style.letterSpacing= '0.11em';
    }else{
      false
    }
  }
  


   /*swap*/
   
   
   document.querySelector('#swap-page')?clickSwapPc():false
   setInterval(function(){
    document.querySelector('#swap-page')?clickSwapPc():false
}, 1);
setTimeout(function(){
  document.querySelector('#loading').style.display='none';}, 7000);
}


function liquidPc(){
  document.querySelector('nav').style.backgroundColor='transparent';
  document.querySelector('nav').style.borderBottom='0';
  document.querySelector('#root').style.background = 'url("./images/GLENTY_background.png")'
  document.querySelector('#root').style.backgroundPositionX = 'center'
  document.querySelector('#root').style.backgroundSize='cover';
  document.querySelectorAll('nav svg')[2].style.width='310px';
  /* document.querySelector('#root div div').querySelectorAll('div')[16].classList.add('price'); */
  setTimeout(function() {
  document.querySelector('#root div div').querySelectorAll('div')[17].classList.add('socialL');
  document.querySelector('#root').appendChild(document.querySelector('.socialL')); 
  document.querySelector('#root div div').querySelectorAll('div')[18].classList.add('lang')
  document.querySelector('.lang').querySelector('button').querySelector('svg').style.fill = 'white';
  document.querySelector('.lang').querySelector('button').querySelector('div').style.color = 'white';
  document.querySelector('nav').insertBefore(document.querySelector('#root div div').querySelectorAll('div')[18], document.querySelector('nav').childNodes[2])   
  document.querySelector('#root div div').querySelectorAll('div')[17].style.background='transparent';
  document.querySelector('.lang').style.marginRight='-8%';
}, 2000);

const home = document.createElement("div")
  const trade = document.createElement("div")
  const farms = document.createElement("div")
  const gigapool = document.createElement("div")
  const github = document.createElement("div")
  const docs = document.createElement("div")
  const drop = document.createElement('div')

  const homel = document.createElement("a")
  const tradel = document.createElement("a")
  const farmsl = document.createElement("a")
  const gigapooll = document.createElement("a")
  const githubl = document.createElement("a")
  const docsl = document.createElement("a")
 
   homel.innerHTML= 'Top100'
   tradel.innerHTML= 'Trade'
   farmsl.innerHTML= 'Farms'
   gigapooll.innerHTML= 'Giga Pool'
   githubl.innerHTML= 'Github'
   docsl.innerHTML= 'Docs'
   

   homel.setAttribute("href", "https://glenty.com/top100")
   tradel.setAttribute("href", "https://exchange.glenty.com/#/swap")
   farmsl.setAttribute("href", "https://glenty.com/farms")
   gigapooll.setAttribute("href", "https://giga.glenty.com/")
   githubl.setAttribute("href", "https://github.com/glenty-protocol")
   docsl.setAttribute("href", "https://glenty.gitbook.io/glenty/")

   homel.setAttribute("class", "nav-links")
   tradel.setAttribute("class", "nav-links")
   farmsl.setAttribute("class", "nav-links")
   gigapooll.setAttribute("class", "nav-links")
   githubl.setAttribute("class", "nav-links")
   docsl.setAttribute("class", "nav-links")


   home.appendChild(homel)
   trade.appendChild(tradel)
   trade.appendChild(drop)
   farms.appendChild(farmsl)
   gigapool.appendChild(gigapooll)
   github.appendChild(githubl)
   docs.appendChild(docsl)
 

   const heade = document.createElement('div')
   const nav = document.querySelector('nav')
   heade.appendChild(trade)
   heade.appendChild(farms)
   heade.appendChild(home)
   heade.appendChild(gigapool)
   heade.appendChild(github)
   heade.appendChild(docs)

   nav.insertBefore(heade, nav.childNodes[1])
   heade.classList.add('header-grid')

 document.querySelector('#root div div').querySelectorAll('div')[12].style.background='transparent';
 document.querySelector('button').remove();
 for(var i = 0; i < document.querySelectorAll('button').length;i++){
   if(document.querySelectorAll('button')[i].textContent ==='Connect'){
    document.querySelectorAll('button')[i].style.backgroundColor= 'white';
    document.querySelectorAll('button')[i].style.color= 'black';
    document.querySelectorAll('button')[i].style.fontWeight= 'normal';
    document.querySelectorAll('button')[i].style.letterSpacing= '0.11em';
   }else{
     false
   }
 }
 
 /*liquid*/
 
 
 document.querySelector('#liquid')?clickLiquidPc():false
 setInterval(function(){
  document.querySelector('#liquid')?clickLiquidPc():false
}, 1);
setTimeout(function(){
  document.querySelector('#loading').style.display='none';}, 7000);
}
function liquidMob(){
    document.querySelector('#root').style.background = 'url("./images/backgroundMobile.svg")'
    document.querySelector('#root').style.backgroundPositionX = 'center'
    document.querySelector('#root').style.backgroundSize='cover';
    document.querySelector('nav').style.backgroundColor='transparent';
    document.querySelector('nav').style.borderBottom='0';
    function price(){
      setTimeout(document.querySelector('nav button').click(),2000);
      document.querySelector('.price')?setTimeout(document.querySelector('#root').appendChild(document.querySelector('.price')), 3000):false
      setTimeout(document.querySelector('nav button').click(), 3500);
      setTimeout(  document.querySelector('nav button').remove(), 3700);
    }
    
    price();
  document.querySelectorAll('nav svg')[0].style.width='120px';
  document.querySelector('#swap-page')?clickSwapMobile():false

   setInterval(function(){
    document.querySelector('#swap-page')?clickLiquidMob():false
}, 1);


   document.querySelectorAll('button')[0].style.backgroundColor= 'white';
   document.querySelectorAll('button')[0].style.color= 'black';
   document.querySelectorAll('button')[0].style.fontWeight= 'normal';
   document.querySelectorAll('button')[0].style.letterSpacing= '0.11em';


 /*footer */
 createFooter();
 createMenuFooter();
 document.querySelectorAll('.footerLinks')[3].addEventListener('click',function(){
   document.querySelector('.moreMenu').style.display === "grid"? 
   document.querySelector('.moreMenu').style.display='none':
   document.querySelector('.moreMenu').style.display='grid'
 })

 function createFooter(){
    /*footer*/
    const fixedFooter = document.createElement('div');
    fixedFooter.classList.add('fixedFooter'); 
    const TradeM = document.createElement('a');
    const gigapoolM = document.createElement('a');
    const Top100M = document.createElement('a');
    const MoreM = document.createElement('a');
  
    TradeM.classList.add('footerLinks');
    Top100M.classList.add('footerLinks');
    MoreM.classList.add('footerLinks');
    gigapoolM.classList.add('footerLinks');
  
  
    TradeM.setAttribute('href','/trade');
    Top100M.setAttribute('href','/top100');
    gigapoolM.setAttribute('href','/gigapool');
  
  
    const tradeImg = document.createElement('img');
    const top100Img = document.createElement('img');
    const moreImg = document.createElement('img');
    const gigapoolImg = document.createElement('img');
  
  
    tradeImg.setAttribute('src','./images/trade.svg');
    top100Img.setAttribute('src','./images/TOP100-Icon.svg');
    moreImg.setAttribute('src','./images/more.svg');
    gigapoolImg.setAttribute('src','./images/gigapool.svg');
  
  
    tradeImg.classList.add('footerImg');
    top100Img.classList.add('footerImg');
    moreImg.classList.add('footerImg');
    gigapoolImg.classList.add('footerImg');
  
  
    const tradeT = document.createElement('p');
    const top100T = document.createElement('p');
    const moreT = document.createElement('p');
    const gigapoolT = document.createElement('p');
  
  
    tradeT.innerText='Trade';
    top100T.innerText='Top100';
    moreT.innerText='More';
    gigapoolT.innerText='Gigapool';
  
  
  
    TradeM.appendChild(tradeImg);
    Top100M.appendChild(top100Img);
    MoreM.appendChild(moreImg);
    gigapoolM.appendChild(gigapoolImg);
  
  
    TradeM.appendChild(tradeT);
    Top100M.appendChild(top100T);
    MoreM.appendChild(moreT);
    gigapoolM.appendChild(gigapoolT);
  
  
  
    fixedFooter.appendChild(TradeM);
    fixedFooter.appendChild(gigapoolM);
    fixedFooter.appendChild(Top100M);
    fixedFooter.appendChild(MoreM);
    document.querySelector('#root').appendChild(fixedFooter);
  }
  
  function createMenuFooter(){
    /*footer*/
    const fixedMenuFooter = document.createElement('div');
    fixedMenuFooter.classList.add('moreMenu'); 
    const docsM = document.createElement('a');
    const githubM = document.createElement('a');
    const FarmsM = document.createElement('a');
    const ipoM = document.createElement('a');
  
  
  
    docsM.classList.add('moreLinks');
    githubM.classList.add('moreLinks');
    FarmsM.classList.add('moreLinks');
    ipoM.classList.add('moreLinks');
  
  
    githubM.setAttribute('href','https://github.com/glenty-protocol');
    docsM.setAttribute('href','https://glenty.gitbook.io/glenty/');
    ipoM.setAttribute('href','/ico');
    FarmsM.setAttribute('href','/farms');
  
  
    const githubImg = document.createElement('img');
    const docsImg = document.createElement('img');
    const farmsImg = document.createElement('img');
    const ipoImg = document.createElement('img');
  
  
    docsImg.setAttribute('src','./images/DOCS.svg');
    ipoImg.setAttribute('src','./images/IPO.svg');
    farmsImg.setAttribute('src','./images/farms.svg');
    githubImg.setAttribute('src','./images/GITHUB.svg');
  
    docsImg.classList.add('footerImg');
    ipoImg.classList.add('footerImg');
    farmsImg.classList.add('footerImg');
    githubImg.classList.add('footerImg');
  
    const githubT = document.createElement('p');
    const ipoT = document.createElement('p');
    const docsT = document.createElement('p');
    const farmT = document.createElement('p');
  
    githubT.innerText='Github';
    docsT.innerText='Docs';
    farmT.innerText='Farms';
    ipoT.innerText='IPO';
  
  
    githubM.appendChild(githubImg);
    docsM.appendChild(docsImg);
    ipoM.appendChild(ipoImg);
    FarmsM.appendChild(farmsImg);
  
  
    githubM.appendChild(githubT);
    ipoM.appendChild(ipoT);
    docsM.appendChild(docsT);
    FarmsM.appendChild(farmT);
  
    /*style*/
    /*fixedMenuFooter.style.borderTop='3px solid #989fac';*/
    fixedMenuFooter.style.borderBottom='3px solid #989fac';
    docsM.style.borderBottom='none';
  
    fixedMenuFooter.appendChild(FarmsM);
    fixedMenuFooter.appendChild(ipoM);
    fixedMenuFooter.appendChild(githubM);
    fixedMenuFooter.appendChild(docsM);
  
    document.querySelector('#root').appendChild(fixedMenuFooter);
  
  }
  setTimeout(function(){
    document.querySelector('#loading').style.display='none';}, 7000);
}

function swapMob(){
    document.querySelector('#root').style.background = 'url("./images/backgroundMobile.svg")'
    document.querySelector('#root').style.backgroundPositionX = 'center'
    document.querySelector('#root').style.backgroundSize='cover';
    document.querySelector('nav').style.backgroundColor='transparent';
    document.querySelector('nav').style.borderBottom='0';
    function price(){
      setTimeout(document.querySelector('nav button').click(),2000);
      document.querySelector('.price')?setTimeout(document.querySelector('#root').appendChild(document.querySelector('.price')), 3000):false
      setTimeout(document.querySelector('nav button').click(), 3500);
      setTimeout(  document.querySelector('nav button').remove(), 3700);
    }
    
    price();
    document.querySelectorAll('nav svg')[0].style.width='120px';
document.querySelector('#swap-page')?clickSwapMobile():false

   setInterval(function(){
    document.querySelector('#swap-page')?clickSwapMobile():false
}, 1);


   document.querySelectorAll('button')[0].style.backgroundColor= 'white';
   document.querySelectorAll('button')[0].style.color= 'black';
   document.querySelectorAll('button')[0].style.fontWeight= 'normal';
   document.querySelectorAll('button')[0].style.letterSpacing= '0.11em';


 /*footer */
 createFooter();
 createMenuFooter();
 document.querySelectorAll('.footerLinks')[3].addEventListener('click',function(){
   document.querySelector('.moreMenu').style.display === "grid"? 
   document.querySelector('.moreMenu').style.display='none':
   document.querySelector('.moreMenu').style.display='grid'
 })

 function createFooter(){
    /*footer*/
    const fixedFooter = document.createElement('div');
    fixedFooter.classList.add('fixedFooter'); 
    const TradeM = document.createElement('a');
    const gigapoolM = document.createElement('a');
    const Top100M = document.createElement('a');
    const MoreM = document.createElement('a');
  
    TradeM.classList.add('footerLinks');
    Top100M.classList.add('footerLinks');
    MoreM.classList.add('footerLinks');
    gigapoolM.classList.add('footerLinks');
  
  
    TradeM.setAttribute('href','https://exchange.glenty.com/#/swap');
    Top100M.setAttribute('href','https://glenty.com/top100');
    gigapoolM.setAttribute('href','https://giga.glenty.com/');
  
  
    const tradeImg = document.createElement('img');
    const top100Img = document.createElement('img');
    const moreImg = document.createElement('img');
    const gigapoolImg = document.createElement('img');
  
  
    tradeImg.setAttribute('src','./images/trade.svg');
    top100Img.setAttribute('src','./images/TOP100-Icon.svg');
    moreImg.setAttribute('src','./images/more.svg');
    gigapoolImg.setAttribute('src','./images/gigapool.svg');
  
  
    tradeImg.classList.add('footerImg');
    top100Img.classList.add('footerImg');
    moreImg.classList.add('footerImg');
    gigapoolImg.classList.add('footerImg');
  
  
    const tradeT = document.createElement('p');
    const top100T = document.createElement('p');
    const moreT = document.createElement('p');
    const gigapoolT = document.createElement('p');
  
  
    tradeT.innerText='Trade';
    top100T.innerText='Top100';
    moreT.innerText='More';
    gigapoolT.innerText='Gigapool';
  
  
  
    TradeM.appendChild(tradeImg);
    Top100M.appendChild(top100Img);
    MoreM.appendChild(moreImg);
    gigapoolM.appendChild(gigapoolImg);
  
  
    TradeM.appendChild(tradeT);
    Top100M.appendChild(top100T);
    MoreM.appendChild(moreT);
    gigapoolM.appendChild(gigapoolT);
  
  
  
    fixedFooter.appendChild(TradeM);
    fixedFooter.appendChild(gigapoolM);
    fixedFooter.appendChild(Top100M);
    fixedFooter.appendChild(MoreM);
    document.querySelector('#root').appendChild(fixedFooter);
  }
  
  function createMenuFooter(){
    /*footer*/
    const fixedMenuFooter = document.createElement('div');
    fixedMenuFooter.classList.add('moreMenu'); 
    const docsM = document.createElement('a');
    const githubM = document.createElement('a');
    const FarmsM = document.createElement('a');
    const ipoM = document.createElement('a');
  
  
  
    docsM.classList.add('moreLinks');
    githubM.classList.add('moreLinks');
    FarmsM.classList.add('moreLinks');
    ipoM.classList.add('moreLinks');
  
  
    githubM.setAttribute('href','https://github.com/glenty-protocol');
    docsM.setAttribute('href','https://glenty.gitbook.io/glenty/');
    ipoM.setAttribute('href','https://glenty.com/ico');
    FarmsM.setAttribute('href','https://glenty.com/farms');
  
  
    const githubImg = document.createElement('img');
    const docsImg = document.createElement('img');
    const farmsImg = document.createElement('img');
    const ipoImg = document.createElement('img');
  
  
    docsImg.setAttribute('src','./images/DOCS.svg');
    ipoImg.setAttribute('src','./images/IPO.svg');
    farmsImg.setAttribute('src','./images/farms.svg');
    githubImg.setAttribute('src','./images/GITHUB.svg');
  
    docsImg.classList.add('footerImg');
    ipoImg.classList.add('footerImg');
    farmsImg.classList.add('footerImg');
    githubImg.classList.add('footerImg');
  
    const githubT = document.createElement('p');
    const ipoT = document.createElement('p');
    const docsT = document.createElement('p');
    const farmT = document.createElement('p');
  
    githubT.innerText='Github';
    docsT.innerText='Docs';
    farmT.innerText='Farms';
    ipoT.innerText='IPO';
  
  
    githubM.appendChild(githubImg);
    docsM.appendChild(docsImg);
    ipoM.appendChild(ipoImg);
    FarmsM.appendChild(farmsImg);
  
  
    githubM.appendChild(githubT);
    ipoM.appendChild(ipoT);
    docsM.appendChild(docsT);
    FarmsM.appendChild(farmT);
  
    /*style*/
    /*fixedMenuFooter.style.borderTop='3px solid #989fac';*/
    fixedMenuFooter.style.borderBottom='3px solid #989fac';
    docsM.style.borderBottom='none';
  
    fixedMenuFooter.appendChild(FarmsM);
    fixedMenuFooter.appendChild(ipoM);
    fixedMenuFooter.appendChild(githubM);
    fixedMenuFooter.appendChild(docsM);
  
    document.querySelector('#root').appendChild(fixedMenuFooter);
  
  }
  setTimeout(function(){
    document.querySelector('#loading').style.display='none';}, 7000);
}