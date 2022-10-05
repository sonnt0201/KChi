var string = [
  "Chuc idol som co nguoi thuong",
  "baby em nhu bong hoa ~.~",
  "nhung nguoi hai dau phai taaa",
  "em voi mang bao cau ca <3",
  "troi ve noi xa xa xa =.=",
  "em nhu bong hoa :<<",
  "nhung nguoi hai dau phai ta T_T",
  "em voi mang bao cau ca 🎶",
  "troi ve noi xa xa ~~~",
];
var i = 0;
function change(isForwards) {
  if (isForwards && i < string.length - 1) {
    i++;
  } else if (!isForwards && i > 0) {
    i--;
  } 
  document.getElementById("content").innerHTML = string[i];
  console.log(i);
}



