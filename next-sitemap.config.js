const pages=["/","/global-vendors","/service/manufacturing","/technologies","/strategy","/about-us","/contact","/service"];
const localized=(path)=>[{href:`https://a-oneroad.com${path}`,hreflang:"ja"},{href:`https://a-oneroad.com/en${path==="/"?"":path}`,hreflang:"en"},{href:`https://a-oneroad.com${path}`,hreflang:"x-default"}];
module.exports={siteUrl:"https://a-oneroad.com",generateRobotsTxt:true,generateIndexSitemap:false,changefreq:"monthly",priority:.7,
 exclude:["/api/*","/admin/*","/bpo","/service/bpo","/service/automotive","/mold-storage"],
 robotsTxtOptions:{policies:[{userAgent:"*",allow:"/",disallow:["/admin/","/api/"]}]},
 transform:async(config,path)=>({loc:path,changefreq:config.changefreq,priority:path==="/"?1:.7,alternateRefs:pages.includes(path)?localized(path):[]}),
 additionalPaths:async()=>pages.flatMap(path=>[{loc:path,alternateRefs:localized(path)},{loc:`/en${path==="/"?"":path}`,alternateRefs:localized(path)}])
};
