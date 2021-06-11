True_expression = new Object();

units = new Object(10);
units[1] = "one";
units[2] = "two";
units[3] = "three";
units[4] = "four";
units[5] = "five";
units[6] = "six";
units[7] = "seven";
units[8] = "eight";
units[9] = "nine";

teens = new Object(10);
teens[0] = "ten";
teens[1] = "eleven";
teens[2] = "twelve";
teens[3] = "thirteen";
teens[4] = "fourteen";
teens[5] = "fifteen";
teens[6] = "sixteen";
teens[7] = "seventeen";
teens[8] = "eighteen";
teens[9] = "nineteen";

tens = new Object(10);
tens[2] = "twenty";
tens[3] = "thirty";
tens[4] = "forty";
tens[5] = "fifty";
tens[6] = "sixty";
tens[7] = "seventy";
tens[8] = "eighty";
tens[9] = "ninety";

function init() {
    True_expression = new expression("");
}

function compute() {
    document.bignumbers.result.value = " ";
    setTimeout("true_order()", 100);
}

function true_order() {
    True_expression.lighten();
    delete True_expression;
    textInput = document.bignumbers.inputtext.value;
    True_expression = new expression(textInput);
}

function expression(txt) {
    this.m_init_expression = " " + txt;
    this.m_len_init_expression = this.m_init_expression.length;
    this.m_numberized_expression = "";
    this.m_char_array = new Object(this.m_len_init_expression);
    this.m_count = 0;
    this.m_internal_alarm = 0;
    this.m_number = 0;
    this.m_commatized_expression = " ";
    this.m_len_numb_expr = 0;
    for (x = 1;
        (x < (this.m_len_init_expression)) && (this.m_internal_alarm == 0); x++) {
        auxch = this.m_init_expression.charAt(x);
        if ((auxch == "1") || (auxch == "2") || (auxch == "3") ||
            (auxch == "4") || (auxch == "5") || (auxch == "6") ||
            (auxch == "7") || (auxch == "8") || (auxch == "9") || (auxch == "0")) {
            this.m_char_array[this.m_count] = auxch;
            this.m_count++;
        } else {
            if (((((auxch != ",") && (auxch != "1")) && ((auxch != "2") && (auxch != "3"))) &&
                    (((auxch != "4") && (auxch != "5")) && ((auxch != "6") && (auxch != "7")))) &&
                (((auxch != "8") && (auxch != "9")) && ((auxch != "0") && (auxch != " ")))) {
                this.m_internal_alarm = 1;
            }
        }
    }
    var alarmfloat = 0;
    for (x = 0; x < this.m_count; x++) {
        if ((x == alarmfloat) && (this.m_char_array[x] == "0")) {
            alarmfloat++;
        } else {
            this.m_numberized_expression = this.m_numberized_expression + "" + this.m_char_array[x];
        }
    }
    this.m_number = parseInt(this.m_numberized_expression);
    this.m_commatized_expression = " ";
    for (x = 0; x < this.m_count - alarmfloat; x++) {
        if (((this.m_count - x - alarmfloat) % 3 == 0) && (x != 0)) {
            this.m_commatized_expression += ",";
        }
        this.m_commatized_expression = this.m_commatized_expression + "" + this.m_numberized_expression.charAt(x);
    }
    document.bignumbers.inputtext.value = this.m_commatized_expression;



    this.m_len_numb_expr = this.m_numberized_expression.length;
    document.bignumbers.result.value = "";
    for (xnum = 0; xnum < this.m_len_numb_expr; xnum++) {
        if ((this.m_len_numb_expr - xnum) % 3 == 0) {
            if (this.m_numberized_expression.charAt(xnum) != "0") {
                var numlloc = this.m_numberized_expression.charAt(xnum);
                var lloc = parseInt(numlloc);
                document.bignumbers.result.value += units[lloc] + " hundred ";
            }
        }
        if (this.m_numberized_expression.charAt(xnum) != "1") {
            if ((this.m_len_numb_expr - xnum) % 3 == 2) {
                if (this.m_numberized_expression.charAt(xnum) != "0") {
                    var numlloc = this.m_numberized_expression.charAt(xnum);
                    var lloc = parseInt(numlloc);
                    document.bignumbers.result.value += tens[lloc];
                }
            }
            if ((this.m_len_numb_expr - xnum) % 3 == 1) {
                if (this.m_numberized_expression.charAt(xnum) != "0") {
                    var numlloc = this.m_numberized_expression.charAt(xnum);
                    var lloc = parseInt(numlloc);
                    if (xnum > 0) {
                        if (this.m_numberized_expression.charAt(xnum - 1) == "0") {
                            document.bignumbers.result.value += units[lloc] + " ";
                            writemillions(this.m_len_numb_expr - xnum, this);
                        } else {
                            if (this.m_numberized_expression.charAt(xnum - 1) != "1") {
                                document.bignumbers.result.value += "-" + units[lloc] + " ";
                                writemillions(this.m_len_numb_expr - xnum, this);
                            }
                        }
                    } else {
                        document.bignumbers.result.value += units[lloc] + " ";
                        writemillions(this.m_len_numb_expr - xnum, this);
                    }
                } else {
                    if (xnum >= 2) {
                        if (this.m_numberized_expression.charAt(xnum - 1) != "1") {
                            if ((this.m_numberized_expression.charAt(xnum - 1) != "0") || (this.m_numberized_expression.charAt(xnum - 2) != "0")) {
                                document.bignumbers.result.value += " ";
                                writemillions(this.m_len_numb_expr - xnum, this);
                            }
                        }
                    } else {
                        if (xnum >= 1) {
                            if (this.m_numberized_expression.charAt(xnum - 1) != "1") {
                                if (this.m_numberized_expression.charAt(xnum - 1) != "0") {
                                    document.bignumbers.result.value += " ";
                                    writemillions(this.m_len_numb_expr - xnum, this);
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if ((this.m_len_numb_expr - xnum) % 3 == 2) {
                var numlloc = this.m_numberized_expression.charAt(xnum + 1);
                var lloc = parseInt(numlloc);
                document.bignumbers.result.value += teens[lloc] + " ";
                if ((this.m_len_numb_expr - (xnum + 1)) >= 3) {
                    writemillions(this.m_len_numb_expr - (xnum + 1), this);
                }
            }
            if ((this.m_len_numb_expr - xnum) % 3 == 1) {
                if (xnum > 0) {
                    if (this.m_numberized_expression.charAt(xnum - 1) == "0") {
                        document.bignumbers.result.value += units[1] + " ";
                        writemillions(this.m_len_numb_expr - xnum, this);
                    } else {
                        if (this.m_numberized_expression.charAt(xnum - 1) != "1") {
                            document.bignumbers.result.value += "-" + units[1] + " ";
                            writemillions(this.m_len_numb_expr - xnum, this);
                        }
                    }
                } else {
                    document.bignumbers.result.value += units[1] + " ";
                    writemillions(this.m_len_numb_expr - xnum, this);
                }
            }
        }
    }
    this.lighten = lgthn

    function lgthn() {
        this.m_init_expression = "";
        this.m_numberized_expression = "";
        this.m_char_array = new Object();
        this.m_commatized_expression = " ";
    }
}

function rounding(xchars, cells) {
    returning_expr = "";
    if (cells > 12) {
        twochars = xchars.charAt(0) + xchars.charAt(1);
        num_twochars = Math.round(parseInt(twochars) / 10);
        if (num_twochars == 10) {
            returning_expr = " 1 followed by: " + minicommatized(cells + 1);
        } else {
            returning_expr = num_twochars + " followed by: " + minicommatized(cells);
        }
        returning_expr += " zeros";
    } else {
        returning_expr = commatized(xchars, cells);
    }

    return returning_expr;
}


function minicommatized(number) {
    aux_number = number;
    if (number > 999) {
        aux_number = Math.floor(number / 1000) + "," + (number - Math.floor(number / 1000) * 1000);
    }
    return aux_number;
}

function commatized(char_number, cells) {
    aux_number = 0;
    if (cells > 1) {
        twochars = char_number.charAt(0) + char_number.charAt(1);
        num_twochars = Math.round(parseInt(twochars) / 10);
        if (num_twochars == 10) {
            aux_number = "1";
            for (x = 1; x <= (cells + 1); x++) {
                if ((cells + 1 - x + 1) % 3 == 0) {
                    aux_number += ",";
                }
                aux_number += "0";
            }
        } else {
            aux_number = num_twochars;
            for (x = 1; x <= cells; x++) {
                if ((cells - x + 1) % 3 == 0) {
                    aux_number += ",";
                }
                aux_number += "0";
            }
        }
    } else {
        aux_number = char_number;
    }
    return aux_number;
}

function writemillions(x) {
    if (x == 1) { document.bignumbers.result.value += ""; }
    if (x == 4) { document.bignumbers.result.value += "thousand, \n"; }
    if (x == 7) { document.bignumbers.result.value += "million, \n"; }
    if (x == 10) { document.bignumbers.result.value += "billion, \n"; }
    if (x == 13) { document.bignumbers.result.value += "trillion, \n"; }
    if (x == 16) { document.bignumbers.result.value += "quadrillion, \n"; }
    if (x == 19) { document.bignumbers.result.value += "quintillion, \n"; }
    if (x == 22) { document.bignumbers.result.value += "sextillion, \n"; }
    if (x == 25) { document.bignumbers.result.value += "septillion, \n"; }
    if (x == 28) { document.bignumbers.result.value += "octillion, \n"; }
    if (x == 31) { document.bignumbers.result.value += "nonillion, \n"; }
    if (x == 34) { document.bignumbers.result.value += "decillion, \n"; }
    if (x == 37) { document.bignumbers.result.value += "undecillion, \n"; }
    if (x == 40) { document.bignumbers.result.value += "duodecillion, \n"; }
    if (x == 43) { document.bignumbers.result.value += "tredecillion, \n"; }
    if (x == 46) { document.bignumbers.result.value += "quattuordecillion, \n"; }
    if (x == 49) { document.bignumbers.result.value += "quindecillion, \n"; }
    if (x == 52) { document.bignumbers.result.value += "sexdecillion, \n"; }
    if (x == 55) { document.bignumbers.result.value += "septendecillion, \n"; }
    if (x == 58) { document.bignumbers.result.value += "octodecillion, \n"; }
    if (x == 61) { document.bignumbers.result.value += "novemdecillion, \n"; }
    if (x == 64) { document.bignumbers.result.value += "vigintillion, \n"; }
    if (x == 67) { document.bignumbers.result.value += "unvigintillion, \n"; }
    if (x == 70) { document.bignumbers.result.value += "duovigintillion, \n"; }
    if (x == 73) { document.bignumbers.result.value += "trevigintillion, \n"; }
    if (x == 76) { document.bignumbers.result.value += "quattuorvigintillion, \n"; }
    if (x == 79) { document.bignumbers.result.value += "quinvigintillion, \n"; }
    if (x == 82) { document.bignumbers.result.value += "sexvigintillion, \n"; }
    if (x == 85) { document.bignumbers.result.value += "septenvigintillion, \n"; }
    if (x == 88) { document.bignumbers.result.value += "octovigintillion, \n"; }
    if (x == 91) { document.bignumbers.result.value += "novemvigintillion, \n"; }
    if (x == 94) { document.bignumbers.result.value += "trigintillion, \n"; }
    if (x == 97) { document.bignumbers.result.value += "untrigintillion, \n"; }
    if (x == 100) { document.bignumbers.result.value += "duotrigintillion, \n"; }
    if (x == 103) { document.bignumbers.result.value += "tretrigintillion, \n"; }
    if (x == 106) { document.bignumbers.result.value += "quattuortrigintillion, \n"; }
    if (x == 109) { document.bignumbers.result.value += "quintrigintillion, \n"; }
    if (x == 112) { document.bignumbers.result.value += "sextrigintillion, \n"; }
    if (x == 115) { document.bignumbers.result.value += "septentrigintillion, \n"; }
    if (x == 118) { document.bignumbers.result.value += "octotrigintillion, \n"; }
    if (x == 121) { document.bignumbers.result.value += "novemtrigintillion, \n"; }
    if (x == 124) { document.bignumbers.result.value += "quadragintillion, \n"; }
    if (x == 127) { document.bignumbers.result.value += "unquadragintillion, \n"; }
    if (x == 130) { document.bignumbers.result.value += "duoquadragintillion, \n"; }
    if (x == 133) { document.bignumbers.result.value += "trequadragintillion, \n"; }
    if (x == 136) { document.bignumbers.result.value += "quattuorquadragintillion, \n"; }
    if (x == 139) { document.bignumbers.result.value += "quinquadragintillion, \n"; }
    if (x == 142) { document.bignumbers.result.value += "sexquadragintillion, \n"; }
    if (x == 145) { document.bignumbers.result.value += "septenquadragintillion, \n"; }
    if (x == 148) { document.bignumbers.result.value += "octoquadragintillion, \n"; }
    if (x == 151) { document.bignumbers.result.value += "novemquadragintillion, \n"; }
    if (x == 154) { document.bignumbers.result.value += "quinquagintillion, \n"; }
    if (x == 157) { document.bignumbers.result.value += "unquinquagintillion, \n"; }
    if (x == 160) { document.bignumbers.result.value += "duoquinquagintillion, \n"; }
    if (x == 163) { document.bignumbers.result.value += "trequinquagintillion, \n"; }
    if (x == 166) { document.bignumbers.result.value += "quattuorquinquagintillion, \n"; }
    if (x == 169) { document.bignumbers.result.value += "quinquinquagintillion, \n"; }
    if (x == 172) { document.bignumbers.result.value += "sexquinquagintillion, \n"; }
    if (x == 175) { document.bignumbers.result.value += "septenquinquagintillion, \n"; }
    if (x == 178) { document.bignumbers.result.value += "octoquinquagintillion, \n"; }
    if (x == 181) { document.bignumbers.result.value += "novemquinquagintillion, \n"; }
    if (x == 184) { document.bignumbers.result.value += "sexagintillion, \n"; }
    if (x == 187) { document.bignumbers.result.value += "unsexagintillion, \n"; }
    if (x == 190) { document.bignumbers.result.value += "duosexagintillion, \n"; }
    if (x == 193) { document.bignumbers.result.value += "tresexagintillion, \n"; }
    if (x == 196) { document.bignumbers.result.value += "quattuorsexagintillion, \n"; }
    if (x == 199) { document.bignumbers.result.value += "quinsexagintillion, \n"; }
    if (x == 202) { document.bignumbers.result.value += "sexsexagintillion, \n"; }
    if (x == 205) { document.bignumbers.result.value += "septsexagintillion, \n"; }
    if (x == 208) { document.bignumbers.result.value += "octosexagintillion, \n"; }
    if (x == 211) { document.bignumbers.result.value += "novemsexagintillion, \n"; }
    if (x == 214) { document.bignumbers.result.value += "septuagintillion, \n"; }
    if (x == 217) { document.bignumbers.result.value += "unseptuagintillion, \n"; }
    if (x == 220) { document.bignumbers.result.value += "duoseptuagintillion, \n"; }
    if (x == 223) { document.bignumbers.result.value += "treseptuagintillion, \n"; }
    if (x == 226) { document.bignumbers.result.value += "quattuorseptuagintillion, \n"; }
    if (x == 229) { document.bignumbers.result.value += "quinseptuagintillion, \n"; }
    if (x == 232) { document.bignumbers.result.value += "sexseptuagintillion, \n"; }
    if (x == 235) { document.bignumbers.result.value += "septseptuagintillion, \n"; }
    if (x == 238) { document.bignumbers.result.value += "octoseptuagintillion, \n"; }
    if (x == 241) { document.bignumbers.result.value += "novemseptuagintillion, \n"; }
    if (x == 244) { document.bignumbers.result.value += "octogintillion, \n"; }
    if (x == 247) { document.bignumbers.result.value += "unoctogintillion, \n"; }
    if (x == 250) { document.bignumbers.result.value += "duooctogintillion, \n"; }
    if (x == 253) { document.bignumbers.result.value += "treoctogintillion, \n"; }
    if (x == 256) { document.bignumbers.result.value += "quattuoroctogintillion, \n"; }
    if (x == 259) { document.bignumbers.result.value += "quinoctogintillion, \n"; }
    if (x == 262) { document.bignumbers.result.value += "sexoctogintillion, \n"; }
    if (x == 265) { document.bignumbers.result.value += "septoctogintillion, \n"; }
    if (x == 268) { document.bignumbers.result.value += "octooctogintillion, \n"; }
    if (x == 271) { document.bignumbers.result.value += "novemoctogintillion, \n"; }
    if (x == 274) { document.bignumbers.result.value += "nonagintillion, \n"; }
    if (x == 277) { document.bignumbers.result.value += "unnonagintillion, \n"; }
    if (x == 280) { document.bignumbers.result.value += "duononagintillion, \n"; }
    if (x == 283) { document.bignumbers.result.value += "trenonagintillion, \n"; }
    if (x == 286) { document.bignumbers.result.value += "quattuornonagintillion, \n"; }
    if (x == 289) { document.bignumbers.result.value += "quinnonagintillion, \n"; }
    if (x == 292) { document.bignumbers.result.value += "sexnonagintillion, \n"; }
    if (x == 295) { document.bignumbers.result.value += "septnonagintillion, \n"; }
    if (x == 298) { document.bignumbers.result.value += "octononagintillion, \n"; }
    if (x == 301) { document.bignumbers.result.value += "novemnonagintillion, \n"; }
    if (x == 304) { document.bignumbers.result.value += "centillion, \n"; }
    if (x == 307) { document.bignumbers.result.value += "uncentillion, \n"; }

    if ((x >= 310) && ((x - 1) % 3 == 0)) {
        document.bignumbers.result.value += ((x - 1) / 3) - 1 + "-illion (too big!!), \n";
    }
}