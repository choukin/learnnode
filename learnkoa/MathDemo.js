//  alert(1/3);//弹出: 0.3333333333333333
// alert(0.09999999 + 0.00000001);//弹出: 0.09999999999999999
// alert(-0.09999999 - 0.00000001);//弹出: -0.09999999999999999
// alert(0.012345 * 0.000001);//弹出: 1.2344999999999999e-8
// alert(0.000001 / 0.0001);//弹出: 0.009999999999999998
//按正常计算的话，除第一行外(因为其本身就不能除尽)，其他都应该要得到精确的结果，从弹出的结果我们却发现不是我们想要的正确结果。
// 为了解决浮点数运算不准确的问题，在运算前我们把参加运算的数先升级(10的X的次方)到整数，等运算完后再降级(0.1的X的次方)。
// 现收集并整理贴于此，以备后用。
//加法函数
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}
//给Number类型增加一个add方法，，使用时直接用 .add 即可完成计算。
Number.prototype.add = function (arg) {
    return accAdd(arg, this);
};


//减法函数
function Subtr(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    //last modify by deeka
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

//给Number类型增加一个add方法，，使用时直接用 .sub 即可完成计算。
Number.prototype.sub = function (arg) {
    return Subtr(this, arg);
};


//乘法函数
function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
//给Number类型增加一个mul方法，使用时直接用 .mul 即可完成计算。
Number.prototype.mul = function (arg) {
    return accMul(arg, this);
};


//除法函数
function accDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
    }
    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
    }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
}
//给Number类型增加一个div方法，，使用时直接用 .div 即可完成计算。
Number.prototype.div = function (arg) {
    return accDiv(this, arg);
};

console.log( 0.09999999.add(0.00000001));