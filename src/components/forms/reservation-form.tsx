import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  book: string;
  quantity: string;
  date: string;
  membership: string;
  agree: boolean;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phone?: string;
  book?: string;
  date?: string;
  membership?: string;
  agree?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  book: "",
  quantity: "1",
  date: "",
  membership: "",
  agree: false,
  message: "",
};


const ReservationForm = () => {

      const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errors, setErrors] = useState<FormErrors>({});

  const [success, setSuccess] = useState<boolean>(false);

  // Handle all input changes
  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    const checked =
      e.target instanceof HTMLInputElement
        ? e.target.checked
        : false;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSuccess(false);
  };

  // Validation function
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Required field
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    // Required + email format
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    // Password required + length
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters.";
    }

    // Cross-field validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    // Phone pattern
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^01[3-9]\d{8}$/.test(formData.phone)) {
      newErrors.phone =
        "Enter a valid Bangladesh phone number.";
    }

    // Select validation
    if (!formData.book) {
      newErrors.book = "Please select a book.";
    }

    // Date validation
    if (!formData.date) {
      newErrors.date =
        "Please select a reservation date.";
    }

    // Radio validation
    if (!formData.membership) {
      newErrors.membership =
        "Please select a membership type.";
    }

    // Checkbox validation
    if (!formData.agree) {
      newErrors.agree =
        "You must agree to the reservation terms.";
    }

    return newErrors;
  };

  // Submit form
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setErrors({});
    setSuccess(true);
  };

  // Reset form
  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSuccess(false);
  };

  return (
    <>
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          
          <div className="mb-8 text-center">
            <p className="font-semibold text-blue-600">
              BOOK RESERVATION
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Reserve a Library Book
            </h1>

            <p className="mt-3 text-slate-600">
              Fill in the information below to submit your
              reservation request.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-xl sm:p-10"
          >
            {/* Name + Email */}
            <div className="grid gap-6 md:grid-cols-2">
              
              <div>
                <label className="mb-2 block font-semibold">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500 ${
                    errors.name
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className={`w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500 ${
                    errors.email
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Password */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              
              <div>
                <label className="mb-2 block font-semibold">
                  Password *
                </label>

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimum 8 characters"
                  className={`w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500 ${
                    errors.password
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                />

                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.password}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Confirm Password *
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500 ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                />

                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Phone + Book */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              
              <div>
                <label className="mb-2 block font-semibold">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="01XXXXXXXXX"
                  className={`w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500 ${
                    errors.phone
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                />

                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Select Book *
                </label>

                <select
                  name="book"
                  value={formData.book}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-blue-500 ${
                    errors.book
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                >
                  <option value="">Choose a book</option>
                  <option value="Clean Code">
                    Clean Code
                  </option>
                  <option value="The Pragmatic Programmer">
                    The Pragmatic Programmer
                  </option>
                  <option value="Computer Networks">
                    Computer Networks
                  </option>
                </select>

                {errors.book && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.book}
                  </p>
                )}
              </div>
            </div>

            {/* Quantity + Date */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              
              <div>
                <label className="mb-2 block font-semibold">
                  Number of Books
                </label>

                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">
                  Reservation Date *
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-3 outline-none focus:border-blue-500 ${
                    errors.date
                      ? "border-red-500"
                      : "border-slate-300"
                  }`}
                />

                {errors.date && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.date}
                  </p>
                )}
              </div>
            </div>

            {/* Radio Buttons */}
            <div className="mt-6">
              <label className="mb-3 block font-semibold">
                Membership Type *
              </label>

              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="membership"
                    value="Student"
                    checked={
                      formData.membership === "Student"
                    }
                    onChange={handleChange}
                  />
                  Student
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="membership"
                    value="Faculty"
                    checked={
                      formData.membership === "Faculty"
                    }
                    onChange={handleChange}
                  />
                  Faculty
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="membership"
                    value="General"
                    checked={
                      formData.membership === "General"
                    }
                    onChange={handleChange}
                  />
                  General
                </label>
              </div>

              {errors.membership && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.membership}
                </p>
              )}
            </div>

            {/* Textarea */}
            <div className="mt-6">
              <label className="mb-2 block font-semibold">
                Additional Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Write any additional information..."
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Checkbox */}
            <div className="mt-6">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4"
                />

                <span className="text-sm text-slate-600">
                  I agree to the library reservation rules and
                  confirm that the information provided is
                  correct.
                </span>
              </label>

              {errors.agree && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.agree}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Submit Reservation
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Reset
              </button>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6">
                <h2 className="text-xl font-bold text-green-700">
                  Reservation Submitted Successfully!
                </h2>

                <div className="mt-4 space-y-1 text-sm text-green-800">
                  <p>
                    <strong>Name:</strong>{" "}
                    {formData.name}
                  </p>

                  <p>
                    <strong>Email:</strong>{" "}
                    {formData.email}
                  </p>

                  <p>
                    <strong>Book:</strong>{" "}
                    {formData.book}
                  </p>

                  <p>
                    <strong>Quantity:</strong>{" "}
                    {formData.quantity}
                  </p>

                  <p>
                    <strong>Date:</strong>{" "}
                    {formData.date}
                  </p>

                  <p>
                    <strong>Membership:</strong>{" "}
                    {formData.membership}
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

export default ReservationForm