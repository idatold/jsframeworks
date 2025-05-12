
"use client"

import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

type FormValues = {
  fullName: string
  subject: string
  email: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>()

  // Called when form validation passes
  const onSubmit = async () => {
    try {
      // simulate network latency
      await new Promise((res) => setTimeout(res, 500))
      toast.success("Message sent!")
      reset()
    } catch {
      toast.error("Failed to send message.")
    }
  }

  // Called when form validation fails
  const onError = () => {
    toast.error("Please fix the errors in the form and try again.")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      noValidate
      className="space-y-6"
    >
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName", {
            required: "Full Name is required",
            minLength: {
              value: 3,
              message: "Must be at least 3 characters",
            },
          })}
          className="mt-1 block w-full px-3 py-2 border-2 border-[#696956] rounded focus:outline-none"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          {...register("subject", {
            required: "Subject is required",
            minLength: {
              value: 3,
              message: "Must be at least 3 characters",
            },
          })}
          className="mt-1 block w-full px-3 py-2 border-2 border-[#696956] rounded focus:outline-none"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className="mt-1 block w-full px-3 py-2 border-2 border-[#696956] rounded focus:outline-none"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Must be at least 10 characters",
            },
          })}
          className="mt-1 block w-full px-3 py-2 border-2 border-[#696956] rounded focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-2 bg-[#696956] text-white rounded hover:bg-opacity-90 transition disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  )
}
