var request = require('request');
var superAgent = require('superagent');

var LOGIN_HEADERS = {
        'Host': 'reg.163.com',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,' +
        'image/webp,*/*;q=0.8',
        'Origin': 'http://love.163.com',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/49.0.2623.110 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': 'http://love.163.com/',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
        'Cookie': '_ntes_nnid=d3978e4bebe452d122596e8f0478be9b,1461164661283; ' +
        ' _ntes_nuid=d3978e4bebe452d122596e8f0478be9b;',
    },
    login_h = {
        'Host': 'dl.reg.163.com',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'max-age=0',
        'Accept': '*/*',
        'Origin': 'https://dl.reg.163.com',
        'Content-Length': 299,
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.75 Safari/537.36',
        'Content-Type': 'application/json',
        'Referer': 'https://dl.reg.163.com/src/mp-agent-finger.html?v=160325',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
        'Cookie': '_ntes_nuid=96f8c99ee2ae7a77b5e3bec661739cbd; _ntes_nnid=725e11a5e0cc933d377bcf45371e1dbc,1454679769433; __utma=205185811.861324868.1454679770.1454679770.1454679770.1; __utmz=205185811.1454679770.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); ui_tip_cookie=never_fall%261%261%260%7C; __utma=187553192.862693573.1454679909.1454679909.1454679909.1; __utmz=187553192.1454679909.1.1.utmcsr=reg.163.com|utmccn=(referral)|utmcmd=referral|utmcct=/login2.jsp; usertrack=3/zPBVbVWhd1OLI+AwRPAg==; _ga=GA1.2.862693573.1454679909; SID=7ffb471a-08ae-401a-9e9c-3fbd805e5920; T_INFO=92986A556DE1C004E307FFF640F1BC04B64C7C67D10AF463EE5236F79C32763F; JSESSIONID-WYTXZDL=ngUZ8U%2Fcn3r7XrpiPErS4g8SrRDYyKVF8k2PsSSQ3xMLmEkfzBvJXdTBH%5CM2V4DOAmD0J%5CRA8p611s0HDMjGD1M3%5CLBekXPbKM7pLRElv1l%2F%2FGcL8uVk2zJXVf4l6H9nKS2P4oQnYqQ6kVW%2Bg64nbmK3D2RfaUump3PzV893Jl3tzO3t%3A1461163990432; _ihtxzdilxldP8_=27; P_INFO=s_sapling@163.com|1461163473|2|ht|00&99|bej&1461163400&ht#bej&null#10#0#0|182751&1|ht|s_sapling@163.com; l_s_htEkJZIYd=CF5247C89D5265452AC7FABB35ECCAFF570F1C73E7C7AB2D6F09158459DB59F0163CC9CB5DAFF0E3B735B1998AF189ADD778191098D9BD3629EE3825AA0B90C6'
    },

    SEARCH_HEADERS = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Host': 'love.163.com',
        'Origin': 'http://love.163.com',
        'Pragma': 'no-cache',
        'Referer': 'http://love.163.com/search/user',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) ' +
        'Chrome/49.0.2623.110 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    };

function loginHT() {
    var url = 'https://reg.163.com/logins.jsp';
    var data = {
        'username': '18202822751@163.com',
        'password': '19854160qj',
        'url': 'http://love.163.com/?checkUser=1&vendor=love.pLogin',
        'product': 'ht',
        'type': '1',
        'append': '1',
        'savelogin': '1'
    }, data1 = {
        l: 0,
        pd: "ht",
        pkid: "EkJZIYd",
        pw: "drIEc+e5xQA5HR5xpg+HZ66qD7XQ59PqjX8rWbLpRnuPvOuLK0VF7k9slQXjhaMBHKPmnz7UaTeI+BoXTc8t6jPVKgHlyqHwCbxrvoXQEl+k5MtDwsZyc4o6moU4Wn7uNXdvsiZeFlMciNIlr/3UjuKWp+F49XVOiQIkjPg52lc=",
        t: 1461163628190,
        tk: "7faabf876f7f76f01e98a39f62028563",
        un: "18202822751@163.com"
    };
    //request({url: url, method: 'POST', headers: LOGIN_HEADERS, qs: data}, function (err, data) {
    //    var body = data.body;
    //    console.log(body.toString('utf8'));
    //});
    superAgent.post(url).set(LOGIN_HEADERS).send(data).end(function (err, res) {
        console.log(err);
        //console.log(JSON.stringify(res.header));
        //console.log(Object.keys(res.header));
        //console.log(res.request.header);
        //console.log(res.request._data);
        //console.log(Object.keys(res));
        //
        //console.log(typeof res.header['set-cookie']);
        console.log(res.header['set-cookie'].join(' '));
        searchUser(res.header['set-cookie'])
    });
    var getHeader = {
        'Host': 'dl.reg.163.com',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'max-age=0',
        'Accept': '*/*',
        //'Origin': 'https://dl.reg.163.com',
        'Content-Length': 299,
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.75 Safari/537.36',
        'Content-Type': 'application/json',
        'Referer': 'https://dl.reg.163.com/src/mp-agent-finger.html?v=160325',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
        'Cookie': '__utma=205185811.861324868.1454679770.1454679770.1454679770.1; __utmz=205185811.1454679770.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); ui_tip_cookie=never_fall%261%261%260%7C; SID=7ffb471a-08ae-401a-9e9c-3fbd805e5920; T_INFO=92986A556DE1C004E307FFF640F1BC04B64C7C67D10AF463EE5236F79C32763F; JSESSIONID-WYTXZDL=qt0u3QWZTkVEgm7Z8zxOeZSBtdP%5Cpc4bBcXR73s11RXm2U5%5C15wonWmUlD3el9%5ClMLpo%5C7ibmBRcrTQxGNM%5COL7P3z4lVr8PM9eU35NgmS2KyHjL%5CLI4wyKpvMsdZlia6qFp3Eq5NJJ%2FFwp%2Fc6qhPjSSZe6THtaQbkbAzDbYeQjrDc23%3A1461164868439; _ihtxzdilxldP8_=27; l_s_htEkJZIYd=CF5247C89D5265452AC7FABB35ECCAFF570F1C73E7C7AB2D6F09158459DB59F0ACA6950EEBB853C14EB72B344859829A2AA2DB789705EB5DFCB448DA719AA6E7'
    };
    //var getUrl = 'https://dl.reg.163.com/gt?un=18202822751%40163.com&nocache=' + Date.now();
    //console.log('begin');
    //superAgent.get(getUrl).set(getHeader).end(function (err, res) {
    //    console.log('get in');
    //    console.log(err);
    //    console.log(res.body);
    //    superAgent.post('https://dl.reg.163.com/l').set(login_h).send(data1).end(function (err, res) {
    //        console.log('========post=========');
    //        console.log(err);
    //        console.log(res.body);
    //        console.log('over request');
    //    });
    //});
    //
    //superAgent.post(url).set(LOGIN_HEADERS).send(data).end(function (err, res) {
    //    console.log(err);
    //    console.log(res.text);
    //});
}

function searchUser(cookie) {
    var url = 'http://love.163.com/search/user/list';
    var data = {
        province: 1,
        city: 0,
        age: '18 - 23',
        condition: 1
    };
    console.log(cookie);
    var header = {
        //
        //'Host': 'love.163.com',
        //'Connection': 'keep-alive',
        //'Pragma': 'no-cache',
        //'Cache-Control': 'max-age=0',
        //'Accept': '*/*',
        //'Origin': 'http://love.163.com',
        //'Content-Length': 299,
        //
        //'Upgrade-Insecure-Requests': '1',
        //'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.75 Safari/537.36',
        //'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //'Referer': 'http://love.163.com/search/user',
        //'Accept-Encoding': 'gzip, deflate',
        //'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
        //'X-Requested-With': 'XMLHttpRequest',
        //'Set-Cookie': 'user-from=http://love.163.com/search/user; domain=love.163.com; path=/, from-page=http://love.163.com/search/user; domain=love.163.com; path=/, HUATIAN_SESS=; domain=163.com; path=/; expires=Thu, 01-Dec-1994 16:00:00 GMT'
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Host': 'love.163.com',
        'Origin': 'http://love.163.com',
        'Pragma': 'no-cache',
        'Referer': 'http://love.163.com/search/user',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) '+
        'Chrome/49.0.2623.110 Safari/537.36',
        'Cookie': cookie,
        'X-Requested-With': 'XMLHttpRequest'
        //           Accept:'*/*,'
        //Accept-Encoding:gzip, deflate
        //Accept-Language:zh-CN,zh;q=0.8,en;q=0.6
        //Connection:keep-alive
        //Content-Length:39
        //Content-Type:application/x-www-form-urlencoded; charset=UTF-8
        //Cookie:user-from=http://love.163.com/73781601; from-page=http://love.163.com/73781601; _ntes_nnid=d3978e4bebe452d122596e8f0478be9b,1461164661283; _ntes_nuid=d3978e4bebe452d122596e8f0478be9b; NTES_SESS=oLgqG93.avuwyOlU.0M5slUi9RV4YwUd4kYHxY17GPd.xaw1xYbLvelXPVUpaSPwH6huXl6oyhdK8IugL1YEePGagL13abCWSBFC9qPDsQngzeat0WZFz5LR2ELIFOJzOZ47APV63hxbm5LA40tJNEZAgpGfqQ.gIYrVZ4oqgbS9qg1x6LMXx_1KL; S_INFO=1461166862|0|3&80#3&20#2&90|s_sapling; P_INFO=s_sapling@163.com|1461166862|0|ht|00&99|bej&1461165576&ht#bej&null#10#0#0|182751&1|ht|s_sapling@163.com; toolBar=unfold|shake|0; NETEASE_WDA_UID=-7329992996811684353%23%7C%231461082440209
        //Host:love.163.com
        //Origin:http://love.163.com
        //Referer:http://love.163.com/search/user
        //User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.75 Safari/537.36
        //X-Requested-With:XMLHttpRequest
    };
    console.log('go search');
    superAgent.post(url).set(header).send(data).end(function (err, res) {
        console.log(err);
        console.log(res.text);

        //console.log(Object.keys(res));
    })
}

loginHT();
//searchUser();