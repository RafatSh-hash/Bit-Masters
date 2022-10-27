import { Accordion } from "flowbite-react";
import React from "react";

const About = () => {
  return (
    //this is the FAQ page where also you can know about the company
    //ques and answers are set in an accordion
    <div className="bg-gradient-to-r from-neutral-200 via-gray-100 to-slate-300  py-20">
      <div className="w-11/12 mt-14 mx-auto border-2 border-gray-700 rounded-lg">
        <p className="text-2xl my-10 text-blue-600 text-center">
          Here are answer to some common questions you might seek answer before
          enrolling courses.
        </p>

        <Accordion alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>
              <span className="font-bold text-blue-500">Who are we ?</span>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black dark:text-white">
                We are Bit Masters, and our goal is to encourage and teach mass
                students about technology. Third world is highly competetive and
                there is no place for those who dont have anything to do with
                technology. Bit Masters team are always working for the growth
                of the knowledge of the students.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <span className="font-bold text-blue-500">
                Who should you choose us ?
              </span>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black dark:text-white">
                It’s no secret that we work harder, better, and longer when we
                enjoy the work, and what employer wouldn’t want that dedication
                from their staff? But it’s your responsibility to make that
                connection between job and joy clear. That connection can be as
                simple as “X is something I enjoy,” but expressing how or why
                you enjoy it makes that point even more valuable and memorable.
                We are bound to accomplish our goals and enlighten the socity no
                matter what.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <span className="font-bold text-blue-500">
                Are the students being teached the way the should be teached ?
              </span>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black dark:text-white">
                This question reveals whether you researched the school and
                district. Conducting thorough research about the student body,
                how the community views the school, test scores and other
                aspects of the school district shows you're serious about the
                position. When answering this question, demonstrate your
                knowledge of both the school and its district. Explain why this
                information enhances your interest in the institution. A strong
                answer could include information about recent test scores,
                specific programs or awards earned by the school. Example
                answer: “I am inspired by this school’s reputation for
                educational excellence and for encouraging creativity through
                its renowned arts program. I note there has been a dip in the AP
                test scores in recent years, so I am extremely motivated to
                introduce my teaching strategies. I feel confident that I could
                help students improve their scores and opportunities for
                success.”
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <span className="font-bold text-blue-500">
                What are the payment options available?
              </span>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black dark:text-white">
                Our Payment Systems Are :
                <ul>
                  <li>Rocket</li>
                  <li>Nagad</li>
                  <li>Bkash</li>
                  <li>Master Card</li>
                  <li>Visa Card</li>
                  <li>Paypal</li>
                  <li>Google Pay</li>
                  <li>Apple Pay</li>
                  <li>Mtp</li>
                  <li>You Pay</li>
                  <li>Tap Tap Sent</li>
                  <li>UPay</li>
                </ul>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <span className="font-bold text-blue-500">
                How much effort is enough to finish the a course successfully?
              </span>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black dark:text-white">
                The parameter of effort depends on the place you wanna see
                yourself after a certain period of time. Its not about how much
                you learn, its about how well you learn. So success is
                determined to those who are bound with three P's. Practice,
                Practice & Practice
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              <span className="font-bold text-blue-500">
                How can I find the curriculum before enrolling the course?
              </span>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-black dark:text-white">
                After enrolling the course you will receive an email, an the
                details will be shared with you there.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

        <p className="text-center mt-10">
          For further query contact us on
          <span className="text-blue-500 mx-3 text-small">
            bitmaster.portal@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
