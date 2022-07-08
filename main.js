console.log('Welcome to JavaScript revision 02');

//Arrays(special variable which can hold more than one value);
const flowers=["Rose","Lily","Daisy","Sunflower","Jasmine"];

//accessing some array element
var second_fav_flower=flowers[2];
console.log(second_fav_flower);

//length of array
var no_of_flowers=flowers.length;
console.log(no_of_flowers);

//print second last fav flower
var second_last_fav_flower=flowers[no_of_flowers-2];
console.log(second_last_fav_flower);




//print second last character ofast fav flower string
var last_fav_flower=flowers[no_of_flowers-1];
console.log(last_fav_flower);

var length_last_fav_flower=last_fav_flower.length;
console.log(length_last_fav_flower);

var sec_last_char_last_fav_flower=last_fav_flower.charAt(length_last_fav_flower-2);
console.log(sec_last_char_last_fav_flower);

//print 4th last character of third last fav flower string
var third_last_fav_flower = flowers[no_of_flowers - 3];
console.log(third_last_fav_flower);


var len_third_fav_flower=third_last_fav_flower.length;
console.log(len_third_fav_flower);

var fourth_last_character_third_last_flower=third_last_fav_flower.charAt(len_third_fav_flower-4);
console.log(fourth_last_character_third_last_flower);


//3rd last character of fourth last fav flower string
var fourth_last_fav_flower = flowers[no_of_flowers-4];
console.log(fourth_last_fav_flower);

var length_fourth_last_fav_flower = fourth_last_fav_flower.length;
console.log(length_fourth_last_fav_flower);

var third_last_char_fourth_last_flower=fourth_last_fav_flower.charAt(length_fourth_last_fav_flower-3);
console.log(third_last_char_fourth_last_flower);

//second last character of second last fav flower
var second_last_fav_flower=flowers[no_of_flowers-2];
console.log(second_last_fav_flower);

var len_sec_last_fav_flower = second_last_fav_flower.length;
console.log(len_sec_last_fav_flower);

var sec_last_char_sec_last_fav_flower = second_last_fav_flower.charAt(len_sec_last_fav_flower-2);
console.log(sec_last_char_sec_last_fav_flower);

//ARRAY operations
//Push i.e add element from last

flowers.push("Mogra");
console.log(flowers);

flowers.push("Lotus");
console.log(flowers);

//pop i.e remove last element
flowers.pop();
console.log(flowers);

flowers.pop();
console.log(flowers);

//unshift i.e add from front line
flowers.unshift("Marigold");
console.log(flowers);

flowers.unshift("Hibiscus");
console.log(flowers);

//shift i.e remove from front line
flowers.shift();
console.log(flowers);

flowers.shift();
console.log(flowers);

//splice i.e add and remove
flowers.splice(1,2,"Dandelion","Lavender");
console.log(flowers);

flowers.splice(1,3,"Tulip","Cherry Blossom");
console.log(flowers);