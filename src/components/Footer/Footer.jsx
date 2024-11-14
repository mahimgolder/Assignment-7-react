
const Footer = () => {
    return (
        <div>
            <div className="  border-2 rounded-3xl">
                <div className="border-2 rounded-3xl m-6 bg-[(/assets/bg-shadow.png)]">
                    <div className="flex flex-col items-center my-[88px]">
                        <h4 className="text-[32px] font-bold">Subscribe to our Newsletter</h4>
                        <p className="font-medium text-xl">Get the latest updates and news right in your inbox!</p>
                        <div className="flex gap-3 mt-6">
                            <input className=" px-[30px] py-[18px] border-2 rounded-xl" type="email" placeholder="Enter your email" />
                            <button className=" px-[30px] py-[18px] border-2 rounded-xl bg-yellow-200 text-black">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#06091A]">
                <div className="flex flex-col justify-center items-center gap-16">
                    <div>
                        <img  src="/assets/logo-footer.png" alt="" />
                    </div>
                    <div className="flex gap-44 border-2 border-red-600">
                        <div>
                            <div className=" border-2 border-red-600 flex flex-col gap-4">
                                <h4 className="text-lg font-semibold text-white ">About Us</h4>
                                <p className="text-gray-500">We are a passionate team dedicated to providing the best services to our customers.</p>
                            </div>
                        </div>
                        <div className="border-2 border-red-600">
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="list-disc gap-6">
                                <li>Home</li>
                                <li>Service</li>
                                <li>About</li>
                                <li>Contenct</li>
                            </ul>
                        </div>
                        <div className="border-2 border-red-600">
                            <h4>Subscribe</h4>
                            <p>Subscribe to our newsletter for the latest updates.</p>
                            <div>
                                <input type="email" placeholder="Enter your email"/>
                                <span>Subscribe</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-8 text-center text-base font-normal text-[rgba(255, 255, 255, 0.6)">
                    <span className="">@2024 Your Company All Rights Reserved.</span>
                </div>

            </div>
        </div>
    );
};

export default Footer;