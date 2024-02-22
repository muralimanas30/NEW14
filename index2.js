const login_frame = document.getElementById("login-frame");
const signup_frame = document.getElementById("signup-frame");
const ques_frame = document.getElementById("ques-frame");
const switch_button = document.getElementById("b123");
const body = document.getElementById("jjj");
const div_for_image = document.getElementById("forImage");
const icon = document.getElementById("icon");
const ques_text_context = document.getElementById("ques_text_content");
switch_button.onclick = hello;
let switch_button_click_count=1;

if(screen.width<=430){
    login_frame.style.scale=0.85;
    signup_frame.style.scale=0.85;
    signup_frame.style.display="none";
    div_for_image.style.display="none";
    icon.style.display="none";
    b123.style.scale=1.2;

}






function hello(){

    switch_button_click_count+=1;
    signup_frame.style.display="inline";
    if(screen.width>430){



        login_frame.style.scale=1;
        signup_frame.style.scale=1;
        div_for_image.style.display="block";
        icon.style.display="block";
            if(switch_button_click_count%2==0)
            {
                ques_frame.style.animation =  "login-to-signup ease-in-out 0.6s forwards 1";
                login_frame.style.animation= "login-frame-animation1 0.6s ease-in 1 forwards"
                signup_frame.style.animation="register-frame-animation1 0.6s 1 forwards ease-out";
                switch_button.textContent = "LOGIN";
                body.style.backgroundPosition="0% 100%";
                ques_text_context.textContent="Welcome back soldier! Good to have you back";


            }
            else{
                login_frame.style.animation= "login-frame-animation2 0.6s ease-out 1 forwards"
                signup_frame.style.animation="register-frame-animation2 0.6s 1 forwards ease-out";
                switch_button.textContent = "SIGN UP";
                ques_frame.style.animation =  "signup-to-login ease-in-out 0.6s forwards 1";
                body.style.backgroundPosition="70% 100%";
                ques_text_context.textContent="New Here? Join the community by Signing up";
            }
    }
    else if(screen.width<380){
        console.log("START FOR 380");
    
        
            if(switch_button_click_count%2==0)
            {
                ques_frame.style.animation =  "login-to-signup-mobile ease-in-out 0.6s forwards 1";
                login_frame.style.animation= "login-frame-animation-mobile-1 0.6s ease-in 1 forwards";
                signup_frame.style.animation="register-frame-animation-mobile-1 0.6s 1 forwards ease-out";
                switch_button.textContent = "LOGIN";
                body.style.backgroundPosition="0% 100%";
                ques_text_context.textContent="Welcome back soldier! Good to have you back";
                ques_frame.style.scale=1;
                login_frame.style.scale=0.7;
                signup_frame.style.scale=0.7;
                switch_button.style.scale=0.8;

            }
             else{
                 login_frame.style.animation= "login-frame-animation-mobile-2 0.6s ease-out 1 forwards"
                 signup_frame.style.animation="register-frame-animation-mobile-2 0.6s 1 forwards ease-out";
                 switch_button.textContent = "SIGN UP";
                 ques_frame.style.animation =  "signup-to-login-mobile ease-in-out 0.6s forwards 1";

                 body.style.backgroundPosition="70% 100%";
                 ques_text_context.textContent="New Here? Join the community by Signing up";
                 ques_frame.style.scale=1;
                 login_frame.style.scale=0.7;
                 switch_button.style.scale=0.85;
                 signup_frame.style.scale=0.7;
                }
    
     
    
    }
    else{
        if(switch_button_click_count%2==0)
            {
                ques_frame.style.animation =  "login-to-signup-mobile ease-in-out 0.6s forwards 1";
                login_frame.style.animation= "login-frame-animation-mobile-1 0.6s ease-in 1 forwards";
                signup_frame.style.animation="register-frame-animation-mobile-1 0.6s 1 forwards ease-out";
                switch_button.textContent = "LOGIN";
                body.style.backgroundPosition="0% 100%";
                ques_text_context.textContent="Welcome back soldier! Good to have you back";


            }
             else{
                 login_frame.style.animation= "login-frame-animation-mobile-2 0.6s ease-out 1 forwards"
                 signup_frame.style.animation="register-frame-animation-mobile-2 0.6s 1 forwards ease-out";
                 switch_button.textContent = "SIGN UP";
                 ques_frame.style.animation =  "signup-to-login-mobile ease-in-out 0.6s forwards 1";

                 body.style.backgroundPosition="70% 100%";
                 ques_text_context.textContent="New Here? Join the community by Signing up";
                }
    }
    

}