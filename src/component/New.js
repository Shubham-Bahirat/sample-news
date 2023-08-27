import React, { Component } from 'react';
import Newsitem from './Newsitem';
export class New extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "KY3"
      },
      "author": "Christopher Replogle",
      "title": "More than 800 City Utilities customers without power in southwest Springfield - KY3",
      "description": "The City Utilities outage map shows more than 700 customers without power in south Springfield.",
      "url": "https://www.ky3.com/2023/08/26/more-than-700-city-utilities-customers-without-power-southwest-springfield/",
      "urlToImage": "https://gray-ky3-prod.cdn.arcpublishing.com/resizer/hMjyM1VROp85Sl7sntAQZhhhXo0=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/VFHHHKDD55GVNLDLM3YHRLLQ7M.JPG",
      "publishedAt": "2023-08-26T01:01:00Z",
      "content": "SPRINGFIELD, Mo. (KY3) - The City Utilities outage map shows more than 800 customers without power in south Springfield.\r\nThe outage reaches as far north as Walnut Lawn Street and Erie Street, Primro… [+276 chars]"
    },
    {
      "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
      },
      "author": null,
      "title": "China's Market Rescue Is Failing as Xi Holds Back on Stimulus - Bloomberg",
      "description": null,
      "url": "https://www.bloomberg.com/news/articles/2023-08-26/china-s-market-rescue-is-failing-as-xi-holds-back-on-stimulus",
      "urlToImage": null,
      "publishedAt": "2023-08-26T00:08:46Z",
      "content": "To continue, please click the box below to let us know you're not a robot."
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Alexander Gladstone, Andrew Scurria, Jodi Xu Klein",
      "title": "Rite Aid Prepares Bankruptcy That Would Halt Opioid Lawsuits - WSJ - The Wall Street Journal",
      "description": "The drugstore chain is preparing a chapter 11 filing within weeks and doesn’t have an agreement with opioid plaintiffs, people familiar with its plans said",
      "url": "https://www.wsj.com/articles/rite-aid-prepares-bankruptcy-that-would-halt-opioid-lawsuits-69f94242",
      "urlToImage": "https://images.wsj.net/im-841852/social",
      "publishedAt": "2023-08-25T23:38:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "The Detroit News"
      },
      "author": null,
      "title": "UAW members authorize strikes against Detroit automakers. What it means - Detroit News",
      "description": null,
      "url": "https://www.detroitnews.com/story/business/autos/2023/08/25/uaw-strike-authorization-vote/70659992007/",
      "urlToImage": null,
      "publishedAt": "2023-08-25T22:07:28Z",
      "content": "Skip to main content\r\nThis content is only available to subscribers.\r\nGet unlimited digital access.\r\n$1.50 per month for 12 months.\r\nYour subscription supports:\r\nTrusted, up-to-date local Detroit and… [+1562 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investor's Business Daily"
      },
      "author": "Investor's Business Daily",
      "title": "Rally Attempt Fights On, What To Do Now; Seven Stocks To Watch - Investor's Business Daily",
      "description": null,
      "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-rally-attempt-fights-on-tesla-nvidia-lead-stocks-to-watch/",
      "urlToImage": null,
      "publishedAt": "2023-08-25T22:05:00Z",
      "content": null
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Jaewon Kang",
      "title": "Instacart Files for IPO, Shows Growing Profitability - The Wall Street Journal",
      "description": "Grocery-delivery firm reports $242 million profit for first half of 2023; to list on Nasdaq under ticker symbol CART",
      "url": "https://www.wsj.com/finance/instacart-files-for-ipo-shows-growing-profitability-97027acf",
      "urlToImage": "https://images.wsj.net/im-842435/social",
      "publishedAt": "2023-08-25T21:41:00Z",
      "content": null
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Greg Roumeliotis",
      "title": "Private equity firm Veritas makes takeover offer for BlackBerry, source says - Reuters",
      "description": "Private equity firm Veritas Capital has made an offer to buy BlackBerry Ltd <a href=\"https://www.reuters.com/markets/companies/BB.TO\" target=\"_blank\">(BB.TO)</a>, according to a person familiar with the matter, months after the Canadian technology company beg…",
      "url": "https://www.reuters.com/markets/deals/veritas-is-said-consider-takeover-offer-blackberry-source-2023-08-25/",
      "urlToImage": "https://www.reuters.com/resizer/jTrHXMGu5g08BXh3MoVf_6JEbl4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Y7FFONLE7FJI5AQ7KCZ6MOPNDE.jpg",
      "publishedAt": "2023-08-25T21:35:00Z",
      "content": "Aug 25 (Reuters) - Private equity firm Veritas Capital has made an offer to buy BlackBerry Ltd (BB.TO), according to a person familiar with the matter, months after the Canadian technology company be… [+2093 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investopedia"
      },
      "author": "Diccon Hyatt",
      "title": "Top CD Rates Today: Seven CDs Join the 5.50% Club, Including a New 5.75% Option - Investopedia",
      "description": "Today's best CD rates are 5.85% on a jumbo from One America Bank, and 5.75% for smaller deposits from Abound Credit Union, MapleMark Bank, and BluPeak Credit Union.",
      "url": "https://www.investopedia.com/top-cd-rates-today-seven-cds-join-the-5-50-club-including-a-new-5-75-option-7853089",
      "urlToImage": "https://www.investopedia.com/thmb/p7CITz8qX-d7jWVZUsI0UYo9axM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/uJqtG-top-cd-rates-since-november-2021-as-of-aug-25-2023-561c4eeff7684e778f4a3c71cddb33e0.png",
      "publishedAt": "2023-08-25T21:28:26Z",
      "content": "Our list of benchmark leaders keeps growing: Investopedia's daily ranking of the best CD rates now includes seven more options paying at least 5.50% APY. That brings us up to 37 certificates in that … [+6670 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Elizabeth Napolitano",
      "title": "Heineken sells its Russia operations for 1 euro - CBS News",
      "description": "Dutch brewer joins more than 500 companies that have exited the country since it attacked Ukraine.",
      "url": "https://www.cbsnews.com/news/heineken-sells-russian-business-one-euro-ukraine-war/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2018/03/27/3d1a2fd3-e3f7-47db-ba90-f7f89deaba56/thumbnail/1200x630/493a671f9b272263730377aca0050c05/gettyimages-533122016.jpg?v=85153828b1c3c07a041ab8e73ff87e39",
      "publishedAt": "2023-08-25T21:23:00Z",
      "content": "Heineken has sold its business in Russia for one euro more than a year after it vowed to pull out of the country in response to Russia's invasion of Ukraine. \r\nThe Dutch brewer is taking a €300 milli… [+1898 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Anna Bahney",
      "title": "Zillow to offer a 1% down payment loan program - CNN",
      "description": "For buyers facing affordability challenges getting into a home of their own, Zillow Home Loans is rolling out a new option: a 1% down payment.",
      "url": "https://www.cnn.com/2023/08/25/homes/zillow-low-down-payment-loan/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230825104554-01-zillow-website-072523-restricted.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-08-25T21:22:00Z",
      "content": "For buyers facing affordability challenges getting into a home of their own, Zillow Home Loans is rolling out a new option: a1% down payment.\r\nThrough the program, an eligible buyer pays as little as… [+4298 chars]"
    },
  ]

  constructor(){
    super();
    console.log("I am Constructor ")
    this.state = {
      articles: this.articles,
      loading: false,
  
    }
   
    
  }

  render() {
    return (
      <>
      <div className='container my-3'>
        <h3 className='text-center' style={{margin:'35px 0px',marginTop:'90px'}}  >RKNews - Headlines</h3>
       <div className='row'>
        { this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
          <Newsitem title={element.title?element.title.slice(0,40):""} discription={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsurl={element.url}
                  author={element.author} publishedAt={element.publishedAt} />
        </div>
        })}
      

       </div>
      
      
       </div>
       </>
    );
  }

}
export default New;
