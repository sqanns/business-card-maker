// JavaScript Document
/*jshint strict: false */
/*jshint esversion: 6 */

import DefaultFirstPatternParams from './DefaultFirstPatternParams.js';
import DefaultSecondPatternParams from './DefaultSecondPatternParams.js';

export default class Params {

    constructor(build) {
        //style
        this.firstBackgroundColor = build.firstBackgroundColor;
        this.secondBackgroundColor = build.secondBackgroundColor;
        this.thirdBackgroundColor = build.thirdBackgroundColor;
        this.fourthBackgroundColor = build.fourthBackgroundColor;
        this.font = build.font;
        this.fontColorCompanyName = build.fontColorCompanyName;
        this.fontColorName = build.fontColorName;
        this.fontColorPosition = build.fontColorPosition;
        this.fontColorContactData = build.fontColorContactData;
        this.fontSizeCompanyName = build.fontSizeCompanyName;
        this.fontSizeName = build.fontSizeName;
        this.fontSizeContactData = build.fontSizeContactData;
        this.fontSizePosition = build.fontSizePosition;

        //dataText
        this.firstLineCompanyName = build.firstLineCompanyName;
        this.secondLineCompanyName = build.secondLineCompanyName;
        this.name = build.name;
        this.surname = build.surname;
        this.position = build.position;
        this.mail = build.mail;
        this.localisation = build.localisation;
        this.phoneNumber = build.phoneNumber;
    }

    static get Builder() {
        class Builder {
            constructor() {
            }

            setFirstBackgroundColor(color) {
                this.firstBackgroundColor = color;
                return this;
            }
            setSecondBackgroundColor(color) {
                this.secondBackgroundColor = color;
                return this;
            }
            setThirdBackgroundColor(color) {
                this.thirdBackgroundColor = color;
                return this;
            }
            setFourthBackgroundColor(color) {
                this.fourthBackgroundColor = color;
                return this;
            }
            setFont(fontName) {
                this.font = fontName;
                return this;
            }
            setFontColorCompanyName(color) {
                this.fontColorCompanyName = color;
                return this;
            }
            setFontColorName(color) {
                this.fontColorName = color;
                return this;
            }
            setFontColorPosition(color) {
                this.fontColorPosition = color;
                return this;
            }
            setFontColorContactData(color) {
                this.fontColorContactData = color;
                return this;
            }
            setFontSizeCompanyName(size) {
                this.fontSizeCompanyName = size;
                return this;
            }
            setFontSizeName(size) {
                this.fontSizeName = size;
                return this;
            }
            setFontSizeContactData(size) {
                this.fontSizeContactData = size;
                return this;
            }
            setFontSizePosition(size) {
                this.fontSizePosition = size;
                return this;
            }
            setFirstLineCompanyName(name) {
                this.firstLineCompanyName = name;
                return this;
            }
            setSecondLineCompanyName(name) {
                this.secondLineCompanyName = name;
                return this;
            }
            setName(name) {
                this.name = name;
                return this;
            }
            setSurname(surname) {
                this.surname = surname;
                return this;
            }
            setPosition(position) {
                this.position = position;
                return this;
            }
            setMail(mail) {
                this.mail = mail;
                return this;
            }
            setLocalisation(localisation) {
                this.localisation = localisation;
                return this;
            }
            setPhoneNumber(number) {
                this.phoneNumber = number;
                return this;
            }
            default1() {
                this.firstBackgroundColor = DefaultFirstPatternParams.style.firstBackgroundColor;
                this.secondBackgroundColor = DefaultFirstPatternParams.style.secondBackgroundColor;
                this.thirdBackgroundColor = DefaultFirstPatternParams.style.thirdBackgroundColor;
                this.fourthBackgroundColor = DefaultFirstPatternParams.style.fourthBackgroundColor;
                this.font = DefaultFirstPatternParams.style.font;
                this.fontColorCompanyName = DefaultFirstPatternParams.style.fontColorCompanyName;
                this.fontColorName = DefaultFirstPatternParams.style.fontColorName;
                this.fontColorPosition = DefaultFirstPatternParams.style.fontColorPosition;
                this.fontColorContactData = DefaultFirstPatternParams.style.fontColorContactData;
                this.fontSizeCompanyName = DefaultFirstPatternParams.style.fontSizeCompanyName;
                this.fontSizeName = DefaultFirstPatternParams.style.fontSizeName;
                this.fontSizeContactData = DefaultFirstPatternParams.style.fontSizeContactData;
                this.fontSizePosition = DefaultFirstPatternParams.style.fontSizePosition;

                //dataText
                this.firstLineCompanyName = DefaultFirstPatternParams.defaultText.firstLineCompanyName;
                this.secondLineCompanyName = DefaultFirstPatternParams.defaultText.secondLineCompanyName;
                this.name = DefaultFirstPatternParams.defaultText.name;
                this.surname = DefaultFirstPatternParams.defaultText.surname;
                this.position = DefaultFirstPatternParams.defaultText.position;
                this.mail = DefaultFirstPatternParams.defaultText.mail;
                this.localisation = DefaultFirstPatternParams.defaultText.localisation;
                this.phoneNumber = DefaultFirstPatternParams.defaultText.phoneNumber;

                return this;
            }
            default2() {
                this.firstBackgroundColor = DefaultSecondPatternParams.style.firstBackgroundColor;
                this.secondBackgroundColor = DefaultSecondPatternParams.style.secondBackgroundColor;
                this.thirdBackgroundColor = DefaultSecondPatternParams.style.thirdBackgroundColor;
                this.fourthBackgroundColor = DefaultSecondPatternParams.style.fourthBackgroundColor;
                this.font = DefaultSecondPatternParams.style.font;
                this.fontColorCompanyName = DefaultSecondPatternParams.style.fontColorCompanyName;
                this.fontColorName = DefaultSecondPatternParams.style.fontColorName;
                this.fontColorPosition = DefaultSecondPatternParams.style.fontColorPosition;
                this.fontColorContactData = DefaultSecondPatternParams.style.fontColorContactData;
                this.fontSizeCompanyName = DefaultSecondPatternParams.style.fontSizeCompanyName;
                this.fontSizeName = DefaultSecondPatternParams.style.fontSizeName;
                this.fontSizeContactData = DefaultSecondPatternParams.style.fontSizeContactData;
                this.fontSizePosition = DefaultSecondPatternParams.style.fontSizePosition;

                //dataText
                this.firstLineCompanyName = DefaultSecondPatternParams.defaultText.firstLineCompanyName;
                this.secondLineCompanyName = DefaultSecondPatternParams.defaultText.secondLineCompanyName;
                this.name = DefaultSecondPatternParams.defaultText.name;
                this.surname = DefaultSecondPatternParams.defaultText.surname;
                this.position = DefaultSecondPatternParams.defaultText.position;
                this.mail = DefaultSecondPatternParams.defaultText.mail;
                this.localisation = DefaultSecondPatternParams.defaultText.localisation;
                this.phoneNumber = DefaultSecondPatternParams.defaultText.phoneNumber;

                return this;
            }
            build() {
                return new Params(this);
            }
        }
        return Builder;
    }
 }

 let params = new Params.Builder()
            .setFirstBackgroundColor("white")
            .setSecondBackgroundColor("white")
            .setThirdBackgroundColor("white")
            .setFourthBackgroundColor("blue")
            .setFont("Diavlo")
            .setFontColorCompanyName("black")
            .setFontColorName("black")
            .setFontColorPosition("black")
            .setFontColorContactData("black")
            .setFontSizeCompanyName(12)
            .setFontSizeName(12)
            .setFontSizeContactData(12)
 			.setFontSizePosition(12)
            .setFirstLineCompanyName("Nazwa")
            .setSecondLineCompanyName("Firmy")
            .setName("Imie")
            .setSurname("Nazwisko")
            .setPosition("Stanowisko")
            .setMail("sqanns@gmail.com")
            .setLocalisation("miejscowość")
            .setPhoneNumber("000 000 000")
            .build();