import React from "react";
import { assets } from "../assets/assets_frontend/assets";
const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span>US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            India’s mental health is in a state of crisis. While 1 billion
            people around the world live with a mental health condition, India
            alone accounts for a third of the global burden of depressive
            disorders. India has the youngest population in the world - and yet,
            over 100 million children and youth have diagnosed mental health
            conditions.
          </p>
          <p>
            Due to a combination of poor awareness, stigma, and lack of access
            to quality care, a person who is struggling with their mental health
            often does not receive the treatment and care they need to get
            better.
          </p>
          <b className="text-gray-800">Our Vision</b>

          <p>
            MindAlign is transforming the way mental healthcare is delivered in
            India, by bringing together the latest science in clinical practice
            and modern technological tools to deliver the best outcome for each
            individual and family. Our integrated mental health ecosystem offers
            treatment, care and support for all kinds of mental health concerns.
          </p>
          <p>
            Using the experience and expertise of our team of trained mental
            health professionals, we strive to ensure that each individual can
            navigate their mental healthcare journey seamlessly and easily.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Our care options, tools, trackers and other offerings are based on clinically-validated treatment approaches and the latest science in the mental health field.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>We track each client’s progress and regularly measure treatment outcomes to ensure you’re actually getting better over time and receiving the right care for your concerns.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>We create a personalised treatment plan for each individual keeping the severity of their concern, their unique life context, and their mental health needs in mind.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
