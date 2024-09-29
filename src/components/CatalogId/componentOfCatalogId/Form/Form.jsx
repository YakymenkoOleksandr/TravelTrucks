import css from "./Form.module.css";
import { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Forma() {
  const inputRefs = [useRef(null), useRef(null), useRef(null)];
  const [startDate, setStartDate] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDivClick = (index) => {
    if (inputRefs[index].current) {
      inputRefs[index].current.focus();
    }
  };

  const handleSubmit = (values, actions) => {
    toast.success("Ваше замовлення оформлюється!");
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    bookingDate: Yup.date().required("Booking date is required"),
    comment: Yup.string().min(2, "Too Short!").max(300, "Too Long!"),
  });

  return (
    <div className={css.form}>
      <div className={css.headerOfForm}>
        <h3>Book your campervan now</h3>
        <p className={css.textUnderHeader}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <ToastContainer />
      <div className={css.inputs}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            comment: "",
            bookingDate: null,
          }}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className={css.wrapperForInputs}>
                <div
                  className={css.inputField}
                  onClick={() => handleDivClick(0)}
                >
                  <Field
                    className={css.input}
                    type="text"
                    name="name"
                    placeholder="Name*"
                    innerRef={inputRefs[0]}
                  />
                </div>

                <div
                  className={css.inputField}
                  onClick={() => handleDivClick(1)}
                >
                  <Field
                    className={css.input}
                    type="email"
                    name="email"
                    placeholder="Email*"
                    innerRef={inputRefs[1]}
                  />
                </div>

                <div
                  className={css.inputFieldCalendar}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      setFieldValue("bookingDate", date);
                      setOpen(false);
                    }}
                    placeholderText="Booking date*"
                    className={css.inputCalendar}
                    open={open}
                    onClickOutside={() => setOpen(false)}
                  />
                </div>

                <div
                  className={css.inputComent}
                  onClick={() => handleDivClick(2)}
                >
                  <Field
                    className={css.input}
                    as="textarea"
                    type="text"
                    name="comment"
                    placeholder="Comment"
                    innerRef={inputRefs[2]}
                    rows={4} 
                    style={{ resize: 'none' }}
                  />
                </div>

                <div className={css.submit}>
                  <button className={css.submitButton} type="submit">
                    Send
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Forma;
