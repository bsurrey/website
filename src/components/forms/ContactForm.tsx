'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { sendMessage } from '@/actions/contact'
import { cn } from '@/utils/helper'
import { CakeIcon } from '@heroicons/react/24/outline'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      className="ml-auto inline-block max-w-xs rounded-md bg-neutral-200 px-8 py-4 transition-colors hover:bg-neutral-700 hover:text-white disabled:opacity-50 dark:bg-neutral-800"
      disabled={pending}
      type="submit"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useFormState(sendMessage, {
    errors: {},
    message: '',
    success: false,
  })

  return (
    <>
      {state.success ? (
        <div className="space-y-4 text-center text-green-500">
          <CakeIcon className="mx-auto size-16" />

          <p>Your Message was sent successfully</p>
        </div>
      ) : (
        <form action={formAction} className="flex w-full flex-col gap-4 text-left" method="POST">
          {state.message && <p className="text-sm text-red-500">{state.message}</p>}

          <div className="flex flex-col gap-4 md:flex-row">
            <input
              className={cn(
                'block w-full resize-none rounded-md border border-transparent bg-neutral-200 p-4 placeholder:text-gray-500 dark:bg-neutral-800 dark:placeholder:text-white/40',
                state.errors?.name ? 'border-red-500' : '',
              )}
              name="name"
              placeholder="Your Name"
              type="text"
            />
            {/* Honeypot field */}
            <input
              autoComplete="off"
              className="hidden"
              name="last-name"
              tabIndex={-1}
              type="text"
            />

            {state?.errors?.name && (
              <p className="mt-1 text-sm text-red-500">{state.errors.name}</p>
            )}
            <input
              className={cn(
                'block w-full resize-none rounded-md border border-transparent bg-neutral-200 p-4 placeholder:text-gray-500 dark:bg-neutral-800 dark:placeholder:text-white/40',
                state.errors?.email ? 'border-red-500' : '',
              )}
              name="email"
              placeholder="Your Email Address"
              type="email"
            />
          </div>
          {state?.errors?.email && (
            <p className="mt-1 text-sm text-red-500">{state.errors.email}</p>
          )}
          <textarea
            className={cn(
              'block w-full resize-none rounded-md border border-transparent bg-neutral-200 p-4 placeholder:text-gray-500 dark:bg-neutral-800 dark:placeholder:text-white/40',
              state.errors?.email ? 'border-red-500' : '',
            )}
            name="message"
            placeholder="Your Message"
            rows={5}
          ></textarea>
          {state?.errors?.message && (
            <p className="mt-1 text-sm text-red-500">{state.errors.message}</p>
          )}

          <p className="text-left text-sm">
            By submitting this form, you agree that your data will be used to respond to your
            inquiry. Your information will not be used for any other purpose.
          </p>

          <SubmitButton />
        </form>
      )}
    </>
  )
}
