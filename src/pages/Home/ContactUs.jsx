import useContextHook from "../../hooks/useContextHook";

const ContactUs = () => {
    const { user } = useContextHook();

    const handleFooterFormSubmit = () => {
        console.log('handled');
    }
    return (
        <section className="my-16">
            <div data-aos="fade-up" className="order-1 md:order-2">
                <div>
                    <h2 className="text-4xl font-bold divider my-16 md:text-left">Share your feedback</h2>
                </div>
                <form onSubmit={handleFooterFormSubmit} className="space-y-3 mt-6 w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
                    <div className="flex gap-2">
                        <input className="border border-green-400 py-2 w-full px-3  rounded-lg duration-150" defaultValue={user?.displayName || ""} type="text" name="name" placeholder="Name (optional)" />
                        <input className="border border-green-400 py-2 w-full px-3  rounded-lg duration-150" defaultValue={user?.email || ""} type="email" name="email" placeholder="Email (optional)" />
                    </div>
                    <input className="border border-green-400 py-2 w-full px-3 rounded-lg duration-150" type="text" name="subject" placeholder="Subject*" required />
                    <br />
                    <textarea className="border border-green-400 w-full h-32 px-2 py-2 rounded-lg duration-150" name="message" placeholder="Message*" required></textarea>
                    <br />
                    <div className="flex justify-between">
                        <p className="font-bold text-sm">*required</p>
                        <button type="submit" className="font-bold px-6 py-1.5 border-2 duration-200 rounded-full ">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;