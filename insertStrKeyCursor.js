// I asuume the elem is a 'Input' or 'TextArea' tag

/*
* @param - DOMelement // input or textarea tag
* @return - Integer // position of cursor
*/
function selectCursorPosition(elem){
  // Determine if the cursor is dragged
  if(elem.selectionStart===elem.selectionEnd){
    return Number(elem.selectionStart);
  }
}

/*
* @param 
*   - str : String  // String value you want detach
*   - pos : Integer // Position where you want detach
* @return - Array<String>[2] // String detached with Position value
*/
function selectDetachedString(str, pos){
  var result = new Array();
  
  result[0] = str.substring(0,pos);
  result[1] = str.substring(pos);
  
  return result;
}

/*
* @param
*   - strArr : Array<String>[2] // String detached with Position value
*   - newStr : String // String value you want to insert
*/
function insertString(strArr, newStr){
  return String(strArr[0]) + String(newStr) + String(strArr[1]);
}
