import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./ContactForm.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    notify();
  };

  const notify = () => toast("Mesajınız iletildi!");
  const history = useHistory();

  return (
    <div className="contactForm">
      <div className="contactForm-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contactForm-box-1">
            <h1>Bana Mesaj Gönderin</h1>
            <div className="contactForm-input">
              <h2>Ad</h2>
              <input
                placeholder="İsminizi yazın..."
                {...register("isim", { required: true })}
              ></input>
              {errors.isim && (
                <div className="contactForm-error">İsim gereklidir</div>
              )}
            </div>
            <div className="contactForm-input">
              <h2>E-Posta</h2>
              <input
                placeholder="Email adresi yazın..."
                {...register("email", {
                  required: "Mail gereklidir",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email adresi geçerli değildir",
                  },
                })}
                type="email"
              />
              {errors.email && (
                <div className="contactForm-error" role="alert">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="contactForm-input">
              <div className="contactForm-input-select">
                <h2>Konu</h2>
                <select
                  {...register("konu", {
                    required: { value: true, message: "Lütfen seçim yapın" },
                  })}
                >
                  <option value="">Seçiniz...</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Full Stack">Full Stack</option>
                </select>
                {errors.konu && (
                  <div className="contactForm-error" role="alert">
                    {errors.konu.message}
                  </div>
                )}
              </div>
            </div>
            <div className="contactForm-input">
              <div className="contactForm-input-mesaj">
                <h2>Mesaj</h2>
                <input
                  placeholder="Mesajınızı yazın..."
                  {...register("mesaj", {
                    required: true,
                    minLength: {
                      value: 5,
                      message: "En az 5 karakter girilmelidir",
                    },
                    maxLength: {
                      value: 100,
                      message: "En fazla 100 karakter yazılabilir",
                    },
                  })}
                ></input>
                {errors.mesaj?.message ? (
                  <div className="contactForm-error">
                    {errors.mesaj.message}
                  </div>
                ) : (
                  errors.mesaj && (
                    <div className="contactForm-error">
                      Lütfen mesajınızı girin
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="contactForm-button">
              <button type="submit">Gönder</button>
            </div>
            <div className="contactForm-button-2">
              <button onClick={()=>history.push("/")}>Ana Sayfa</button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ContactForm;
