import {useState} from 'react'

const Form = () =>{
    let _key = 0;

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(userName, userEmail, userTitle, userComment + " === 6str form")
        const userMessege = {userName, userEmail, userTitle, userComment}
        window.localStorage.setItem(_key, JSON.stringify(userMessege))
        _key = _key + 1

    }
    

    const [userName, setName] = useState();
    const [userEmail, setEmail] = useState();
    const [userTitle, setTitle] = useState();
    const [userComment, setComment] = useState();

    

    return <form onSubmit={handleSubmit} className="section-form_form">
          
    <input onChange={e => setName(e.target.value)} type="text" placeholder="Your name" name="userName"  className="section-form_form__item section-form_form__item-name"></input>
    <input  onChange={e => setEmail(e.target.value)} type="email" placeholder="Your email" name="userEmail" className="section-form_form__item section-form_form__item-email"></input>
    <input  onChange={e => setTitle(e.target.value)} type="text" placeholder="Your title" name="userTitle" className="section-form_form__item section-form_form__item-title"></input>
    <textarea  onChange={e => setComment(e.target.value)} type="text" placeholder="Your comment" name="userComment" className="section-form_form__item section-form_form__item-comment"></textarea>
    <button type="submit" className="section-form_form__btn">send message</button>        
  </form>  
}
export default Form