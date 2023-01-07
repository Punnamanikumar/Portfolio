function msgVerifiy() {
  const name = document.querySelector("#name").value;
  const numb = document.querySelector("#phonenumber").value;

  if (name == "") {
    alert("OOPS!! Name Should Not be Empty");
  }
  if (name != "" && numb.length != 10) {
    alert("OOPS!! Number Contains 10 digits");
  }
  console.log(numb.length);
}
