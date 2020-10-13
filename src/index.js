module.exports = function check(str, bracketsConfig) {
    let arrConfig = [];
    for (i = 0; i < bracketsConfig.length; i++) {
        arrConfig = arrConfig.concat(bracketsConfig[i]);
    }

    let closeBr = [];

    for (j = 0; j < str.length; j++) {
        let last = closeBr[closeBr.length - 1];

        if (
            arrConfig.indexOf(str[j]) % 2 == 0 &&
            str[j] == arrConfig[arrConfig.indexOf(str[j]) + 1]
        ) {
            if (last !== str[j]) {
                closeBr.push(str[j]);
            } else if (last == str[j]) {
                closeBr.pop();
            }
        } else if (arrConfig.indexOf(str[j]) % 2 == 0) {
            closeBr.push(str[j]);
        }

        if (arrConfig.indexOf(str[j]) % 2 !== 0) {
            if (arrConfig.indexOf(last) == arrConfig.indexOf(str[j]) - 1) {
                closeBr.pop();
            } else {
                return false;
            }
        }
    }

    if (closeBr.length == 0) {
        return true;
    } else return false;
};
