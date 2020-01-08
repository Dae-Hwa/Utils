// I asuume the elem is a 'Input' or 'TextArea' tag
/*
*  @Interface
*   - insert(elem, String) // put String here you want insert and elem you want insert string
*/
var InsertStrKeyCursor = (function(){
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
  * @return - String // concatenated String return
  */
  function concatString(strArr, newStr){
    return String(strArr[0]) + String(newStr) + String(strArr[1]);
  }

  /*
  * @param
  *   - elem : DomElement // input or textarea
  *   - str : String // put concatednated String here 
  *   - pos : Integer // position you want place the str
  */
  function insertString(elem, str, pos){
    elem.value = str;
    elem.focus();

    if(!!pos){
      elem.setSelectionRange(pos,pos);
    }
  }

  
  /*
  * @param
  *   - elem : DomElement // put concatednated String here 
  *   - newStr : String // input or textarea
  */
  function insert(elem, newStr){
    var positionNum,
        detachedString,
        resultString;

    positionNum = selectCursorPosition(elem);
    detachedString = selectDetachedString(elem.value, positionNum);
    resultString = concatString(detachedString, newStr);

    insertString(elem, resultString, positionNum);
  }
  
  return({
    insert : insert,
  })
}())

