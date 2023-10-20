function saveText() {
  let text = document.getElementById("comment").value;
  document.getElementById("textSave").innerText = text;
}


function textToLowerCase() {
  let comment = document.getElementById('comment').value;
  document.getElementById('comment').value = comment.toLowerCase();}

function texttoUpperCase() {
  let comment = document.getElementById('comment').value;
  document.getElementById('comment').value = comment.toUpperCase();
}

function updateCount() {
  var maxLength = 255;
  var textarea = document.getElementById('comment');
  var currentLength = textarea.value.length;
  var charsLeft = maxLength - currentLength;
  document.getElementById('counter').innerText = charsLeft >= 0 ? charsLeft : 0;

  if (charsLeft < 0) {
      textarea.value = textarea.value.substring(0, maxLength);
  }
}