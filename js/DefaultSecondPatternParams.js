// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

import First from "./DefaultFirstPatternParams.js";

const DefaultSecondPatternParams = {

    style: {
        firstBackgroundColor: "#27272F",
        secondBackgroundColor: "#EC9C28",
        thirdBackgroundColor: "#FCF3ED",
        fourthBackgroundColor: "#FABB50",
        font: "Diavlo",
        fontColorCompanyName: "#FABB50",
        fontColorName: "#27272F",
        fontColorPosition: "#FABB50",
        fontColorContactData: "#27272F",
        fontSizeCompanyName: 24,
        fontSizeName: 26,
        fontSizePosition: 12,
        fontSizeContactData: 12
    },

    defaultText: First.defaultText

};

Object.freeze(DefaultSecondPatternParams);

export default DefaultSecondPatternParams;