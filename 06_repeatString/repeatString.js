const repeatString = function(string, num) {
    let text = "";
    if (num<0){
        return "ERROR";
    }
    for(let i = 0; i < num; i++){
        //concat the strings n number of times
        text = text.concat(string);
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
