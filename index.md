<html>
<head>
<style>

.center {
  margin: auto;
  width: 10%;
  padding: 10px;
} 

.btn {
  position: relative;

  display: block;
  margin: 30px auto;
  padding: 0;

  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 8px;
  box-shadow: 0 15px 10px rgba(0, 50, 50, .6);
  
  background-color: #2980B9;
  color: #ecf0f1;
  
  transition: background-color .3s;
}

.btn:hover, .btn:focus {
  background-color: #27ae60;
}

.btn > * {
  position: relative;
}

.btn span {
  display: block;
  padding: 12px 24px;
}

.btn:before {
  content: "";
  
  position: absolute;
  top: 50%;
  left: 50%;
  
  display: block;
  width: 0;
  padding-top: 0;
    
  border-radius: 100%;
  
  background-color: rgba(236, 240, 241, .3);
  
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.btn:active:before {
  width: 120%;
  padding-top: 120%;
  
  transition: width .2s ease-out, padding-top .2s ease-out;
}

/* Styles, not important */
*, *:before, *:after {
  box-sizing: border-box;
}

</style>
<title>Fauzaan Qureshi | Home</title>
</head>
<body style="background-color: #1A1A1A;">
<div class="center">
<a href="static/pdf/54476c16-cb01-11ed-bcc1-a32c92a65e1c.pdf" 
   class="btn"
   style="text-align: center;text-decoration: none; padding: 1.2rem;"
   target="_blank">Resume</a>
   
<a href="static/notes/" 
   class="btn"
   style="text-align: center;text-decoration: none; padding: 1.2rem;"
   target="_blank">Notes</a>
   
<a href="static/kop/" 
   class="btn"
   style="text-align: center;text-decoration: none; padding: 1.2rem;"
   target="_blank">KOP</a>
</div>
</body>
</html>
