function setCookie(cname, cvalue, cdays) {
    const d = new Date();
    d.setTime(d.getTime() + (cdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const defaultPreferences = {
    bg: "white",
    text: "black",
    post: "lightgray"
};

function applyPreferences() {
    let bg = getCookie("bgcolor") || defaultPreferences.bg;
    let text = getCookie("textcolor") || defaultPreferences.text;
    let post = getCookie("postcolor") || defaultPreferences.post;

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;

    let posts = document.querySelectorAll('.post');
    posts.forEach(post => { 
        post.style.backgroundColor = postColor; 
    });
}

function savePreferences(event) {
    event.preventDefault;

    
}