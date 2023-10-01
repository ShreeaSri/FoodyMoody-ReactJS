const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl p-4 m-4 text-lime-700">
        Any Query?? Ping us here..
      </h1>
      <form className="flex flex-col items-center space-y-4">
        <input
          type="text"
          className="border border-black p-2 w-[400] mx-auto rounded-lg"
          placeholder="name"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          // value={email}
          // onChange={handleEmailChange}
          className="border border-black p-2 w-[400] mx-auto rounded-lg"
          required
        />
        <input
          type="text"
          className="border border-black  h-[100] w-[400] py-14 pl-2 mx-auto rounded-lg"
          placeholder="message"
          style={{ lineHeight: "1.2", paddingTop: "10px" }}
        />
        <button className="border w-[200] border-black p-2 m-2 rounded-lg bg-orange-400 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
