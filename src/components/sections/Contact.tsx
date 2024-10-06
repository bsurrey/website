import { Card } from '@/components/cards/Card'
import { ContactForm } from '@/components/forms/ContactForm'
import { Section } from '@/components/Section'

export default function Contact() {
  return (
    <Section
      description={
        'If you have any questions or just want to get in touch, feel free to drop me a message below.'
      }
      title="Contact"
    >
      <Card
        className={
          'flex min-h-40 flex-col justify-center gap-4 text-center transition-all duration-100'
        }
      >
        <ContactForm />
      </Card>
    </Section>
  )
}
