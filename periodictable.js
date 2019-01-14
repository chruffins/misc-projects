var elements = ['H', 'He',
                'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 
                'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 
                'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr',
                'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe',]
var eMolMass = [1.008, 4.000, 6.94, 9.01, 10.81, 12.01, 14.01, 16.00, 19, 20.18, 22.99, 24.3, 26.98, 28.09, 30.97, 32.06,
                35.45, 39.95, 39.10, 40.08, 44.96, 47.9, 50.94, 52, 54.94, 55.85, 58.93, 58.69, 63.55, 65.39, 69.72, 72.59, 74.92,
                78.96, 79.90, 83.8, 85.47, 87.62, 88.91, 91.22, 92.91, 95.94, 98, 101.1, 102.91, 106.42, 107.87, 112.41, 114.82, 118.71,
                121.75, 127.60, 126.91, 131.29]

// breaking down the strings i guess?

function strBreak() {
    var strChem = document.getElementById('chem').value;
    var pOutput = document.getElementById('output');
    var pos = 0;
    var sumMolMass = 0;
    console.log("yeah boii");
    console.log(strChem.length);
    while (pos < strChem.length) {
        var element; // table position
        var num;
        element = linsearch(strChem.substr(pos, 2), elements);
        console.log("Attempted 2 letter element: " + strChem.substr(pos,2))
        if (element == -1) { // not two letters? try one
            console.log("Attempted 1 letter element: " + strChem.substr(pos,1))
            element = linsearch(strChem.substr(pos, 1), elements);
            if (element == -1) { // not one letter? uh oh
                console.log("Idot");
                sumMolMass = "Not valid elements"; // break the loop, call you dumb
                break;
            }
        }
        if (elements[element].length == 2) { // this dumb if test just moves the position
            pos = pos + 2;
        } else if (elements[element].length == 1) {
            pos = pos + 1;
        }
        console.log("position is now " + String(pos));
        console.log(element+1);
        num = getNumberfromString(strChem, pos);
        console.log(num);
        pos = pos + Math.ceil(Math.log10(num));
        sumMolMass = sumMolMass + (eMolMass[element] * num);
        console.log("The molar mass is " + String(sumMolMass));
        console.log(pos);
    }
    console.log("Done!");
    pOutput.innerHTML = "The molar mass is " + String(sumMolMass);    
}

function linsearch(str, tab) { // linear search
    for (var i = 0; i < tab.length; ++i) {
        if (str === tab[i]) {
            return i; // return the element's position
        }
    }
    return -1; // if nothing's already return then return false
}

function getNumberfromString(str, spos) { 
    var runString = "";
    var pos = spos;
    console.log(str.substr(pos,1));
    if (isNaN(str.substr(pos,1))) return 1;
    if (Number(str.substr(pos,1)) == "") return 1;
    while (!isNaN(str.substr(pos,1))) {
        if (str.substr(pos,1) == "") break;
        runString = runString + str.substr(pos,1);
        console.log("string is now " + runString);
        pos = pos + 1;
    }
    return Number(runString)
}   