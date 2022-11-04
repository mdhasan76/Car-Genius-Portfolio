import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const { _id, title, img, price } = useLoaderData();
    const order = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = form.email.value;
        const number = form.number.value;
        const textArea = form.textArea.value;
        // console.log(name, email, number, textArea)
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            number,
            message: textArea

        }

        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                alert("Order complate successful");
                form.reset()
                // console.log(data);
            })
    }
    return (
        <section>
            <div className="hero h-72 rounded-lg" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                <div className="hero-content text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-2xl mx-auto">
                    <form onSubmit={order}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group mb-6">
                                <input type="text" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="First name" name="firstName" required />
                            </div>
                            <div className="form-group mb-6">
                                <input type="text" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                                    aria-describedby="emailHelp124" placeholder="Last name" name="lastName" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group mb-6">
                                <input type="email" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                                    placeholder="Email address" name="email" />
                            </div>

                            <div className="form-group mb-6">
                                <input type="text" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                                    aria-describedby="emailHelp124" placeholder="your Phone" name="number" required />
                            </div>
                        </div>



                        <div>
                            <div className="mb-3">
                                <textarea
                                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Your message"
                                    name="textArea"
                                ></textarea>
                            </div>
                        </div>


                        <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Order</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CheckOut;