// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

export default class UtilityClass {

    static calcEndGradientColor(startColor, colordifference) {
        if (startColor.charAt(0) === '#') {
            startColor = startColor.substr(1);
        }
        let result = 0;
        let decStartColor = parseInt(startColor, 16);
        result = decStartColor - colordifference;
        result = (result > 16777215) ? 16777215 : result;
        result = (result < 0) ? 0 : result;
        let hexResult = result.toString(16);
        if (hexResult.length < 6) {
            let autocompleteSize = 6 - hexResult.length;
            for (let i = 0; i < autocompleteSize; i++) {
                hexResult = '0' + hexResult;
            }
        }
        hexResult = '#' + hexResult;
        return hexResult;
    }
}
