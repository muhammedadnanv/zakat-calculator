
document.getElementById("output").style.visibility = "hidden";
document.getElementById("income").addEventListener("input", calculateZakat);


function calculateZakat(e){
    document.getElementById("output").style.visibility = "visible";
const income = document.getElementById('income');
document.getElementById('resultoutput').innerHTML = (0.025* income.value).toFixed(2);  


retrieveHadith();

   
}

    const retrieveHadith = function()
      {

        console.log("checking retrieve line 20");
        document.getElementById('message').className = "messageReveal" ;
         
const hadith1 = `<p> 1 Narrated Abu Huraira (Radhiallahu ‘anhu):
            The Messenger of Allah ﷺ said:
            “The best alms is that which you give when you are rich,<br> and you should start first to support your dependants.”
            [Sahih Bukhari – Book 64, Number 269]</p>` ;

const hadith2 =
             `<p> Abu Huraira (RadhiAllahu ‘anhu) reported:
             Allah’s Messenger ﷺ as saying:When a man dies, his acts come to an end, but three,
             recurring charity or knowledge (by which people) benefit, or a pious son, who prays for him (for the deceased).             
             [Sahih Muslim – Book 13 – Hadith 4005]”</p>` ;

const hadith3 =
            `<p> Those who spend their wealth in the Cause of Allaah, and do not follow up their gifts with reminders of their generosity or with injury, their reward is with their Lord. On them shall be no fear, nor shall they grieve”

            [al-Baqarah 2:261-262] </p>` ;

const hadith4 =
           `<p> 1 It is narrated from Abu Mas’ud al-Badri [رضى الله عنه] that the Messenger of Allah [صلى الله عليه و سلم] said,

           “Without a doubt, when a Muslim spends money on his family while considering (the action as worship), it is an act of charity”.
           
           [Reported by Imams Ahmad, Bukhari and Muslim]</p>` ; 



        let randomNum = Math.floor(Math.random() * 4);
        
        const allhadith = [hadith1, hadith2 , hadith3, hadith4] ; 
        
        
        document.getElementById('message').innerHTML = allhadith[randomNum] ;
       return message;
       
    }


    
//    document.getElementById('message').innerHTML ;

