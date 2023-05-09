// 给你一份航线列表 tickets ，其中 tickets[i] = [fromi, toi] 表示飞机出发和降落的机场地点。请你对该行程进行重新规划排序。

// 所有这些机票都属于一个从 JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。如果存在多种有效的行程，请你按字典排序返回最小的行程组合。

// 例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序更靠前。
// 假定所有机票至少存在一种合理的行程。且所有的机票 必须都用一次 且 只能用一次。

//  

// 示例 1：


// 输入：tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// 输出：["JFK","MUC","LHR","SFO","SJC"]
// 示例 2：


// 输入：tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// 输出：["JFK","ATL","JFK","SFO","ATL","SFO"]
// 解释：另一种有效的行程是 ["JFK","SFO","ATL","JFK","ATL","SFO"] ，但是它字典排序更大更靠后。
//  

// 提示：

// 1 <= tickets.length <= 300
// tickets[i].length == 2
// fromi.length == 3
// toi.length == 3
// fromi 和 toi 由大写英文字母组成
// fromi != toi
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    let res = ['JFK'];
    let map = {};//结构为{出发机场：[到达机场]}

    for (const tickt of tickets) {
        const [from, to] = tickt;
        if (!map[from]) map[from] = [];
        map[from].push(to);
    }
    for (const city in map) {
        map[city].sort();//ascii码排序
    }

    function backTracking() {
        if (res.length === tickets.length + 1) return true;
        let target = map[res[res.length - 1]];
        if (!target || !target.length) return false;
        for (let i = 0; i < target.length; i++) {
            let city = target[i];
            target.splice(i, 1);
            res.push(city);
            if (backTracking()) return true;
            res.pop();
            target.splice(i, 0, city);
        }
    }

    backTracking();
    return res;
};