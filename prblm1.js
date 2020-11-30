    const signs = (a,b,c) => {
    let num = a + b + c;
    let splits = num.split(/(\d+)/);
    let sortes = splits.sort()
    var n1 = sortes.includes("+");
    var n2 = sortes.includes("-")
    if(n2 === true && n1 === true){
        alert("Both + and - sign")
    } else if(n2 === true && n1 === false) {
        alert("- sign")
    } else if(n2 === false && n1 === true){
        alert("+ plus sign")
    } else{
        alert("Welcome")
    }
}

signs("1", "2", "7")
signs("-1", "-2", "-7")
signs("+1", "-2", "7")
signs("+1", "2", "7")
