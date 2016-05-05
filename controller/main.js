'user strict';

var DBC = require('../dbc');
const infoMap = {
    salary: {
        '-1': '2000以下',
        '1': '2000-4000',
        '2': '4000-6000',
        '3': '6000-10000',
        '4': '10000-15000',
        '5': '15000-20000',
        '6': '20000-50000',
        '7': '50000以上'
    },
    education: {
        '1': '大专以下',
        '2': '大专',
        '3': '本科',
        '4': '硕士',
        '5': '博士'
    },
    industry: {
        '0': '--',
        '1': '计算机/互联网/通信',
        '2': '公务员/事业单位',
        '3': '教师',
        '4': '医生',
        '5': '护士',
        '6': '空乘人员',
        '7': '生产/工艺/制造',
        '8': '商业/服务业/个体经营',
        '9': '金融/银行/投资/保险',
        '10': '文化/广告/传媒',
        '11': '娱乐/艺术/表演',
        '12': '律师/法务',
        '13': '教育/培训/管理咨询',
        '14': '建筑/房地产/物业',
        '15': '消费零售/贸易/交通物流',
        '16': '酒店旅游',
        '17': '现代农业',
        '18': '在校学生'
    },
    position: {
        '0': '--',
        '1': '普通职员',
        '2': '中层管理者',
        '3': '高层管理员',
        '4': '企业主',
        '5': '学生'
    },
    province: {
        '1': 'BeiJing',
        '2': 'ShangHai'
    }
};


exports.rootPath = function *() {
    console.log('------');
    yield this.render('index');
};


exports.seePath = function *() {
    var pageNum = this.query.pageNum || 1, pageSize = this.query.pageSize || 99;
    var users = yield DBC.user.find({}).skip((pageNum - 1) * pageSize).limit(pageSize).lean();
    var totalCount = yield DBC.user.count();
    convertShowInfo(users);
    console.log(totalCount / pageSize);
    yield this.render('see', {
        users: users,
        pager: {
            totalCount: totalCount,
            pageSize: pageSize,
            pageNum: pageNum
        }
    });
};

exports.searchPath = function *() {
    var body = this.request.body;
    console.log(body);
    var pageNum = body.pageNum || 1, pageSize = body.pageSize || 99;
    var users = yield DBC.user.find({}).skip((pageNum - 1) * pageSize).limit(pageSize).lean();
    var totalCount = yield DBC.user.count();
    convertShowInfo(users);
    console.log(users);
    console.log(totalCount / pageSize);
    return this.body = {
        status: 'success',
        datas: users,
        pager: {
            totalCount: totalCount,
            pageSize: pageSize,
            pageNum: pageNum
        }
    }
};


function convertShowInfo(arr) {
    arr.forEach(ele => {
        ele.province = infoMap.province[ele.province];
        ele.position = infoMap.position[ele.position];
        ele.industry = infoMap.industry[ele.industry];
        ele.education = infoMap.education[ele.education];
        ele.salary = infoMap.salary[ele.salary];
    });
}