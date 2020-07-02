import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = process.env.NODE_ENV === 'production'
    ? 'http://localhost:8080'
    : 'http://localhost:8080';

// 搜索股票代码
export const search = (code) => {
    return axios.get('/home/search?code=' + code).then(res => res.data);
};

// 获取排行榜
export const getRankList = () => {
    return axios.get('/home/rankList').then(res => res.data);
};

// 获取板块
export const getIndustry = (name) => {
    return axios.get('/industry?name=' + name).then(res => res.data);
};

// 获取股票
export const getStock = (sid) => {
    return axios.get('/stock?sid=' + sid).then(res => res.data);
};

// 预测
export const predict = (data) => {
    return axios.post('/predict', data).then(res => res.data);
};