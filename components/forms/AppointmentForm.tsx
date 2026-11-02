"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Info, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { submitDemoRequest } from "@/lib/features/appointmentSlice";
import {
  appointmentSchema,
  todayISO,
  type AppointmentFormData,
} from "@/lib/appointment-schema";
import { SERVICES, TIME_SLOTS } from "@/lib/site";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="field-error">
      {message}
    </p>
  );
}

export default function AppointmentForm() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((s) => s.appointments.loading);
  const [submitted, setSubmitted] = useState<AppointmentFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data: AppointmentFormData) => {
    await dispatch(submitDemoRequest(data)).unwrap();
    setSubmitted(data);
  };

  const describe = (field: keyof AppointmentFormData) =>
    errors[field] ? `${field}-error` : undefined;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-semibold">Request an appointment</h2>

      <p
        className="mt-3 flex gap-2.5 rounded-lg bg-secondary px-3.5 py-3 text-sm text-secondary-foreground"
        role="note"
      >
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>
          <strong className="font-semibold">This is a demo form.</strong> It
          does not send, email, or store anything. Please do not enter real
          personal or medical details.
        </span>
      </p>

      {submitted ? (
        <div role="status" className="mt-6">
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
            <h3 className="font-sans text-lg font-semibold">
              Demo request completed
            </h3>
          </div>
          <p className="mt-2 text-muted-foreground">
            No appointment was booked and no data left your browser. This is
            what a confirmation could look like:
          </p>
          <dl className="mt-4 grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 rounded-lg border border-border p-4 text-sm">
            <dt className="text-muted-foreground">Name</dt>
            <dd className="break-words font-medium">{submitted.name}</dd>
            <dt className="text-muted-foreground">Service</dt>
            <dd className="font-medium">{submitted.service}</dd>
            <dt className="text-muted-foreground">Date</dt>
            <dd className="font-medium">{submitted.date}</dd>
            <dt className="text-muted-foreground">Time</dt>
            <dd className="font-medium">{submitted.time}</dd>
          </dl>
          <Button
            type="button"
            variant="outline"
            className="mt-5 h-11"
            onClick={() => {
              reset();
              setSubmitted(null);
            }}
          >
            Start over
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-6 space-y-5"
          aria-label="Appointment request (demo)"
        >
          <div>
            <label htmlFor="name" className="field-label">
              Full name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className="field-control"
              aria-invalid={!!errors.name}
              aria-describedby={describe("name")}
              {...register("name")}
            />
            <FieldError id="name-error" message={errors.name?.message} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="field-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                className="field-control"
                aria-invalid={!!errors.email}
                aria-describedby={describe("email")}
                {...register("email")}
              />
              <FieldError id="email-error" message={errors.email?.message} />
            </div>
            <div>
              <label htmlFor="phone" className="field-label">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+00 000 000 0000"
                className="field-control"
                aria-invalid={!!errors.phone}
                aria-describedby={describe("phone")}
                {...register("phone")}
              />
              <FieldError id="phone-error" message={errors.phone?.message} />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="field-label">
              Service
            </label>
            <select
              id="service"
              className="field-control"
              defaultValue=""
              aria-invalid={!!errors.service}
              aria-describedby={describe("service")}
              {...register("service")}
            >
              <option value="" disabled>
                Choose a service
              </option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <FieldError id="service-error" message={errors.service?.message} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className="field-label">
                Preferred date
              </label>
              <input
                id="date"
                type="date"
                min={todayISO()}
                className="field-control"
                aria-invalid={!!errors.date}
                aria-describedby={describe("date")}
                {...register("date")}
              />
              <FieldError id="date-error" message={errors.date?.message} />
            </div>
            <div>
              <label htmlFor="time" className="field-label">
                Preferred time
              </label>
              <select
                id="time"
                className="field-control"
                defaultValue=""
                aria-invalid={!!errors.time}
                aria-describedby={describe("time")}
                {...register("time")}
              >
                <option value="" disabled>
                  Choose a time
                </option>
                {TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <FieldError id="time-error" message={errors.time?.message} />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="field-label">
              Notes <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <textarea
              id="message"
              rows={3}
              className="field-control h-auto resize-y py-2.5"
              aria-invalid={!!errors.message}
              aria-describedby={describe("message")}
              {...register("message")}
            />
            <FieldError id="message-error" message={errors.message?.message} />
          </div>

          <Button
            type="submit"
            size="lg"
            className="h-12 w-full text-base"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2
                  className="mr-2 h-4 w-4 animate-spin motion-reduce:animate-none"
                  aria-hidden="true"
                />
                Working...
              </>
            ) : (
              "Try the demo request"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
