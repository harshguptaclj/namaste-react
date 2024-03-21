const ContactUs = () => {
  return (
    <div>
      <h1 className=" font-bold text-6xl text-orange-500 m-4  p-4">Contact Us</h1>
      <p className="font-bold text-xl text-orange-500 m-4  p-4">
        Feel free to reach us!
        <br></br>
        Mail: harshguptaclj@gmail.com
        <br></br>
        Mobile: 7080127050
        <br></br>
        <br></br>
        Or You can type your message here...
      </p>
      <form>
        <input
          className="p-2 ml-8 border border-orange-500 rounded-lg"
          type="text"
          placeholder="Name"
        />
        <input
          className="p-2 m-4 border border-orange-500 rounded-lg"
          type="text"
          placeholder="Message"
        />
        <button
          className="p-2 m-4 border border-orange-500 bg-pink-100 rounded-lg text-orange-500 ">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactUs

