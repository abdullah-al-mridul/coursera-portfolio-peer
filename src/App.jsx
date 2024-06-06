import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "./style.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function App() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    typeOfEnquiry: Yup.string().required("Type of enquiry is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });
  const [isLoading, setIsLoading] = useState(false);
  const data = [
    {
      imageLink: "https://i.imgur.com/P0aGa5U.png",
      cardHeader: "React Space",
      cardDesc:
        "Handy tool belt to create amazing AR components in a React app. with redux intergration via middleware",
    },
    {
      imageLink: "https://i.imgur.com/9w33EIN.png",
      cardHeader: "React Infinite Scroll",
      cardDesc:
        "A scrollable bottom sheet with virtualisation support. native animation at 60 FPS and fully implemented in JS land",
    },
    {
      imageLink: "https://i.imgur.com/XXylNo3.png",
      cardHeader: "Photo Gallery",
      cardDesc:
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    },
    {
      imageLink: "https://i.imgur.com/hkfnDO4.png",
      cardHeader: "Event Planner",
      cardDesc:
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    },
  ];
  return (
    <>
      <main>
        <header className="main-header">
          <ol>
            <li>
              <a href="https://mail.google.com" target="_blank">
                <IoMail />
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank">
                <FaLinkedin />
              </a>
            </li>
          </ol>
          <ol>
            <li>
              <a href="#porjects">Projects</a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/abdullah.al.mridul.dev"
              >
                Contact Me
              </a>
            </li>
          </ol>
        </header>
        <section className="hero-sec">
          <div className="hero-cont">
            <div className="image-cont">
              <img
                src="https://i.ibb.co/RS7NRX6/433013121-720232560270845-1654907188763205326-n.jpg"
                alt="myImage"
                className="myImageLogo"
              />
            </div>
            <p className="hero-name-text">{"Hi, I'm Abdullah!"}</p>
            <h1 className="type-writer">
              <Typewriter
                options={{
                  strings: ["I'm a 16 Year old MERN Stack Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </section>
        <section className="featured-projects">
          <h1>Featured Projects</h1>
          <div className="card-cont">
            <Card data={data} arrayIndex={0} />
            <Card data={data} arrayIndex={1} />
            <Card data={data} arrayIndex={2} />
            <Card data={data} arrayIndex={3} />
          </div>
        </section>
        <section id="contact" className="contact-sec">
          <h1>Contact</h1>
          <div className="inner-cont">
            <div>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  typeOfEnquiry: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, setTouched }) => {
                  // Set all fields as touched before submitting
                  setTouched({
                    name: true,
                    email: true,
                    typeOfEnquiry: true,
                    message: true,
                  });
                  setIsLoading(true);
                  // Handle form submission
                  setTimeout(() => {
                    alert(
                      `Thank you for sending message...\n\nYour Data...\n\n\nName : ${values.name}\nEmail : ${values.email}\nEnquiry : ${values.typeOfEnquiry}\nMessage : ${values.message}`
                    );
                    setSubmitting(false);
                    setIsLoading(false);
                  }, 2000);
                  console.log(values);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Field name="name">
                      {({ field, meta }) => (
                        <FormControl
                          mb={4}
                          id="name"
                          isInvalid={meta.touched && meta.error}
                        >
                          <FormLabel
                            style={{
                              color: "white",
                            }}
                          >
                            Name
                          </FormLabel>
                          <Input
                            {...field}
                            focusBorderColor="#805AD5"
                            style={{
                              color: "#fff",
                            }}
                          />
                          <ErrorMessage
                            name="name"
                            component={FormErrorMessage}
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="email">
                      {({ field, meta }) => (
                        <FormControl
                          mb={4}
                          id="email"
                          isInvalid={meta.touched && meta.error}
                        >
                          <FormLabel
                            style={{
                              color: "white",
                            }}
                          >
                            Email
                          </FormLabel>
                          <Input
                            {...field}
                            focusBorderColor="#805AD5"
                            style={{
                              color: "#fff",
                            }}
                          />
                          <ErrorMessage
                            name="email"
                            component={FormErrorMessage}
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="typeOfEnquiry">
                      {({ field, meta }) => (
                        <FormControl
                          mb={4}
                          id="typeOfEnquiry"
                          isInvalid={meta.touched && meta.error}
                        >
                          <FormLabel
                            style={{
                              color: "white",
                            }}
                          >
                            Type of Enquiry
                          </FormLabel>
                          <Select
                            focusBorderColor="#805AD5"
                            style={{
                              color: "#fff",
                            }}
                            placeholder="Select option"
                            {...field}
                          >
                            <option
                              style={{
                                color: "black",
                              }}
                              value="Freelance project proposal"
                            >
                              Freelance project proposal
                            </option>
                            <option
                              style={{
                                color: "black",
                              }}
                              value="Part time job"
                            >
                              Part time job
                            </option>
                            <option
                              value="Just for talk"
                              style={{
                                color: "black",
                              }}
                            >
                              Just for talk
                            </option>
                          </Select>
                          <ErrorMessage
                            name="typeOfEnquiry"
                            component={FormErrorMessage}
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="message">
                      {({ field, meta }) => (
                        <FormControl
                          mb={4}
                          id="message"
                          isInvalid={meta.touched && meta.error}
                        >
                          <FormLabel
                            style={{
                              color: "white",
                            }}
                          >
                            Message
                          </FormLabel>
                          <Textarea
                            {...field}
                            focusBorderColor="#805AD5"
                            style={{
                              color: "#fff",
                            }}
                          />
                          <ErrorMessage
                            name="message"
                            component={FormErrorMessage}
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      disabled={isSubmitting}
                      isLoading={isLoading}
                      loadingText="Submitting"
                      colorScheme=""
                      variant="solid"
                      mt={5}
                      bg={"#805AD5"}
                      _hover={{
                        bg: "#8d6ee6",
                      }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
        <footer className="footer-sec">
          <p>
            <a
              href="http://www.facebook.com/abdullah.al.mridul.dev"
              target="_blank"
            >
              Abdullah{" "}
            </a>{" "}
            © 2024
          </p>
        </footer>
      </main>
    </>
  );
}
const Card = ({ data, arrayIndex }) => {
  const { imageLink, cardHeader, cardDesc } = data[arrayIndex];
  return (
    <>
      <div className="card">
        <img src={imageLink} alt={"top image"} />
        <h3>{cardHeader}</h3>
        <p>{cardDesc}</p>
      </div>
    </>
  );
};
