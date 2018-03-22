var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = "Triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
    console.log(dinosaurUpperCased);


var textAfter = text.replace('Velociraptor', dinosaur);
    console.log(textAfter);


var halfLength = (textAfter.length/2);
    console.log(halfLength);


var partOfText = textAfter.slice(0, halfLength);
    console.log(partOfText);