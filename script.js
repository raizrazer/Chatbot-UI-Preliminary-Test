window.addEventListener("load", () => {
    // Getting the Chatbot-whole Class and assigning display none class on begin after load.
    const chatBotWhole = document.getElementsByClassName('chatbot-whole')[0];
    chatBotWhole.classList.add('display-none');
    
    // Getting and Adding necessary actions to the button to open and close.
    const mainBtn = document.getElementsByTagName('button')[0];
    console.log(mainBtn)
    mainBtn.addEventListener("click",(e)=>{
        if(chatBotWhole.classList.contains('display-none')){
            chatBotWhole.classList.remove('display-none','animate__bounceIn');
            startAnimation(true)
        }
        else{
            chatBotWhole.classList.add('display-none')
            startAnimation(false)
        }        
        // console.log("Clicked!",e)
    })
// Getting the things to animate together
    // Getting the top-section class 
    const topSection = document.getElementsByClassName('top-section')[0];
    // Getting the inside-main-content
    const insideMainContent = document.getElementsByClassName('inside-main-content')[0];
    // Getting the individual questions inside the Questions
    const questionCards = document.getElementsByClassName('question-card');
    // Getting the New Conversation Button
    const newConverstationBtn = document.getElementsByClassName('new-conversation-btn')[0];
    
    // Setting all the content to the beginning position
    resetEverything();
    function startAnimation(cmd){
        if(cmd){
            console.log(topSection);
            // Setting the Animation to top-section
            setTimeout(() =>{
                topSection.classList.remove('display-none');
            },500)
            // Setting the Animation to the inside-main-content section
            setTimeout(()=>{
                insideMainContent.classList.remove('display-none');
            },1500)
            
            // Setting the Animation to the question cards inside using Loop
            setTimeout(() => {
                for(i=0;i<questionCards.length;i++){
                    const questionCard = questionCards[i];
                    setTimeout(() => {questionCard.classList.remove('display-none')},1000*i);
                }
            },3000)
            // Setting the Animation to the new coverstation button
            setTimeout(()=>{
                newConverstationBtn.classList.remove('display-none');
            },7000)
        }     
        else{
            resetEverything();
        }
    }

    // Function to reset all the timer and display-none class to every necessary element.
    function resetEverything(){
        // top-section
        topSection.classList.add('display-none');
        // inside-main-content
        insideMainContent.classList.add('display-none');
        // question-cards
        for(i=0;i<questionCards.length;i++){
            const questionCard = questionCards[i];
            questionCard.classList.add('display-none');
        }
        // new-conversation-btn
        newConverstationBtn.classList.add('display-none');
    }
})