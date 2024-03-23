export default function ContactForm(){
    return <>
    <form>
        <div>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="john doe"></input>
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Type your message here..."></textarea>
        </div>
        <button type="submit">Send</button>
    </form>

    <div>
        <div>Error message</div>
    </div>
    </>
}