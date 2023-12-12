import React from 'react'
import style from '/styles/FAQ.css'
import FAQue from 'components/FAQue.js'
import Redbtn from 'components/Redbtn.js'

function FAQ() {
    const FQue = [
        {
            que:"What is Netflix?",
            answ1:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
            answ2:"You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
        },
        {
            que:"How much does Netflix cost?",
            answ1:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
            answ2:""
        },
        {
            que:"Where can I watch?",
            answ1:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
            answ2:"You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        },
        {
            que:"How do I cancel?",
            answ1:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
            answ2:""
        },
        {
            que:"What can I watch on Netflix?",
            answ1:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
            answ2:""
        },
        {
            que:"Is Netflix good for kids?",
            answ1:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
            answ2:"Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        }
    ];
  return (
    
    <div className="faq">
        <div className="allque">
        <h1 className="faqHead">Frequently Asked Questions</h1>
        <FAQue ques={FQue[0].que}  ans1={FQue[0].answ1} ans2={FQue[0].answ2} />
        <FAQue ques={FQue[1].que}  ans1={FQue[1].answ1} ans2={FQue[1].answ2}  />
        <FAQue ques={FQue[2].que}  ans1={FQue[2].answ1} ans2={FQue[2].answ2}  />
        <FAQue ques={FQue[3].que}  ans1={FQue[3].answ1} ans2={FQue[3].answ2}  />
        <FAQue ques={FQue[4].que}  ans1={FQue[4].answ1} ans2={FQue[4].answ2}  />
        <FAQue ques={FQue[5].que}  ans1={FQue[5].answ1} ans2={FQue[5].answ2}  />
        <Redbtn className="margin" />
    </div>
    </div>
  )
}

export default FAQ