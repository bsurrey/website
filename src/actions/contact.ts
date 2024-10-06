'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { ContactResponse } from '@/lib/types'

const schema = z.object({
  message: z.string().min(1, 'Message is required'),
  email: z.string().email('Invalid email address'),
  name: z.string().min(1, 'Name is required'),
  lastName: z.string().max(0, ''),
})

export async function sendMessage(prevState: any, formData: FormData) {
  const parse = schema.safeParse({
    message: formData.get('message'),
    email: formData.get('email'),
    name: formData.get('name'),
    lastName: formData.get('last-name'),
  })

  const errorResponse: ContactResponse = {
    success: false,
    message: 'An error occurred. Try again later!',
    errors: parse.error ? parse.error.flatten().fieldErrors : undefined,
  }

  if (!parse.success) {
    return {
      errors: parse.error.flatten().fieldErrors,
      success: false,
      message: 'some fields are not valid',
    }
  }

  if (!parse.success) {
    return errorResponse
  }

  const data = parse.data

  const messagePayload = {
    content: `New message from ${data.name} (${data.email}): ${data.message}`,
    username: 'Contact Form Bot',
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    return errorResponse
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messagePayload),
    })

    if (!response.ok) {
      return errorResponse
    }

    revalidatePath('/')
    return { success: true, message: 'Message sent successfully.', errors: {} }
  } catch (e) {
    return errorResponse
  }
}
