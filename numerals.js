function convertToRoman(num) {
    var numerals = "";
    while (num / 1000 >= 1) {
        numerals += "M";
        num -= 1000;
    }
    while (num / 900 >= 1) {
        numerals += "CM";
        num -= 900;
    }
    while (num / 500 >= 1) {
        numerals += "D";
        num -= 500;
    }
    while (num / 400 >= 1) {
        numerals += "CD";
        num -= 400;
    }
    while (num / 100 >= 1) {
        numerals += "C";
        num -= 100;
    }
    while (num / 90 >= 1) {
        numerals += "XC";
        num -= 90;
    }
    while (num / 50 >= 1) {
        numerals += "L";
        num -= 50;
    }
    while (num / 40 >= 1) {
        numerals += "XL";
        num -= 40;
    }
    while (num / 10 >= 1) {
        numerals += "X";
        num -= 10;
    }
    while (num / 9 == 1) {
        numerals += "IX";
        num -= 9;
    }
    while (num / 5 >= 1) {
        numerals += "V";
        num -= 5;
    }
    while (num / 4 == 1) {
        numerals += "IV";
        num -= 4;
    }

    while (num / 1 >= 1) {
        numerals += "I";
        num -= 1;
    }
    return numerals;
}


convertToRoman(3999);