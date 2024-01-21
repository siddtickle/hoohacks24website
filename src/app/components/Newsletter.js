import React, { useState, useEffect, useRef } from "react";
import { Space_Mono } from "next/font/google";
import { useScramble } from "use-scramble";
import { useInView } from "framer-motion";

const space_mono = Space_Mono({ weight: "400", subsets: ["latin"] });

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { ref: textRef, replay: replay1 } = useScramble({
    text: "Subscribe to our Newsletter",
    speed: 0.5,
    tick: 1,
    step: 10,
    scramble: 5,
    overdrive: true,
    playOnMount: false,
  });
  useEffect(() => {
    if (isInView) {
      replay1();
    }
  }, [isInView]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscribe = async (event) => {
    event.preventDefault();

    // Perform any necessary form validation here

    // Simulate subscribing (you should replace this with your actual logic)
    // For now, just set isSubscribed to true
    setIsSubscribed(true);

    // Clear the form fields
    setFirstName("");
    setLastName("");
    setEmail("");

    // Create the data payload
    const formData = new FormData();
    formData.append("u", "8db3fa0f566f9edea113259df");
    formData.append("id", "b74b5fd33d");
    formData.append("MERGE1", firstName);
    formData.append("MERGE2", lastName);
    formData.append("MERGE0", email);

    try {
      // Make the POST request
      const response = await fetch(
        "https://hoohacks.us17.list-manage.com/subscribe/post",
        {
          method: "POST",
          body: formData,
        }
      );

      // Check if the request was successful
      if (response.ok) {
        console.log("Subscription successful!");
        // You can handle the success response here if needed
      } else {
        console.error("Subscription failed");
        // Handle the error response here if needed
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      // Handle the error here if needed
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen mt-32 mb-32"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div
        className="relative flex flex-col items-center"
        style={{
          width: "75%",
          height: "100%",
          background: "linear-gradient(358deg, #090F11 0%, #2B3F3C 100%)",
          borderRadius: 20,
          border: "3px #55725E solid",
        }}
      >
        <div
          className="dots absolute top-5 left-5"
          style={{
            gap: 14,
            display: "flex",
          }}
        >
          <div
            className="Ellipse1"
            style={{
              width: 17,
              height: 17,
              background: "#FF5151",
              borderRadius: 9999,
            }}
          />
          <div
            className="Ellipse2"
            style={{
              width: 17,
              height: 17,
              background: "#FFFA82",
              borderRadius: 9999,
            }}
          />
          <div
            className="Ellipse3"
            style={{
              width: 17,
              height: 17,
              background: "#46BF32",
              borderRadius: 9999,
            }}
          />
        </div>
        <form
          onSubmit={handleSubscribe}
          className={`bg-gradient-to-r from-customColor1 to-customColor2 p-8 rounded-lg shadow-md border-3 border-customStrokeColor max-w-6xl w-full ${space_mono.className}`}
        >
          <input type="hidden" name="u" value="8db3fa0f566f9edea113259df" />
          <input type="hidden" name="id" value="b74b5fd33d" />
          <h2
            className={`text-white text-2xl font-bold mb-4 text-center ${space_mono.className}`}
            style={{
              color: "white",
              fontSize: 36,
              fontWeight: "400",
            }}
            ref={ref}
          >
            Subcribe to Our Newsletter
          </h2>

          <div className="flex space-x-6">
            <p className="">subscribe</p>
            <p className="">to.newsletter</p>
          </div>

          <div className="flex items-center space-x-6 mb-4">
            <p style={{ color: "#2AABF2", fontStyle: "italic" }}>hoohacks</p>
            <div className="flex space-x-2">
              <p>
                new.
                <span style={{ color: "#F78012" }}>user</span>
                <span style={{ color: "#00FF0A" }}>('First Name')</span>
              </p>
              <p>{">>"}</p>
              <p>to.newsletter</p>
            </div>
          </div>
          <input
            required
            type="text"
            name="MERGE1"
            id="MERGE1"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="First Name"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "none",
            }}
          />

          <div className="flex items-center space-x-6 mt-4 mb-4">
            <p style={{ color: "#2AABF2", fontStyle: "italic" }}>hoohacks</p>
            <div className="flex space-x-2">
              <p>
                new.
                <span style={{ color: "#F78012" }}>user</span>
                <span style={{ color: "#00FF0A" }}>('Last Name')</span>
              </p>
              <p>{">>"}</p>
              <p>to.newsletter</p>
            </div>
          </div>
          <input
            required
            type="text"
            name="MERGE2"
            id="MERGE2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Last Name"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "none",
            }}
          />

          <div className="flex items-center space-x-6 mt-4 mb-4">
            <p style={{ color: "#2AABF2", fontStyle: "italic" }}>hoohacks</p>
            <div className="flex space-x-2">
              <p>
                new.
                <span style={{ color: "#F78012" }}>user</span>
                <span style={{ color: "#00FF0A" }}>('Email')</span>
              </p>
              <p>{">>"}</p>
              <p>to.newsletter</p>
            </div>
          </div>
          <input
            required
            name="MERGE0"
            id="MERGE0"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Email"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "none",
            }}
          />
          {/* Button with dynamic text and disabled state */}
          <button
            className={`text-white p-2 rounded-md w-full mt-4`}
            type="submit"
            style={{ background: "#55725E" }}
            disabled={isSubscribed}
          >
            {isSubscribed ? (
              <span style={{ color: "white" }}>
                {email} Added to Listserv ✔️
              </span>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
