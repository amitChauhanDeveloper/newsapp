import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Investopedia"
            },
            "author": "Staff Author",
            "title": "Elon Musk Reverses Course to Revive Twitter Deal",
            "description": "Twitter (TWTR) shares jumped over 22% yesterday and are flat in pre-market trading after Elon Musk revived his deal to buy the company at the original price.",
            "url": "https://www.investopedia.com/elon-musk-reverses-course-to-revive-twitter-deal-6747310",
            "urlToImage": "https://www.investopedia.com/thmb/nfl73plRFQrWCW0wkx9O_fxbYUE=/1024x683/filters:fill(auto,1)/GettyImages-1393786687-110a4c4a3dc848b69774e2b6095df98b.jpg",
            "publishedAt": "2022-10-05T14:12:17Z",
            "content": "Twitter (TWTR) shares jumped over 22% yesterday and are flat in pre-market trading after Elon Musk revived his deal to buy the company at the original price.\r\nIn an amended regulatory filing by Twitt… [+1067 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Boston Herald"
            },
            "author": "Associated Press",
            "title": "EXPLAINER: Musk Twitter turnaround reflects legal challenges",
            "description": "WASHINGTON (AP) — Elon Musk's sudden about face on a $44 billion agreement to acquire Twitter, reversing an earlier attempt to rescind that offer, came as a surprise even from the mercurial billionaire who loves to shock.",
            "url": "https://www.bostonherald.com/2022/10/05/explainer-musk-twitter-turnaround-reflects-legal-challenges/",
            "urlToImage": "https://www.bostonherald.com/wp-content/uploads/2022/10/Musk_Twitter_49001.jpg?w=1024&h=682",
            "publishedAt": "2022-10-05T14:11:24Z",
            "content": "WASHINGTON (AP) Elon Musks sudden about face on a $44 billion agreement to acquire Twitter, reversing an earlier attempt to rescind that offer, came as a surprise even from the mercurial billionaire … [+3446 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TechSpot"
            },
            "author": "Rob Thubron",
            "title": "Tesla is dropping ultrasonic sensors from new vehicles as it moves to camera-only Tesla Vision",
            "description": "Tesla writes that the company started transitioning to Tesla Vision by removing radar from the Model 3 and Model Y last year, with the Model S and Model X following in 2022. The EV giant claims that compared to radar-equipped vehicles, Model 3 and Model Y car…",
            "url": "https://www.techspot.com/news/96208-tesla-dropping-ultrasonic-sensors-new-vehicles-moves-camera.html",
            "urlToImage": "https://static.techspot.com/images2/news/bigimage/2022/02/2022-02-02-image-17.jpg",
            "publishedAt": "2022-10-05T14:11:00Z",
            "content": "What just happened? Tesla has announced it is phasing out ultrasonic sensors from its vehicles as part of the switch to Tesla Vision, its camera-based Autopilot system. The move means the driver-assi… [+1973 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Wire"
            },
            "author": null,
            "title": "It’s About Time: InfluxData Invites Developers to InfluxDays 2022",
            "description": "SAN FRANCISCO--(BUSINESS WIRE)--InfluxData, creator of the leading time series platform InfluxDB, today announced its annual developer event, InfluxDays 2022, will take place virtually Nov. 2-3. InfluxDays brings together InfluxData’s executives, technical ex…",
            "url": "https://www.businesswire.com/news/home/20221005005262/en/It%E2%80%99s-About-Time-InfluxData-Invites-Developers-to-InfluxDays-2022",
            "urlToImage": "https://mms.businesswire.com/media/20221005005262/en/1361215/23/New_InfluxData_logo.jpg",
            "publishedAt": "2022-10-05T14:06:30Z",
            "content": "SAN FRANCISCO--(BUSINESS WIRE)--InfluxData, creator of the leading time series platform InfluxDB, today announced its annual developer event, InfluxDays 2022, will take place virtually Nov. 2-3. Infl… [+3372 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "insider@insider.com (Kali Hays,Grace Kay,Jack Newsham,Sindhu Sundar)",
            "title": "Elon Musk likely faces a 'staggering' legal bill as high as $100 million after his failed attempt to back out of buying Twitter",
            "description": "If Elon Musk ends up buying Twitter, he'll effectively be paying its legal costs — ballooning his legal bill to around $200 million.",
            "url": "https://www.businessinsider.com/elon-musk-faces-staggering-legal-costs-twitter-battle-lawyer-fees-2022-10",
            "urlToImage": "https://i.insider.com/633cf597025b8300189236a8?width=1200&format=jpeg",
            "publishedAt": "2022-10-05T14:06:17Z",
            "content": "The all-in cost for Elon Musk from his months-long attempt to get out of a deal to buy Twitter is estimated to be as much as $100 million and that's just for his side of the case.\r\nThe question of ju… [+3363 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Billings Gazette"
            },
            "author": "AP",
            "title": "AP News Summary at 10:06 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://billingsgazette.com/news/national/ap-news-summary-at-10-06-a-m-edt/article_39141dfb-896d-57d4-aee3-2bb9e7e04e9f.html",
            "urlToImage": "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T14:06:10Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7262 chars]"
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "Tom Norton",
            "title": "Fact Check: Was Elon Musk's Ukraine Starlink Funded by Biden White House?",
            "description": "As the SpaceX founder claims to have spent $80 million on the satellite system in the country, was some of the funding sourced from U.S. government?",
            "url": "https://www.newsweek.com/fact-check-was-elon-musks-ukraine-starlink-funded-biden-white-house-1749103",
            "urlToImage": "https://d.newsweek.com/en/full/1992865/ukraine-war-musk.jpg",
            "publishedAt": "2022-10-05T14:05:31Z",
            "content": "Elon Musk inflamed his critics on Twitter with his controversial proposal of a potential peace settlement for the Ukraine-Russia conflict.\r\nHis comments were widely derided by Ukrainians, from the co… [+5259 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": "IANS",
            "title": "Tesla retires ultrasonic sensors in new cars with new camera tech",
            "description": "Elon Musk-run Tesla has announced to retire ultrasonic sensors in its cars that sense objects around them",
            "url": "https://www.business-standard.com/article/international/tesla-retires-ultrasonic-sensors-in-new-cars-with-new-camera-tech-122100500645_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-01/03/full/1641220906-4504.jpg",
            "publishedAt": "2022-10-05T14:03:00Z",
            "content": "Elon Musk-run Tesla has announced to retire ultrasonic sensors in its cars that sense objects around them.\r\nThe company said it will now shift towards placing camera-only Tesla Vision Safety technolo… [+1825 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Harvard Business Review"
            },
            "author": "Michael Mankins",
            "title": "In a Volatile World, Your Strategy Must Be Flexible",
            "description": "Although it sounds cliché, the world really is a more volatile place than it used to be. That’s because the drivers of uncertainty are more intense — there are more and more change vectors affecting outcomes and these vectors are more and more inter-related. …",
            "url": "https://hbr.org/2022/10/in-a-volatile-world-your-strategy-must-be-flexible",
            "urlToImage": "https://hbr.org/resources/images/hbr_opengraph_940x490.png",
            "publishedAt": "2022-10-05T14:00:00Z",
            "content": "Give yourself plenty of opportunities to change course.\r\n\"&gt;\r\nExecutives routinely contend that their businesses are more unpredictable than ever before. As it turns out, theyre right. If you caref… [+8228 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PR Daily"
            },
            "author": "Chris Pugh",
            "title": "James Madison’s home offers Lizzo an encore and Uber’s inspirational stories",
            "description": "Plus: Elon Musk and Twitter rumors heat up again. The demand for Lizzo to play flutes in historic places is growing. The singer, who played President James Madison’s crystal flute during a trip to the Library of Congress last week, received an invitation to p…",
            "url": "https://www.prdaily.com/lizzo-james-madison-tiktok-uber-elon-musk-twitter/",
            "urlToImage": "https://s39940.pcdn.co/wp-content/uploads/2022/10/lizzo.png",
            "publishedAt": "2022-10-05T13:58:05Z",
            "content": "Screenshot from the Library of Congress YouTube video.\r\nThe demand for Lizzo to play flutes in historic places is growing.\r\nThe singer, who played President James Madisons crystal flute during a trip… [+5656 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TelecomTV"
            },
            "author": "Ray Le Maistre",
            "title": "X marks the spot for Musk’s Twitter plans",
            "description": "Elon Musk has done a U-turnHe has once again committed to buying Twitter for $44bnIt will accelerate his plans to develop an “everything app” called X, he twee…",
            "url": "https://www.telecomtv.com/content/digital-platforms-services/x-marks-the-spot-for-musk-s-twitter-plans-45584/",
            "urlToImage": "https://assets.telecomtv.com/assets/telecomtv/twitter-15067.jpeg?w=1200",
            "publishedAt": "2022-10-05T13:56:14Z",
            "content": "It’s turning into a week of incredible U-turns. In the wake of the UK government’s dramatic volte-face on its tax cuts for the highest earners, the world’s richest person, Elon Musk, has decided he n… [+4773 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "bevans@insider.com (Brian Evans)",
            "title": "Elon Musk's surrender on buying Twitter could deliver a $255 million profit to a Florida hedge fund, report says",
            "description": "Pentwater Capital bought a 2.4% stake in Twitter in the second quarter and became one of the company's biggest shareholders, according to CNBC.",
            "url": "https://markets.businessinsider.com/news/stocks/elon-musk-twitter-stock-buyout-pentwater-capital-hedge-fund-bet-2022-10",
            "urlToImage": "https://i.insider.com/633d85e3349d7900197c7f36?width=1200&format=jpeg",
            "publishedAt": "2022-10-05T13:55:45Z",
            "content": "A Florida hedge fund is set to make more than $200 million as Elon Musk revives his takeover of Twitter, according to a report from CNBC. \r\nPentwater Capital, which was founded in 2007 and oversees $… [+1105 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Gabriel Hays",
            "title": "CNBC's Dan Nathan says he'll quit Twitter if Trump gets back on: 'I don't need to be there for that'",
            "description": "CNBC panelist Dan Nathan told the \"Fast Money\" hosts that he would be quitting Twitter if Elon Musk reinstated former President Donald Trump on the platform.",
            "url": "https://www.foxnews.com/media/cnbcs-dan-nathan-says-hell-quit-twitter-trump-gets-back-on-i-dont-need-to-there-that",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/10/dan-nathan.png",
            "publishedAt": "2022-10-05T13:54:38Z",
            "content": "CNBCs Dan Nathan declared he would quit Twitter if former President Donald Trump was allowed back on the platform.\r\nReacting to the news that billionaire Elon Musk is looking to buy Twitter again aft… [+3557 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Thomas Barrabi",
            "title": "Elon Musk teases ‘X’ app that will do ‘everything’ after he closes Twitter deal",
            "description": "Billionaire Elon Musk teased his plans to create a mysterious app dubbed “X.\"",
            "url": "https://nypost.com/2022/10/05/elon-musk-teases-x-app-that-will-do-everything-after-he-closes-twitter-deal/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/10/twitter-elon-1-1.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2022-10-05T13:48:49Z",
            "content": "Billionaire Elon Musk teased his plans to create a mysterious app dubbed X on Wednesday, hours after he reversed course and offered to buy Twitter at its original price of $44 billion.\r\nMusk has prov… [+2706 chars]"
        },
        {
            "source": {
                "id": "msnbc",
                "name": "MSNBC"
            },
            "author": "Ja'han Jones",
            "title": "Musk agrees to buy Twitter as troubles mount for the company",
            "description": "Elon Musk, the menacing social media troll and billionaire founder of Tesla, has finally agreed to follow through with his plans to purchase the platform.",
            "url": "https://www.msnbc.com/the-reidout/reidout-blog/elon-musk-twitter-deal-supreme-court-rcna50628",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-10/221003-ROB-Elon-Musk-Twitter-jg-eb7ca2.jpg",
            "publishedAt": "2022-10-05T13:44:57Z",
            "content": "Elon Musk, the uber-rich Tesla founder turned social media troll, agreed on Tuesday to purchase Twitter for his initial asking price of $44 billion after attempting to renege on his offer. \r\nBloomber… [+3348 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Richmond.com"
            },
            "author": "AP",
            "title": "AP News Summary at 9:42 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://richmond.com/news/national/ap-news-summary-at-10-06-a-m-edt/article_cca46bcb-0eb8-5169-b2c1-fd6465bae379.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T13:42:11Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7221 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Roanoke Times"
            },
            "author": "AP",
            "title": "AP News Summary at 9:42 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://roanoke.com/news/national/ap-news-summary-at-9-42-a-m-edt/article_f928ea9b-fdf4-5254-b681-129dab080486.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T13:42:11Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7333 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Elon Musk, Twitter have yet to reach deal to end litigation -sources - Reuters",
            "description": "Elon Musk and Twitter Inc <a href=\"https://www.reuters.com/companies/TWTR.N\" target=\"_blank\">(TWTR.N)</a> have not yet reached an agreement to end the litigation and clear the way for the world's richest person to close his <a href=\"/markets/europe/twitter-su…",
            "url": "https://www.reuters.com/markets/deals/elon-musk-twitter-have-yet-reach-deal-end-litigation-sources-2022-10-05/",
            "urlToImage": "https://www.reuters.com/resizer/QOypcWoT3jda2teSj5J_sUVo4XU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VCGDFB2FX5IG5J6LQMZ2OS3OTA.jpg",
            "publishedAt": "2022-10-05T13:36:00Z",
            "content": "WILMINGTON, Del., Oct 5 (Reuters) - Elon Musk and Twitter Inc (TWTR.N) have not yet reached an agreement to end the litigation and clear the way for the world's richest person to close his $44-billio… [+1223 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "As EV sales grow, battle over U.S. road weight limits heats up - Reuters",
            "description": "Car haulers are pushing the Biden administration and lawmakers to increase truck weight limits on U.S. highways so they can transport more heavy electric vehicles, a move fiercely opposed by the rail industry and safety advocates who say the heavier loads are…",
            "url": "https://www.reuters.com/business/autos-transportation/ev-sales-grow-battle-over-road-weight-limits-heats-up-2022-10-05/",
            "urlToImage": "https://www.reuters.com/resizer/SfXdSfOUTDiDba8jx5sDi7YMvco=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WG2DQIFOFVMBNATIXV2H3CB5PA.jpg",
            "publishedAt": "2022-10-05T13:35:00Z",
            "content": "Oct 5 (Reuters) - Car haulers are pushing the Biden administration and lawmakers to increase truck weight limits on U.S. highways so they can transport more heavy electric vehicles, a move fiercely o… [+5196 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Tesla phasing out ultrasonic sensors as it moves toward a camera-only system",
            "description": "Tesla has announced that it's phasing out ultrasonic sensors (USS) used in its EVs to detect short-range obstacles, Electrek has reported. While other automakers use LiDAR, radar and other sensors on top of cameras, Elon Musk's company is determined to use on…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=166590943",
            "urlToImage": null,
            "publishedAt": "2022-10-05T13:32:14Z",
            "content": "Tesla has announced that it's phasing out ultrasonic sensors (USS) used in its EVs to detect short-range obstacles, Electrek has reported. While other automakers use LiDAR, radar and other sensors on… [+1520 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Russian cosmonaut hitching ride with SpaceX as part of next space station crew",
            "description": "The four-member crew should reach the International Space Station (ISS) about 29 hours later on Thursday evening to begin a 150-day science mission aboard the orbital laboratory some 250 miles (420 km) above Earth. The mission, designated Crew-5, marks the fi…",
            "url": "https://economictimes.indiatimes.com/news/international/world-news/russian-cosmonaut-hitching-ride-with-spacex-as-part-of-next-space-station-crew/articleshow/94664557.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-94664581,width-1070,height-580,imgsize-149808,overlay-economictimes/photo.jpg",
            "publishedAt": "2022-10-05T13:32:12Z",
            "content": "Elon Musk's rocket company SpaceX was due to launch the next long-duration crew of the International Space Station into orbit on Wednesday, with a Russian cosmonaut hitching a ride with two Americans… [+4078 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PRNewswire"
            },
            "author": null,
            "title": "Thinking about trading options or stock in Tesla, RPM International, ConocoPhillips, Children's Place, or Walt Disney?",
            "description": "NEW YORK, Oct. 5, 2022 /PRNewswire/ -- InvestorsObserver issues critical PriceWatch Alerts for TSLA, RPM, COP, PLCE, and DIS. Click a link below then choose between in-depth options trade idea report or a stock score report. Options Report – Ideal trade ideas…",
            "url": "https://www.prnewswire.com/news-releases/thinking-about-trading-options-or-stock-in-tesla-rpm-international-conocophillips-childrens-place-or-walt-disney-301641566.html",
            "urlToImage": "https://mma.prnewswire.com/media/1333368/InvestorsObserver_Logo.jpg?p=facebook",
            "publishedAt": "2022-10-05T13:31:00Z",
            "content": "NEW YORK, Oct. 5, 2022 /PRNewswire/ -- InvestorsObserver issues critical PriceWatch Alerts for TSLA, RPM, COP, PLCE, and DIS.\r\nClick a link below then choose between in-depth options trade idea repor… [+796 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNA"
            },
            "author": null,
            "title": "Elon Musk, Twitter have yet to reach deal to end litigation -sources",
            "description": "WILMINGTON, Del. :Elon Musk and Twitter Inc have not yet reached an agreement to end the litigation and clear the way for the world's richest person to close his $44-billion deal for the social media platform, two sources familiar with the litigation told Reu…",
            "url": "https://www.channelnewsasia.com/business/elon-musk-twitter-have-yet-reach-deal-end-litigation-sources-2989471",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--Qt5affQs--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2022-10-05t134338z_1_lynxmpei940py_rtroptp_3_twitter-m-a.jpg?itok=3VxPfIS8",
            "publishedAt": "2022-10-05T13:30:57Z",
            "content": "WILMINGTON, Del. :Elon Musk and Twitter Inc have not yet reached an agreement to end the litigation and clear the way for the world's richest person to close his $44-billion deal for the social media… [+911 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ZyCrypto"
            },
            "author": "Brenda Ngari",
            "title": "Dogecoin Set For Gargantuan Gains As Elon Musk Moves To Proceed With $44B Twitter Purchase Agreement",
            "description": "Memecoin Dogecoin experienced a marked bullish bump on Tuesday, bolstered by the announcement that Dogefather Elon Musk is reportedly still interested in buying Twitter on the deal’s original terms.",
            "url": "https://zycrypto.com/dogecoin-set-for-gargantuan-gains-as-elon-musk-moves-to-proceed-with-44b-twitter-purchase-agreement/",
            "urlToImage": "https://zycrypto.com/wp-content/uploads/2022/10/Dogecoin-Set-For-Gargantuan-Gains-As-Elon-Musk-Moves-To-Proceed-With-44B-Twitter-Purchase-Agreement.jpg",
            "publishedAt": "2022-10-05T13:29:17Z",
            "content": "Memecoin Dogecoin experienced a marked bullish bump on Tuesday, bolstered by the announcement that Dogefather Elon Musk is reportedly still interested in buying Twitter on the deals original terms.\r\n… [+2106 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Roanoke Times"
            },
            "author": "AP",
            "title": "AP News Summary at 9:29 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://roanoke.com/news/national/ap-news-summary-at-9-29-a-m-edt/article_f928ea9b-fdf4-5254-b681-129dab080486.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T13:29:12Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7354 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Chicago Tribune"
            },
            "author": "Tom Krisher, Matt O'Brien, Randall Chase and Barbara Ortutay",
            "title": "Elon Musk says he wants Twitter again and will pay $44 billion price",
            "description": "Elon Musk wants Twitter again — and Twitter is game. The billionaire Tesla CEO has proposed to buy the company at the originally agreed-on price of $44 billion, bringing the tumultuous, monthslong saga another step closer to a conclusion.",
            "url": "https://www.chicagotribune.com/business/ct-biz-elon-musk-twitter-20221005-hk5gurtrmfab3jq3zl6mwwgcie-story.html",
            "urlToImage": "https://www.chicagotribune.com/resizer/lcTWBoYFGOm9gcdcczfxsWoO4LM=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/PIEFUUUXXGRDN4VQBRNLILBDD4.jpg",
            "publishedAt": "2022-10-05T13:17:44Z",
            "content": "Elon Musk wants Twitter again and Twitter is game. The billionaire Tesla CEO has proposed to buy the company at the originally agreed-on price of $44 billion, bringing the tumultuous, monthslong saga… [+4064 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Steve Dent",
            "title": "Tesla phasing out ultrasonic sensors as it moves toward a camera-only system",
            "description": "Tesla has announced that it's phasing out ultrasonic sensors (USS) used in its EVs to detect short-range obstacles, Electrek has reported. While other automakers use LiDAR, radar and other sensors on top of cameras, Elon Musk's company is determined to use on…",
            "url": "https://www.engadget.com/tesla-losing-ultrasonic-sensors-camera-only-system-131503260.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-11/64b9ce00-4d00-11ec-bedf-8246fed3f253",
            "publishedAt": "2022-10-05T13:15:03Z",
            "content": "Tesla has announced that it's phasing out ultrasonic sensors (USS) used in its EVs to detect short-range obstacles, Electrek has reported. While other automakers use LiDAR, radar and other sensors on… [+1520 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Autoblog"
            },
            "author": "Chris Teague",
            "title": "Tesla to stop using ultrasonic sensors later this year",
            "description": "Filed under:\n Green,Tesla,Safety,Technology,Crossover,SUV,Electric,Sedan\n Continue reading Tesla to stop using ultrasonic sensors later this year\nTesla to stop using ultrasonic sensors later this year originally appeared on Autoblog on Wed, 5 Oct 2022 09:13:0…",
            "url": "https://www.autoblog.com/2022/10/05/tesla-drops-sensors-relies-cameras/",
            "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/crop/3240x1823+0+198/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2020-11/90b7ffd0-31c8-11eb-b6b1-92e59f06d4f4",
            "publishedAt": "2022-10-05T13:13:00Z",
            "content": "Love or hate Elon Musk, theres no denying that Teslas vehicles are impressive from a technical standpoint. Their electric drivetrains offer more range and power than almost anything else on sale toda… [+1721 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tech Times"
            },
            "author": "Griffin Davis",
            "title": "Rivian R1S Appears at Sydney Airport! Will Tesla Model Y's Major Rival be Launched in Australia?",
            "description": "Here's what Tesla and other automakers might be worried about.",
            "url": "https://www.techtimes.com/articles/281505/20221005/rivian-r1s-appears-sydney-airport-will-tesla-model-ys-major.htm",
            "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/412701/rivian-r1s-appears-at-sydney-airport-will-tesla-model-ys-major-rival-be-launched-in-australia.jpg",
            "publishedAt": "2022-10-05T13:10:00Z",
            "content": "The Rivian R1S suddenly appeared in Australia. Because of this, many enthusiasts shared their conclusions as to why this popular electric SUV was spotted at Qantas (Sydney Airport). \r\nRivian Automoti… [+2737 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "cleaner",
            "title": "Dow Jones Futures Fall After Market Rally On Fed Hopes; Musk-Twitter Saga Isn't Over Yet",
            "description": "Dow Jones futures fell early Wednesday, along with S&P 500 futures and Nasdaq futures. Treasury yields and the dollar moved higher. OPEC+ is expected to announce a larger production cut at today's... #tesla #enphaseenergy #musktwittersaga #google #onsemicondu…",
            "url": "https://biztoc.com/p/7vve6ure?ref=rss",
            "urlToImage": "https://cdn.biztoc.com/og/7vve6ure.jpg",
            "publishedAt": "2022-10-05T13:09:11Z",
            "content": "Dow Jones futures fell early Wednesday, along with S&amp;P 500 futures and Nasdaq futures. Treasury yields and the dollar moved higher. OPEC+ is expected to announce a larger production cut at today'… [+1344 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "gglover@insider.com (George Glover)",
            "title": "Elon Musk's deal for Twitter is back on - and now short-seller Hindenburg Research is dumping all its shares in the takeover target",
            "description": "The activist investor previously bought Twitter shares when it looked like Musk's takeover bid would collapse.",
            "url": "https://markets.businessinsider.com/news/stocks/elon-musk-twitter-takeover-short-seller-hindenburg-research-activist-investor-2022-10",
            "urlToImage": "https://i.insider.com/633d611d025b830018923a24?width=1200&format=jpeg",
            "publishedAt": "2022-10-05T13:07:25Z",
            "content": "Famed short-seller Hindenburg Research sold all of its Twitter shares after Elon Musk revived his $44 billion deal to buy the social-media company.\r\nMusk proposed restarting talks to buy Twitter Mond… [+1418 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Lyllah Ledesma, Omkar Godbole",
            "title": "Price Point: Bitcoin Stays Above $20K as US Stock Futures Drop After 2 Days of Big Gains",
            "description": "The latest price moves in bitcoin (BTC) and crypto markets in context for Oct. 5, 2022. First Mover is CoinDesk’s daily newsletter that contextualizes the...",
            "url": "https://finance.yahoo.com/news/price-point-bitcoin-stays-above-130407188.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/8UeHieiubSPGUxaffQE2zg--~B/aD02MDA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/coindesk_75/afe9cee3c83d2fc4d72f596f0fcadaa7",
            "publishedAt": "2022-10-05T13:04:07Z",
            "content": "This article originally appeared in First Mover, CoinDesks daily newsletter putting the latest moves in crypto markets in context. Subscribe to get it in your inbox every day.\r\nPrice Point\r\nBitcoin (… [+2394 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CoinDesk"
            },
            "author": "Lyllah Ledesma, Bradley Keoun",
            "title": "Price Point: Bitcoin Stays Above $20K as US Stock Futures Drop After 2 Days of Big Gains",
            "description": "The latest price moves in bitcoin (BTC) and crypto markets in context for Oct. 5, 2022. First Mover is CoinDesk’s daily newsletter that contextualizes the latest actions in the crypto markets.",
            "url": "https://www.coindesk.com/markets/2022/10/05/price-point-bitcoin-stays-above-20k-as-us-stock-futures-drop-after-2-days-of-big-gains/",
            "urlToImage": "https://www.coindesk.com/resizer/2s7jqtdfyk4egjmvbMqS0aVEe3U=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/Q4GLDQKQQFHCFEF3YZIRN43EDQ.jpg",
            "publishedAt": "2022-10-05T13:04:07Z",
            "content": "This article originally appeared in First Mover, CoinDesks daily newsletter putting the latest moves in crypto markets in context. Subscribe to get it in your inbox every day.\r\nBitcoin (BTC) managed … [+2307 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Siladitya Ray, Forbes Staff, \n Siladitya Ray, Forbes Staff\n https://www.forbes.com/sites/siladityaray/",
            "title": "Trump’s Return, Potential Layoffs: What To Watch For As Musk U-Turns (Again) To Buy Twitter",
            "description": "Musk has said he will reverse Trump’s “morally wrong” Twitter ban after taking over the company.",
            "url": "https://www.forbes.com/sites/siladityaray/2022/10/05/trumps-return-potential-layoffs-what-to-watch-for-as-musk-u-turns-again-to-buy-twitter/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/633d7901771155cd9eed2e11/0x0.jpg?format=jpg&crop=3543,1992,x0,y183,safe&width=1200",
            "publishedAt": "2022-10-05T13:01:45Z",
            "content": "Billionaire Elon Musks decision to move forward with the purchase of Twitter could allow for the reinstatement of former President Donald Trumps account on the platform, which, depending on the time … [+4762 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Jalopnik"
            },
            "author": "Adam Ismail",
            "title": "These Are the Cars You'd Take to Your High School Reunion",
            "description": "High school reunions. Some people shudder at the phrase; others welcome the opportunity to catch up with long lost friends, acquaintances and crushes. And others still try to imagine what they’d pull up in, if they could pull up in anything. We asked you that…",
            "url": "https://jalopnik.com/these-are-the-cars-youd-take-to-your-high-school-reunio-1849614793",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f7c4b156e6a3a13d6bc125dc63646eb8.jpg",
            "publishedAt": "2022-10-05T13:01:00Z",
            "content": "This depends entirely on who you are, how shallow you are, and what you want to signal with your car. A few options:\r\nIf you view your car is a status symbol and want to show up your classmates, pick… [+1938 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Celebitchy.com"
            },
            "author": "Kaiser",
            "title": "Elon Musk offers to buy Twitter again, under the original terms from April",
            "description": "Earlier this year, Elon Musk decided that he should try to buy his way into popularity by making a bid to buy Twitter as-is, with no due diligence. Twitter took him up on the offer and they made the deal for Musk to purchase the company for $44 billion. Musk …",
            "url": "https://www.celebitchy.com/787146/elon_musk_offers_to_buy_twitter_again_under_the_original_terms_from_april/",
            "urlToImage": null,
            "publishedAt": "2022-10-05T13:00:47Z",
            "content": "Earlier this year, Elon Musk decided that he should try to buy his way into popularity by making a bid to buy Twitter as-is, with no due diligence. Twitter took him up on the offer and they made the … [+4276 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motor Authority"
            },
            "author": "news@motorauthority.com (Viknesh Vijayenthiran), Viknesh Vijayenthiran",
            "title": "Tesla ditches ultrasonic sensors, moves completely to Tesla Vision",
            "description": "After ditching radar sensors from its electronic driver-assist features in 2021, Tesla is now in the process of eliminating ultrasonic sensors as well. It means Tesla's driver-assist features like Autopilot and Full Self-Driving will have to rely exclusively …",
            "url": "https://www.motorauthority.com/news/1137376_tesla-ditches-ultrasonic-sensors-moves-completely-to-tesla-vision",
            "urlToImage": "https://images.hgmsites.net/hug/2022-tesla-model-3_100827324_h.jpg",
            "publishedAt": "2022-10-05T13:00:00Z",
            "content": "After ditching radar sensors from its electronic driver-assist features in 2021, Tesla is now in the process of eliminating ultrasonic sensors as well. It means Tesla's driver-assist features like Au… [+1929 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Billings Gazette"
            },
            "author": "AP",
            "title": "AP News Summary at 8:58 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://billingsgazette.com/news/national/ap-news-summary-at-9-42-a-m-edt/article_39141dfb-896d-57d4-aee3-2bb9e7e04e9f.html",
            "urlToImage": "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T12:58:49Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7333 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Richmond.com"
            },
            "author": "AP",
            "title": "AP News Summary at 8:58 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://richmond.com/news/national/ap-news-summary-at-9-29-a-m-edt/article_cca46bcb-0eb8-5169-b2c1-fd6465bae379.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T12:58:49Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7313 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Chris Stein",
            "title": "Biden heads to Florida to survey Hurricane Ian damage alongside DeSantis – live",
            "description": "President will speak in Fort Meyers, Florida, after seeing powerful storm’s destruction with state’s Republican governor<ul><li>Sign up to receive First Thing – our daily briefing by email</li></ul>Good morning, US politics blog readers. Joe Biden will visit …",
            "url": "https://www.theguardian.com/us-news/live/2022/oct/05/biden-desantis-hurricane-ian-damage-florida-trump-miami-politics-latest-updates",
            "urlToImage": "https://i.guim.co.uk/img/media/ebb11e130e60cf8a497546f783b9f4a712edf74b/0_0_5616_3370/master/5616.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=379b633553cca344c5e8d229c76bcd85",
            "publishedAt": "2022-10-05T12:56:10Z",
            "content": "Good morning, US politics blog readers. Joe Biden will visit Florida today to see for himself the damage wrought by Hurricane Ian, where hell be greeted by governor of the state and foe of Democrats … [+937 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Electrek"
            },
            "author": "Scooter Doll",
            "title": "BYD widens its presence in Europe by selling 100,000 EVs to German rental company SIXT",
            "description": "Mere months after announcing its expansion into several European markets, Chinese automaker Build Your Dreams (BYD) is making quick moves to get more of its EVs on streets overseas. German car rental company SIXT has just signed on to purchase around 100,000 …",
            "url": "https://electrek.co/2022/10/05/byd-widens-its-presence-in-europe-by-selling-100000-evs-to-sixt/",
            "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/10/Sixt-EVs-BYD-atto.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2022-10-05T12:54:59Z",
            "content": "Mere months after announcing its expansion into several European markets, Chinese automaker Build Your Dreams (BYD) is making quick moves to get more of its EVs on streets overseas. German car rental… [+3139 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Roanoke Times"
            },
            "author": "AP",
            "title": "AP News Summary at 8:52 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://roanoke.com/news/national/ap-news-summary-at-8-58-a-m-edt/article_f928ea9b-fdf4-5254-b681-129dab080486.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T12:52:34Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7354 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Billings Gazette"
            },
            "author": "AP",
            "title": "AP News Summary at 8:52 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://billingsgazette.com/news/national/ap-news-summary-at-9-19-a-m-edt/article_39141dfb-896d-57d4-aee3-2bb9e7e04e9f.html",
            "urlToImage": "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T12:52:34Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7354 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Richmond.com"
            },
            "author": "AP",
            "title": "AP News Summary at 8:52 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://richmond.com/news/national/ap-news-summary-at-9-19-a-m-edt/article_cca46bcb-0eb8-5169-b2c1-fd6465bae379.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T12:52:34Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7313 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SlashGear"
            },
            "author": "staff@slashgear.com (Kyle Encina)",
            "title": "This Big Tesla Autopilot Change Is Going To Be Controversial",
            "description": "The Tesla Autopilot feature underwent a major change in 2021, and it will continue to do so, depending heavily on Tesla Vision. Now, here&#039;s the latest update.",
            "url": "https://www.slashgear.com/1039292/this-big-tesla-autopilot-change-is-going-to-be-controversial/",
            "urlToImage": "https://www.slashgear.com/img/gallery/this-big-tesla-autopilot-change-is-going-to-be-controversial/l-intro-1664971394.jpg",
            "publishedAt": "2022-10-05T12:51:09Z",
            "content": "According to Tesla, the removal of ultrasonic sensors will be the norm for every newly produced model moving forward, starting with EVs manufactured in North America, Europe, the Middle East, and Tai… [+1227 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Avishek Banerjee",
            "title": "Ultraviolette F77 e-hyperbike to be available soon",
            "description": "To be available in multiple variants, the high-performance bike is expected to be priced in the range of Rs 3.5 lakh to Rs 4.2 lakh",
            "url": "https://www.moneycontrol.com/news/business/ultraviolette-f77-e-hyperbike-to-be-available-soon-9281701.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/10/Mr.-Niraj-Rajmohan-Co-Founder-and-CTO-Ultraviolette-Automotive-and-Mr.-Narayan-Subramaniam-Co-founder-and-CEO-Ultraviolette-Automotive.-with-the-F77-1-1-594x435.jpg",
            "publishedAt": "2022-10-05T12:51:09Z",
            "content": "Ultraviolette Automotive, which is backed by TVS Motor Company, is gearing up to roll out the countrys first electrically powered hyperbike by the end of this year. Having already carried out test ri… [+4397 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PCMag.com"
            },
            "author": "Matthew Humphries",
            "title": "Tesla Removes Ultrasonic Sensors From Its Vehicles, Disables Some Features",
            "description": "Park Assist, Autopark, Summon, and Smart Summon are disabled on new Model 3, Model Y EVs.\nTesla has announced that ultrasonic sensors (USS) are being removed from its electric vehicles, with the knock-on effect being some Autopilot features will be temporaril…",
            "url": "https://uk.pcmag.com/cars-auto/143053/tesla-removes-ultrasonic-sensors-from-its-vehicles-disables-some-features",
            "urlToImage": "https://sm.pcmag.com/t/pcmag_uk/news/t/tesla-remo/tesla-removes-ultrasonic-sensors-from-its-vehicles-disables_kj3y.1200.jpg",
            "publishedAt": "2022-10-05T12:48:23Z",
            "content": "Tesla has announced that ultrasonic sensors (USS) are being removed from its electric vehicles, with the knock-on effect being some Autopilot features will be temporarily disabled.\r\nLast year, Tesla … [+1564 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "kduffy@insider.com (Kate Duffy)",
            "title": "Ex-Twitter VP says Elon Musk is an attention seeker after the billionaire offered to buy the company for $44 billion again",
            "description": "Twitter's former EMEA VP, Bruce Daisley, expressed skepticism of Elon Musk's plans to turn Twitter into a \"Super App.\"",
            "url": "https://www.businessinsider.com/elon-musk-twitter-former-vice-president-deal-bruce-daisley-2022-10",
            "urlToImage": "https://i.insider.com/633d4bc5025b8300189238a3?width=1200&format=jpeg",
            "publishedAt": "2022-10-05T12:35:53Z",
            "content": "A former Twitter executive said Elon Musk was an \"attention seeker\" after the billionaire offered to buy the social-media platform again on Tuesday.\r\nBruce Daisley, who was Twitter's EMEA vice presid… [+1897 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PRNewswire"
            },
            "author": null,
            "title": "Best of HouseKeeping 2022 Award-Winner, The Bristol Hotel, Celebrates Fall Season with Limited Time Packages - Explore San Diego's Historic Gaslamp District for a Boutique Experience in the Big City",
            "description": "SAN DIEGO, Oct. 5, 2022 /PRNewswire/ -- Located close to the famous Gaslamp Quarter and waterfront, The Bristol Hotel invites guests to spend a few days exploring all that America's Finest City has to offer. The hotel is within walking distance of Petco Park,…",
            "url": "https://www.prnewswire.com/news-releases/best-of-housekeeping-2022-award-winner-the-bristol-hotel-celebrates-fall-season-with-limited-time-packages--explore-san-diegos-historic-gaslamp-district-for-a-boutique-experience-in-the-big-city-301640517.html",
            "urlToImage": "https://mma.prnewswire.com/media/1913942/The_Bristol_Hotel_San_Diego.jpg?p=facebook",
            "publishedAt": "2022-10-05T12:31:00Z",
            "content": "SAN DIEGO, Oct. 5, 2022 /PRNewswire/ -- Located close to the famous Gaslamp Quarter and waterfront, The Bristol Hotel invites guests to spend a few days exploring all that America's Finest City has t… [+2904 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "24/7 Wall St."
            },
            "author": "Douglas A. McIntyre",
            "title": "Lordstown Motors Sinks Toward $0",
            "description": "The electric vehicle startup with the most product problems and one of the worst balance sheets is Lordstown Motors. Is its stock headed for zero?",
            "url": "https://247wallst.com/autos/2022/10/05/lordstown-motors-sinks-toward-0/",
            "urlToImage": "https://247wallst.com/wp-content/uploads/2022/05/imageForEntry2-K9O.jpg",
            "publishedAt": "2022-10-05T12:30:21Z",
            "content": "The electric vehicle business has become extremely expensive for manufacturers, and the market has become wildly competitive. It includes every major car company in the world, market leader Tesla and… [+2630 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Billings Gazette"
            },
            "author": "AP",
            "title": "AP News Summary at 8:29 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://billingsgazette.com/news/national/ap-news-summary-at-8-29-a-m-edt/article_39141dfb-896d-57d4-aee3-2bb9e7e04e9f.html",
            "urlToImage": "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T12:29:49Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7331 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Roanoke Times"
            },
            "author": "AP",
            "title": "AP News Summary at 8:29 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://roanoke.com/news/national/ap-news-summary-at-8-29-a-m-edt/article_f928ea9b-fdf4-5254-b681-129dab080486.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T12:29:49Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7331 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Richmond.com"
            },
            "author": "AP",
            "title": "AP News Summary at 8:29 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://richmond.com/news/national/ap-news-summary-at-8-29-a-m-edt/article_cca46bcb-0eb8-5169-b2c1-fd6465bae379.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T12:29:49Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7290 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Howtheygrow.co"
            },
            "author": "Jaryd Hermann",
            "title": "How Superhuman Grows: Lessons from a $2B email startup",
            "description": "What a $2bn email startup can teach us about not launching, pricing, viral growth loops, and reverse-engineering product-market-fit.",
            "url": "https://www.howtheygrow.co/p/how-superhuman-grows",
            "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F0d20c87f-4179-4988-9076-53dc8278cb4a_1456x1048.png",
            "publishedAt": "2022-10-05T12:27:54Z",
            "content": "Every other week, I pick one company/startup you probably know, and go deep on their go-to-market strategy, how they acquired early customers, and what their current growth engine looks like. Where r… [+53335 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Laura Smythe, Forbes Staff, \n Laura Smythe, Forbes Staff\n https://www.forbes.com/sites/laurasmythe-1/",
            "title": "Daily Dozen | Forbes: ‘Ominous’ Labor Plunge; Square Foot Squeeze; Putin’s ‘Killer Whale’",
            "description": "It looks like Elon Musk will buy Twitter after all; U.S. home buyers are getting a noticeably smaller footprint these days; more regulatory fallout is likely on the way for Ethereum Max; and more.",
            "url": "https://www.forbes.com/sites/laurasmythe/2022/10/05/daily-dozen--forbes-ominous-labor-plunge-square-foot-squeeze-putins-killer-whale/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/633d7540772788b32ede06ab/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2022-10-05T12:23:29Z",
            "content": "A feud between reclusive billionaire James Leprino, the powerhouse behind the worlds largest mozzarella producer Leprino Foods, and two daughters of his deceased brother is about to go public.\r\nILLUS… [+6935 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tech Times"
            },
            "author": "Joaquin Victor Tacla",
            "title": "Russia Praises Elon Musk's Peace Proposal on Ukraine Conflict",
            "description": "Russia is happy with Musk's suggestions to stop the war in Ukraine.",
            "url": "https://www.techtimes.com/articles/281496/20221005/russia-praises-elon-musk-peace-proposal-ukraine-conflict.htm",
            "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/412683/norway-industry-business-energy-oil-gas.jpg",
            "publishedAt": "2022-10-05T12:20:00Z",
            "content": "Elon Musk recently presented a four-point plan for bringing about peace in Ukraine via Twitter. His proposal involves making significant concessions to Russia, which Kyiv finds unacceptable. \r\nHoweve… [+3025 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Richmond.com"
            },
            "author": "Lee Digital Content Center, The Associated Press",
            "title": "Biden heads to Florida; 3 chemists win Nobel Prize; Trump asks Supreme Court to intervene | Hot off the Wire podcast",
            "description": "President Biden is traveling to hurricane-ravaged Florida, three share a Nobel Prize in chemistry and former President Trump turns to the Supreme Court. Those stories and more on our daily podcast.",
            "url": "https://richmond.com/news/national/biden-heads-to-florida-3-chemists-win-nobel-prize-trump-asks-supreme-court-to-intervene/article_bf9e9025-edc8-5d96-9908-f8d4f609c327.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/b/f9/bf9e9025-edc8-5d96-9908-f8d4f609c327/633d769757164.preview.jpg?crop=1736%2C912%2C3%2C64&resize=1200%2C631&order=crop%2Cresize",
            "publishedAt": "2022-10-05T12:20:00Z",
            "content": "President Joe Biden is traveling to hurricane-ravaged Florida with a pledge that federal, state and local governments will work as one to help rebuild homes, businesses and lives. Biden plans to put … [+5458 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Roanoke Times"
            },
            "author": "Lee Digital Content Center, The Associated Press",
            "title": "Biden heads to Florida; 3 chemists win Nobel Prize; Trump asks Supreme Court to intervene | Hot off the Wire podcast",
            "description": "President Biden is traveling to hurricane-ravaged Florida, three share a Nobel Prize in chemistry and former President Trump turns to the Supreme Court. Those stories and more on our daily podcast.",
            "url": "https://roanoke.com/news/national/biden-heads-to-florida-3-chemists-win-nobel-prize-trump-asks-supreme-court-to-intervene/article_8f9cd808-90b0-5641-b5b5-c5978c791212.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/8/f9/8f9cd808-90b0-5641-b5b5-c5978c791212/633d7697a04ce.preview.jpg?crop=1736%2C912%2C3%2C64&resize=1200%2C631&order=crop%2Cresize",
            "publishedAt": "2022-10-05T12:20:00Z",
            "content": "President Joe Biden is traveling to hurricane-ravaged Florida with a pledge that federal, state and local governments will work as one to help rebuild homes, businesses and lives. Biden plans to put … [+5500 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Billings Gazette"
            },
            "author": "Lee Digital Content Center, The Associated Press",
            "title": "Biden heads to Florida; 3 chemists win Nobel Prize; Trump asks Supreme Court to intervene | Hot off the Wire podcast",
            "description": "President Biden is traveling to hurricane-ravaged Florida, three share a Nobel Prize in chemistry and former President Trump turns to the Supreme Court. Those stories and more on our daily podcast.",
            "url": "https://billingsgazette.com/news/national/biden-heads-to-florida-3-chemists-win-nobel-prize-trump-asks-supreme-court-to-intervene/article_78ceb75a-b286-5a95-9ff9-890d425e63d5.html",
            "urlToImage": "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/7/8c/78ceb75a-b286-5a95-9ff9-890d425e63d5/633d7692b8581.preview.jpg?crop=1736%2C912%2C3%2C64&resize=1200%2C631&order=crop%2Cresize",
            "publishedAt": "2022-10-05T12:20:00Z",
            "content": "President Joe Biden is traveling to hurricane-ravaged Florida with a pledge that federal, state and local governments will work as one to help rebuild homes, businesses and lives. Biden plans to put … [+5500 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TweakTown"
            },
            "author": "Jak Connor",
            "title": "Russia praises Elon Musk for his controversial comments on Ukraine",
            "description": "Elon Musk has found himself in hot water after posting a very controversial proposal for a peace deal to be drawn up between Russia and Ukraine. Continue reading at TweakTown >",
            "url": "https://www.tweaktown.com/news/88809/russia-praises-elon-musk-for-his-controversial-comments-on-ukraine/index.html",
            "urlToImage": "https://static.tweaktown.com/news/8/8/88809_01_russia-praises-elon-musk-for-his-controversial-comments-on-ukraine_full.png",
            "publishedAt": "2022-10-05T12:16:02Z",
            "content": "SpaceX and Tesla CEO Elon Musk found himself in the middle of online controversy after posting what he believes to be a good peace deal between Russia and Ukraine.\r\nElon Musk fired off a series of Tw… [+1710 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Ciara Linnane",
            "title": ": Elon Musk would lose 13.5 million Twitter followers if he scraps most spam accounts; Justin Bieber would lose 27.6 million, data finds",
            "description": "Elon Musk would lose about 13.5 million Twitter followers, if he pushes through his plan to get rid of most spam accounts, according to data crunched by CodeClan, a Scottish digital skills academy.",
            "url": "https://www.marketwatch.com/story/elon-musk-would-lose-13-5-million-twitter-followers-if-he-scraps-most-spam-accounts-justin-bieber-would-lose-27-6-million-data-finds-11664970889",
            "urlToImage": "https://images.mktw.net/im-637478/social",
            "publishedAt": "2022-10-05T12:07:03Z",
            "content": "Elon Musk would lose about 13.5 million Twitter followers, if he pushes through his plan to get rid of most spam accounts, according to data crunched by CodeClan, a Scottish digital skills academy. T… [+2185 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "bnolan@insider.com (Beatrice Nolan)",
            "title": "Elon Musk says Twitter purchase will accelerate the creation of X, his long-discussed 'everything app'",
            "description": "Elon Musk is looking to end months of litigation by offering to buy Twitter for the $44 billion price he agreed to in April.",
            "url": "https://www.businessinsider.com/elon-musk-twitter-accelerant-x-everything-app-2022-10",
            "urlToImage": "https://i.insider.com/633d660e025b830018923a64?width=1200&format=jpeg",
            "publishedAt": "2022-10-05T12:00:12Z",
            "content": "Elon Musk's $44 billion deal to buy Twitter is back on the table and the billionaire is claiming the purchase will accelerate the development of his long-discussed \"everything app.\"\r\nAfter months of … [+1412 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Ari Levy",
            "title": "Florida hedge fund could reap around $200 million from big arbitrage bet on Twitter",
            "description": "A Florida-based hedge fund made Twitter one of its top holdings in the second quarter, when the stock was trading well below Elon Musk's offer price.",
            "url": "https://www.cnbc.com/2022/10/05/twitter-arbitrage-bet-could-pay-off-big-for-pentwater-capital.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107050929-1650888287874-gettyimages-1239995671-porzycki-elonmusk220414_np0qi.jpeg?v=1664971201&w=1920&h=1080",
            "publishedAt": "2022-10-05T12:00:01Z",
            "content": "Among the big winners in Elon Musk's agreement to follow through with his deal to buy Twitter is an activist hedge fund based in a coastal Florida city that was just wrecked by Hurricane Ian.\r\nPentwa… [+4273 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Autoblog"
            },
            "author": "Insider",
            "title": "Elon Musk says Twitter purchase will accelerate the creation of X, his long-discussed 'everything app'",
            "description": "Filed under:\n Government/Legal,Green,Genesis,Hyundai,Kia\n Continue reading Elon Musk says Twitter purchase will accelerate the creation of X, his long-discussed 'everything app'\nElon Musk says Twitter purchase will accelerate the creation of X, his long-discu…",
            "url": "https://www.autoblog.com/2022/10/05/elon-musk-says-twitter-purchase-will-accelerate-the-creation-of-x-his-long-discussed-everything-app/",
            "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.yimg.com/uu/api/res/1.2/Geiek.1oXxs3LF76lbXcGQ--~B/aD0yMDAwO3c9MjY2ODthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/insider_articles_922/98d87ed2d1011baac9b06547eb880bd9",
            "publishedAt": "2022-10-05T12:00:00Z",
            "content": "Elon Musk has offered the buy Twitter for the original price of $44 billion offered in April. \r\n REUTERS/Adrees Latif\r\nElon Musk's $44 billion deal to buy Twitter is back on the table and the billion… [+1531 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mit.edu"
            },
            "author": "Becky Ham | MIT.nano",
            "title": "A factory for FrEDs at MIT",
            "description": "A team of MIT mechanical engineering graduate students has designed and built an assembly factory for a desktop fiber extrusion system entirely within an MIT lab, making their project one of the few factories operating at a university. The system will be shar…",
            "url": "https://news.mit.edu/2022/factory-for-freds-mit-1005",
            "urlToImage": "https://news.mit.edu/sites/default/files/images/202210/fred-students.jpg",
            "publishedAt": "2022-10-05T12:00:00Z",
            "content": "MIT is famous as a factory of ideas. You could also call MIT a factory for learning. But for one group of students over the past year MIT has been, in fact, a factory.\r\nThe team of graduate students … [+5140 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Alex Harring",
            "title": "Stocks making the biggest moves in the premarket: Tesla, Ford Motor, Goldman Sachs and more",
            "description": "These are the stocks posting the largest moves in pre-market trading.",
            "url": "https://www.cnbc.com/2022/10/05/stocks-making-the-biggest-moves-in-the-premarket-tesla-ford-motor-goldman-sachs-and-more.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107043910-1649419158210-gettyimages-1239417462-action_38396461.jpeg?v=1664971054&w=1920&h=1080",
            "publishedAt": "2022-10-05T11:57:34Z",
            "content": "Check out the companies making headlines in premarket trading Wednesday.\r\nTesla, Twitter The electric vehicle maker slid 1.5% after CEO Elon Musk reversed course on his Twitter purchase, proposing on… [+1369 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "seattlepi.com"
            },
            "author": "By ALEX NISHIMOTO, Edmunds",
            "title": "Edmunds compares: 2022 Lucid Air vs. Tesla Model S",
            "description": "The Tesla Model S has enjoyed a nearly 10-year head start on the premium electric sedan competition, but the gap is beginning to close. There’s a newcomer giving the Model S a run for its money, and it comes from a fellow startup. The 2022 Lucid Air is an all…",
            "url": "https://www.seattlepi.com/living/article/Edmunds-compares-2022-Lucid-Air-vs-Tesla-Model-S-17488137.php",
            "urlToImage": "https://s.hdnux.com/photos/01/27/61/71/23010910/3/rawImage.jpg",
            "publishedAt": "2022-10-05T11:56:07Z",
            "content": "The Tesla Model S has enjoyed a nearly 10-year head start on the premium electric sedan competition, but the gap is beginning to close. Theres a newcomer giving the Model S a run for its money, and i… [+4720 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tech Xplore"
            },
            "author": "Science X staff",
            "title": "Musk-Twitter deal: a roller-coaster saga",
            "description": "Elon Musk's pursuit of Twitter was a melodrama from the beginning—a mercurial billionaire locked in a bitter fight with his favorite social media platform.",
            "url": "https://techxplore.com/news/2022-10-musk-twitter-roller-coaster-saga.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/2022/elon-musk-has-called-a.jpg",
            "publishedAt": "2022-10-05T11:55:04Z",
            "content": "Elon Musk's pursuit of Twitter was a melodrama from the beginninga mercurial billionaire locked in a bitter fight with his favorite social media platform.\r\nAfter months of recriminations and attempts… [+3484 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Punch"
            },
            "author": "Agency Report",
            "title": "Oil prices rise ahead OPEC output cut",
            "description": "Oil prices rose Wednesday as OPEC and Russia-led allies prepare to announce a big cut in output. Stocks markets diverged following Tuesday’s surge on hopes the US Federal Reserve could temper its rate hike campaign. The pound continued to suffer against the d…",
            "url": "https://punchng.com/oil-prices-rise-ahead-opec-output-cut/",
            "urlToImage": "https://cdn.punchng.com/wp-content/uploads/2016/11/08092317/OPEC_headquarters-e1478869133708.jpg",
            "publishedAt": "2022-10-05T11:51:20Z",
            "content": "Oil prices rose Wednesday as OPEC and Russia-led allies prepare to announce a big cut in output.\r\nStocks markets diverged following Tuesday’s surge on hopes the US Federal Reserve could temper its ra… [+2599 chars]"
        },
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": null,
            "title": "News24.com | Musk says Twitter takeover will lead to 'everything app' called X",
            "description": "Elon Musk said buying Twitter would speed up his ambition to create an \"everything app\" called X.",
            "url": "https://www.news24.com/fin24/Companies/musk-says-twitter-takeover-will-lead-to-everything-app-called-x-20221005",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3081/82f0682774324f3690ff0876288406fe.jpg",
            "publishedAt": "2022-10-05T11:51:15Z",
            "content": "<li>Get the biggest business stories emailed to you every weekday, or go to the News24 Business front page.</li>Billionaire Elon Musk is proposing to proceed with his original $44 billion bid to take… [+4865 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Minneapolis Star Tribune"
            },
            "author": "TOM KRISHER, MATT O'BRIEN, RANDALL CHASE and BARBARA ORTUTAY",
            "title": "Musk says he wants Twitter again and will pay $44B price",
            "description": "and Twitter is game. The billionaire Tesla CEO has proposed to buy the company at the originally agreed-on price of $44 billion, bringing the tumultuous, monthslong saga another step closer to a conclusion.",
            "url": "https://www.startribune.com/musk-says-he-wants-twitter-again-and-will-pay-44b-price/600213051/",
            "urlToImage": "https://www.startribune.com/static/img/branding/logos/strib-social-card.png?d=1664917481",
            "publishedAt": "2022-10-05T11:50:04Z",
            "content": "Elon Musk wants Twitter again and Twitter is game. The billionaire Tesla CEO has proposed to buy the company at the originally agreed-on price of $44 billion, bringing the tumultuous, monthslong saga… [+4196 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Joann Muller, Jennifer A. Kingson, Alex Fitzpatrick",
            "title": "Axios What's Next",
            "description": "People who buy electric vehicles (EVs) really like them, according to U.S. vehicle registration data, which shows most EV owners tend to buy an EV for their next car too, Joann Muller reports. Why it matters: The data reveals a growing embrace of electric car…",
            "url": "https://www.axios.com/newsletters/axios-whats-next-fb4740fd-125b-49fe-bd7e-574904c49ccd.html",
            "urlToImage": "https://assets.axios.com/203e9f932cc97836ac2ff4c6c982676c.png",
            "publishedAt": "2022-10-05T11:50:01Z",
            "content": "People who buy electric vehicles (EVs) really like them, according to U.S. vehicle registration data, which shows most EV owners tend to buy an EV for their next car too, Joann Muller reports.\r\nWhy i… [+2563 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Martyn Landi",
            "title": "What will Elon Musk’s ‘everything app’ be like after he buys Twitter?",
            "description": "The Tesla boss has confirmed his intention to go ahead with the purchase after months of sparring with Twitter.",
            "url": "https://www.independent.co.uk/tech/elon-musk-everything-app-twitter-b2196031.html",
            "urlToImage": "https://static.independent.co.uk/2022/10/05/10/ca9e9106a9a8c8376a7b8d14d3b133a5Y29udGVudHNlYXJjaGFwaSwxNjY1MDQ2NDUz-2.37631278.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2022-10-05T11:46:14Z",
            "content": "Elon Musk has said that his decision to purchase Twitter is a part of the plan to turn the platform into an everything app.\r\nAs news broke of his decision to go ahead with the takeover deal after mon… [+4566 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Richmond.com"
            },
            "author": "AP",
            "title": "AP News Summary at 7:45 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://richmond.com/news/national/ap-news-summary-at-8-15-a-m-edt/article_cca46bcb-0eb8-5169-b2c1-fd6465bae379.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T11:45:16Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia. His move finalizes an an… [+7375 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Roanoke Times"
            },
            "author": "AP",
            "title": "AP News Summary at 7:45 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://roanoke.com/news/national/ap-news-summary-at-7-45-a-m-edt/article_f928ea9b-fdf4-5254-b681-129dab080486.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T11:45:16Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia, a move that finalizes th… [+7179 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Week Magazine"
            },
            "author": "Harold Maass",
            "title": "The daily business briefing: October 5, 2022",
            "description": "Musk renews offer to buy Twitter at original price after trying to back out, the U.S. national debt hits $31 trillion, and more",
            "url": "https://theweek.com/briefing/business-briefing/1017229/the-daily-business-briefing-october-5-2022",
            "urlToImage": "https://mediacloud.theweek.com/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1654748231/GettyImages-1240311432.jpg",
            "publishedAt": "2022-10-05T11:41:32Z",
            "content": "Billionaire entrepreneur Elon Musk has renewed his $44 billion offer to buy Twitter, just weeks before the social media company is scheduled to try to force him in court not to abandon the deal. Musk… [+3444 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Toronto Star"
            },
            "author": "Alex Nishimoto - The Associated Press",
            "title": "Edmunds compares: 2022 Lucid Air vs. Tesla Model S",
            "description": "The Tesla Model S has enjoyed a nearly 10-year head start on the premium electric sedan competition, but the gap is beginning to close. There’s a newc...",
            "url": "https://www.thestar.com/life/2022/10/05/edmunds-compares-2022-lucid-air-vs-tesla-model-s.html",
            "urlToImage": "https://www.thestar.com/assets/img/thestar-ribbon.png",
            "publishedAt": "2022-10-05T11:38:22Z",
            "content": "The Tesla Model S has enjoyed a nearly 10-year head start on the premium electric sedan competition, but the gap is beginning to close. Theres a newcomer giving the Model S a run for its money, and i… [+5054 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Insider South Africa"
            },
            "author": "George Glover",
            "title": "Businessinsider.co.za | Elon Musk selling Tesla stocks to fund Twitter takeover 'is like giving away caviar to buy $2 pizza'",
            "description": "Elon Musk has backed down and offered to buy Twitter at its original purchase price, and is selling shares in the electric vehicle maker to pay for the deal.",
            "url": "https://www.businessinsider.co.za/tesla-stock-outlook-elon-musk-twitter-takeover-wedbush-dan-ives-2022-10",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/7328/06c02ad092ba4473bbc712ea00d11649.jpg",
            "publishedAt": "2022-10-05T11:37:30Z",
            "content": "<ul><li>Elon Musk's revived Twitter takeover is bad news for Tesla, according to Wedbush's Dan Ives.</li><li>Musk has offloaded Tesla shares this year to fund his $44 billion Twitter bid.</li><li>\"Th… [+1618 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Alex Nishimoto",
            "title": "Edmunds compares: 2022 Lucid Air vs. Tesla Model S",
            "description": "Tesla’s Model S has enjoyed a nearly 10-year head start on the premium electric sedan competition, but the gap between it and its electric luxury sedan rivals is beginning to close",
            "url": "https://www.independent.co.uk/news/ap-lucid-model-epa-b2196037.html",
            "urlToImage": "https://static.independent.co.uk/2022/10/05/12/Behind_the_Wheel_Air_v_Model_S_84382.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2022-10-05T11:37:27Z",
            "content": "The Tesla Model S has enjoyed a nearly 10-year head start on the premium electric sedan competition, but the gap is beginning to close. Theres a newcomer giving the Model S a run for its money, and i… [+4727 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": "IANS",
            "title": "BYD India targets 15,000 EV sales in 2023, to expand portfolio and network",
            "description": "Pure play electric car maker BYD targeting a sales of 15,000 units next year is launching a new model, increasing its distribution network and expanding production capacity if needed",
            "url": "https://www.business-standard.com/article/companies/byd-india-targets-15-000-ev-sales-in-2023-to-expand-portfolio-network-122100500522_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-08/25/full/1661365892-4161.jpg",
            "publishedAt": "2022-10-05T11:37:00Z",
            "content": "Pure play electric car maker BYD India Private Ltd targeting a sales of 15,000 units next year is launching a new model, increasing its distribution network and expanding production capacity if neede… [+2892 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Bruce Usher",
            "title": "Outside the Box: Investors have been pouring money into companies promising climate-change solutions. Here’s how to spot the winners.",
            "description": "An estimated $100-$150 trillion will be needed by 2050 to decarbonize the global economy and cut greenhouse gas emissions to near-zero.",
            "url": "https://www.marketwatch.com/story/investors-have-been-pouring-money-into-companies-promising-climate-change-solutions-heres-how-to-spot-the-winners-11664898247",
            "urlToImage": "https://images.mktw.net/im-424648/social",
            "publishedAt": "2022-10-05T11:36:39Z",
            "content": "Financial market volatility is up, major stock indices are down, and investors are suffering losses in almost every asset major class. Though the situation seems dire, it may be a good time to remind… [+7302 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Felix Salmon",
            "title": "There are more winners than losers in Musk's Twitter deal",
            "description": "If Elon Musk does indeed end up buying Twitter for $54.20 per share, as he's contractually obliged to and as he now claims to want to, the big winners will be Twitter's shareholders. There will also be a large number of losers. Why it matters: Twitter is much…",
            "url": "https://www.axios.com/2022/10/05/musk-winners-losers-twitter-deal",
            "urlToImage": "https://images.axios.com/kezgqPjWZjKg3ejcQeIMx_6A5C0=/0x0:1920x1080/1366x768/2022/10/05/1664930395706.jpg",
            "publishedAt": "2022-10-05T11:36:39Z",
            "content": "If Elon Musk does indeedend up buying Twitter for $54.20 per share, as he's contractually obliged to and as he now claims to want to, the big winners will be Twitter's shareholders. There will also b… [+2205 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Sam Tonkin",
            "title": "Elon Musk says buying Twitter for $44 billion is 'an accelerant to creating X, the everything app'",
            "description": "Explaining the move, the billionaire US entrepreneur said the social media giant was part of his plans to create a mysterious 'everything app', known simply as 'X'.",
            "url": "https://www.dailymail.co.uk/sciencetech/article-11282915/Elon-Musk-says-buying-Twitter-44-billion-accelerant-creating-X-app.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/10/05/11/63133095-0-image-a-4_1664966944559.jpg",
            "publishedAt": "2022-10-05T11:35:13Z",
            "content": "Elon Musk has made a dramatic U-turn on his vow to walk away from buying Twitter and will now continue with his proposed $44 billion (£38 billion) acquisition as planned.\r\nExplaining the move, the bi… [+8908 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "24/7 Wall St."
            },
            "author": "Douglas A. McIntyre",
            "title": "The Least Expensive Car to Insure",
            "description": "A recent analysis reveals the cars with the lowest and highest annual insurance costs.",
            "url": "https://247wallst.com/autos/2022/10/05/fiat-is-the-least-expensive-car-to-insure/",
            "urlToImage": "https://247wallst.com/wp-content/uploads/2019/12/2019-fiat-500x.jpg",
            "publishedAt": "2022-10-05T11:30:46Z",
            "content": "The expense of a new or slightly used car has risen so much that people find themselves priced out of the market. Maybe this is why the average American car has been on the road for over 12 years now… [+2421 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Analysis by Michelle Toh, CNN Business",
            "title": "Elon Musk may want a WeChat for the world, but it won't be easy to build",
            "description": "Elon Musk is taking inspiration from China's top social media platform, WeChat, while planning a future for Twitter. And while he has shared very few details of his ambition for an app for everything, experts say it won't be easy to achieve.",
            "url": "https://www.cnn.com/2022/10/05/tech/everything-app-x-musk-china-wechat-learnings-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/221005031100-02-elon-musk-twitter-wechat-super-tease.jpg",
            "publishedAt": "2022-10-05T11:28:47Z",
            "content": "Hong Kong (CNN Business)Elon Musk is taking inspiration from China's top social media platform, WeChat, while planning a future for Twitter. And while he has shared very few details of his ambition f… [+5008 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Billings Gazette"
            },
            "author": "AP",
            "title": "AP News Summary at 7:25 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://billingsgazette.com/news/national/ap-news-summary-at-7-45-a-m-edt/article_39141dfb-896d-57d4-aee3-2bb9e7e04e9f.html",
            "urlToImage": "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T11:25:52Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia, a move that finalizes th… [+7179 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wccftech"
            },
            "author": "Rohail Saleem",
            "title": "Uh-oh: Elon Musk Needs To Sell $5.4 Billion Worth of Additional Tesla Shares To Move Ahead With the Twitter Deal",
            "description": "Now that Elon Musk and Twitter have apparently reverted to their respective positions in early summer, with the CEO of Tesla finally eschewing attempts to wriggle out of a legally binding acquisition agreement, and Twitter cavorting on having secured a substa…",
            "url": "https://wccftech.com/uh-oh-elon-musk-needs-to-sell-5-4-billion-worth-of-additional-tesla-shares-to-move-ahead-with-the-twitter-deal/",
            "urlToImage": "https://cdn.wccftech.com/wp-content/uploads/2022/10/image_2022-10-05_162040534.png",
            "publishedAt": "2022-10-05T11:22:58Z",
            "content": "This is not investment advice. The author has no position in any of the stocks mentioned. Wccftech.com has a disclosure and ethics policy.\r\nNow that Elon Musk and Twitter have apparently reverted to … [+3442 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Roanoke Times"
            },
            "author": "AP",
            "title": "AP News Summary at 7:17 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://roanoke.com/news/national/ap-news-summary-at-7-25-a-m-edt/article_f928ea9b-fdf4-5254-b681-129dab080486.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T11:17:13Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia, a move that finalizes th… [+7218 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Richmond.com"
            },
            "author": "AP",
            "title": "AP News Summary at 7:17 a.m. EDT",
            "description": "Putin signs annexation of Ukrainian regions as losses mount",
            "url": "https://richmond.com/news/national/ap-news-summary-at-7-25-a-m-edt/article_cca46bcb-0eb8-5169-b2c1-fd6465bae379.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
            "publishedAt": "2022-10-05T11:17:13Z",
            "content": "Putin signs annexation of Ukrainian regions as losses mount\r\nKYIV, Ukraine (AP) Russian President Vladimir Putin has signed laws absorbing four Ukrainian regions into Russia, a move that finalizes th… [+7177 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TechSpot"
            },
            "author": "Tudor Cibean",
            "title": "Elon Musk agrees to proceed with Twitter acquisition at original price",
            "description": "According to a new SEC filing, billionaire Elon Musk will go through with his Twitter acquisition, after all, provided the company drops its lawsuit against him. Twitter shares rose 22 percent when the news broke, while Tesla shares fell about 5 percent but h…",
            "url": "https://www.techspot.com/news/96205-elon-musk-agrees-proceed-twitter-acquisition-original-price.html",
            "urlToImage": "https://static.techspot.com/images2/news/bigimage/2022/04/2022-04-21-image-25.jpg",
            "publishedAt": "2022-10-05T11:15:00Z",
            "content": "In a nutshell: Elon Musk seems to have changed his mind again and will buy Twitter after all for the originally agreed-upon amount. He will end up paying $54.20 per share, with the entire deal being … [+2008 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "bnolan@insider.com (Beatrice Nolan)",
            "title": "Twitter employees are venting on social media and in private forums about Elon Musk's agreement to buy Twitter",
            "description": "Elon Musk's lawyers wrote a letter to Twitter saying he would agree to buy it at the price originally agreed but many staffers have raised concerns.",
            "url": "https://www.businessinsider.com/twitter-elon-musk-employees-elon-musk-deal-2022-10",
            "urlToImage": "https://i.insider.com/633d45b5349d7900197c7a92?width=1200&format=jpeg",
            "publishedAt": "2022-10-05T11:13:47Z",
            "content": "Some Twitter employees aren't happy with Elon Musk's announcement that he will proceed with the deal to buy the company after spending months trying to back out of it.\r\nThe billionaire wrote a letter… [+2226 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Musk’s Twitter deal back on: What you need to know",
            "description": "Elon Musk has made yet another U-turn on the acquisition of Twitter, days before he is scheduled to appear in court.",
            "url": "https://www.aljazeera.com/news/2022/10/5/musks-twitter-deal-back-on-what-you-need-to-know",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/07/2022-07-08T163429Z_1748155903_RC2R7V96982Q_RTRMADP_3_ELON-MUSK-CHILDCARE.jpg?resize=1920%2C1440",
            "publishedAt": "2022-10-05T11:12:49Z",
            "content": "Billionaire Elon Musk is proposing to proceed with his original $44bn bid to take Twitter Inc private, an offer contingent on the social media company halting the legal proceedings against him.\r\nMusk… [+4688 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "moneytree",
            "title": "Dow Jones Futures Fall After Market Rallies On Fed Hopes; Twitter Skyrockets As Elon Musk Gives In",
            "description": "Dow Jones futures fell early Wednesday, along with S&P 500 futures and Nasdaq futures. Treasury yields and the dollar moved higher. OPEC+ is expected to announce a larger production cut at today's... #aapl #tesla #centralbank #paylocity #onsemiconductor #nasd…",
            "url": "https://biztoc.com/p/7g6e8viw?ref=rss",
            "urlToImage": "https://cdn.biztoc.com/og/7g6e8viw.jpg",
            "publishedAt": "2022-10-05T11:09:24Z",
            "content": "Dow Jones futures fell early Wednesday, along with S&amp;P 500 futures and Nasdaq futures. Treasury yields and the dollar moved higher. OPEC+ is expected to announce a larger production cut at today'… [+1215 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "This is Money"
            },
            "author": "Rob Hull",
            "title": "ONE MILLIONTH plug-in electric car was sold in September",
            "description": "Industry experts warn that demand is likely to shrink in the coming months with the nation gripped by the cost-of-living crunch and big-ticket purchases cancelled.",
            "url": "https://www.thisismoney.co.uk/money/cars/article-11282737/ONE-MILLIONTH-plug-electric-car-sold-September.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/10/05/11/63131567-0-image-a-10_1664964007319.jpg",
            "publishedAt": "2022-10-05T11:04:11Z",
            "content": "Britain's new car market recorded its second successive month of growth in September and also saw the one millionth plug-in electric vehicle hit our roads.\r\nRegistrations of new motors increased 4.6 … [+8621 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "David Waterworth",
            "title": "A Solution For Unit Charging Outlets In Apartment Building",
            "description": "What is the most cost-effective way to install a facility for unit charging your electric vehicle? For those who rent or live in apartments where their car parking is remote from their metered power, it is a difficult question. Mindful of the surge in EV upta…",
            "url": "https://cleantechnica.com/2022/10/05/a-solution-for-unit-charging-outlets-in-apartment-building/",
            "urlToImage": "https://cleantechnica.com/files/2019/07/Nissan-LEAFs-Hyundai-Ioniq-EV-Charging-Station-Wroclaw-Poland-Zach-Shahan-CleanTechnica-3.jpg",
            "publishedAt": "2022-10-05T11:01:39Z",
            "content": "What is the most cost-effective way to install a facility for unit charging your electric vehicle? For those who rent or live in apartments where their car parking is remote from their metered power,… [+3061 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Gabrielle Olya",
            "title": "10 Used Car Models That Are Selling for More Than the MSRP on New Models",
            "description": "Buying a used car has traditionally been much more affordable than buying a new car, but in the current auto market, several used cars are now selling for...",
            "url": "https://finance.yahoo.com/news/10-used-car-models-selling-110010267.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/c5YufnPiVnflWLu8XAM6kA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/8b6baa3edb49aac791452dbc2cbe1f19",
            "publishedAt": "2022-10-05T11:00:10Z",
            "content": "jetcityimage / iStock.com\r\nBuying a used car has traditionally been much more affordable than buying a new car, but in the current auto market, several used cars are now selling for more than the sug… [+2545 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GlobeNewswire"
            },
            "author": "EOI Lighting USA",
            "title": "EOI Lighting USA Introduces the SENTINEL (Surveillant) Lighting Series",
            "description": "CITY OF INDUSTRY, Calif., Oct. 05, 2022 (GLOBE NEWSWIRE) -- EOI Lighting USA, a manufacturer and pioneer of LED-based and solid-state lighting energy-saving products, has officially announced its new surveillant luminaires for security, roadway, and area ligh…",
            "url": "https://www.globenewswire.com/news-release/2022/10/05/2528529/0/en/EOI-Lighting-USA-Introduces-the-SENTINEL-Surveillant-Lighting-Series.html",
            "urlToImage": null,
            "publishedAt": "2022-10-05T11:00:00Z",
            "content": "CITY OF INDUSTRY, Calif., Oct. 05, 2022 (GLOBE NEWSWIRE) -- EOI Lighting USA, a manufacturer and pioneer of LED-based and solid-state lighting energy-saving products, has officially announced its new… [+3281 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": null,
            "title": "Elon Musk’s Challenge Is to Turn Twitter Into ‘Everything.’ And Make a Profit.",
            "description": "Musk does about-face and wants Twitter at original price, Micron will build largest-ever U.S. chip factory in New York, Warren Buffett’s heir apparent may buy more Berkshire stock, and other news to start your day.",
            "url": "https://www.barrons.com/articles/things-to-know-today-51664964171",
            "urlToImage": "https://images.barrons.com/im-637418/social",
            "publishedAt": "2022-10-05T10:54:38Z",
            "content": "The saga of the year looks to be coming to an end after a dramatic twist. Or maybe its only just beginning.Elon Musk is pressing ahead with plans to buy Twitter after all. What the world wants to kno… [+11148 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Ciara Linnane",
            "title": "Elon Musk would lose 13.5 million Twitter followers if he pushes through plan to eliminate spam accounts: CodeClan",
            "description": "Elon Musk would lose about 13.5 million Twitter followers, if he pushes through his plan to get rid of most spam accounts, according to data crunched by CodeClan, a Scottish digital skills academy. The Tesla Inc. CEO on Tuesday gave up a legal battle and agre…",
            "url": "https://www.marketwatch.com/story/elon-musk-would-lose-135-million-twitter-followers-if-he-pushes-through-plan-to-eliminate-spam-accounts-codeclan-2022-10-05",
            "urlToImage": "https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg",
            "publishedAt": "2022-10-05T10:54:38Z",
            "content": "Elon Musk would lose about 13.5 million Twitter \r\n TWTR,\r\n +22.24%\r\nfollowers, if he pushes through his plan to get rid of most spam accounts, according to data crunched by CodeClan, a Scottish digit… [+706 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Finbold.com"
            },
            "author": "Paul Luvaga",
            "title": "DOGE’s whale activity spikes after Elon Musk’s 2nd attempt to buy Twitter",
            "description": "Meme cryptocurrency Dogecoin (DOGE) has recorded minor gains after extended months of trading in the red zone. The rally has... Continue reading \nThe post DOGE’s whale activity spikes after Elon Musk’s 2nd attempt to buy Twitter appeared first on Finbold.",
            "url": "https://finbold.com/doges-whale-activity-spikes-after-elon-musks-2nd-attempt-to-buy-twitter/",
            "urlToImage": "https://finbold.com/app/uploads/2022/10/DOGEs-whale-activity-spikes-after-Elon-Musks-2nd-attempt-to-buy-Twitter.jpeg",
            "publishedAt": "2022-10-05T10:50:37Z",
            "content": "Meme cryptocurrency Dogecoin (DOGE) has recorded minor gains after extended months of trading in the red zone. The rally has resulted in optimism that the token will potentially rally to regain the h… [+2236 chars]"
        }
    ]
    constructor() {
        super();
        console.log("Hello I am constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>Latest News - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imgUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
