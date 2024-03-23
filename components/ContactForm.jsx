export default function ContactForm(){
    return <>
    <form className="py-4 mt-4 border-t flex flex-col gap-5">
        <div>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="john doe"></input>
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea className="h-32" id="message" placeholder="Type your message here..."></textarea>
        </div>
        <button className="bg-green-700 py-3 text-white font-bold" type="submit">Send</button>
    </form>

    <div>
        <div>Error message</div>
    </div>
    </>
}