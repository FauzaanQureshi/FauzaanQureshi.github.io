async function sha256(message) {
    // Encode the message as UTF-8
    const msgBuffer = new TextEncoder().encode(message);
    
    // Hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    
    // Convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    
    // Convert bytes to hex string
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    
    return hashHex;
} 

function base64UrlEncode(input) {
    // Encode the input string as Base64
    const base64 = btoa(input);

    // Replace characters to make it URL-safe
    const urlSafeBase64 = base64
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, ''); // Remove trailing '=' padding

    return urlSafeBase64;
}

async function decryptMessage(encryptedMessage, password) {
    var key = (await sha256(password)).slice(16, 48);
    var secret = new fernet.Secret(base64UrlEncode(key));
    
    var token = new fernet.Token({
      secret: secret,
      token: encryptedMessage,
      ttl:0 
    })

    return token.decode();
}

function loadJS(url, location=document.body, onload=()=>{}, onreadystatechange=()=>{}){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = onload;
    scriptTag.onreadystatechange = onreadystatechange;

    location.appendChild(scriptTag);
};

const password_div = `<div id="passwordDiv" style="text-align: center; background-color: #555; padding: 20px; border-radius: 8px; width: 25rem; margin-top: 12% !important; margin: auto;">
    <form onsubmit="submitPassword(event)">
    <label for="passwordInput" style="display: block; margin-bottom: 10px;color: red; font-weight: bold;"></label>
    <input type="password" id="passwordInput" style="width: 100%; padding: 10px; border: 1px solid #888; border-radius: 4px; background-color: #444; color: #fff; box-sizing: border-box;" placeholder="Password">
    <input type="submit" style="background-color: #007bff; color: #fff; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;" value="Submit"></input>
   </form>
</div>`;

loadJS(
    "https://cdn.jsdelivr.net/npm/fernet@0.3.2/fernetBrowser.min.js",
    document.body,
    ()=>{
        document.getElementById("root").innerHTML = password_div;
    }
)

function submitPassword(event){
    event.preventDefault();
    event.stopPropagation();
    try{
        password = document.getElementById("passwordInput").value;
        decryptMessage(window.logseq_db, password).then(db=>{
            window.logseq_db = db.replace(/\\\\/g, '\\').trim();
            document.getElementById("root").innerHTML = "";
            loadJS(
                "static/js/main.js", document.body, ()=>loadJS("static/js/code-editor.js")
            )
        }).catch(e=>{
            console.log("Incorrect Password");
            document.querySelector('label[for="passwordInput"]').textContent = "Incorrect Password";
        });
    } catch (err){
        alert("Incorrect Password");
        console.log(err);
    }
}
