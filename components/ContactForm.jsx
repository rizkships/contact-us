export default function ContactForm(){
    return <>
    <form className="py-4 mt-4 border-t flex flex-col gap-5">
        <div>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="john doe"></input>
        </div>
        <div>
            <label htmlFor="message">Your Message</label>
            <textarea className="h-32" id="message" placeholder="Type your message here..."></textarea>
        </div>
        <button className="bg-green-700 py-3 text-white font-bold" type="submit">Send</button>
    </form>

    <div className="bg-slate-100 flex flex-col">
        <div className="text-red-500 px-5 py-2">Error message</div>
    </div>
    </>
}