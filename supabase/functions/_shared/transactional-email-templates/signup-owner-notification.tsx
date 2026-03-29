import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Link, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'ArtSupplyTracker'
const SITE_URL = 'https://artsupplytracker.com'

interface SignupNotificationProps {
  name?: string
  email?: string
}

const SignupOwnerNotificationEmail = ({
  name = 'Someone',
  email = 'unknown',
}: SignupNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New beta signup from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Beta Signup 🎨</Heading>
        <Text style={text}>
          A new user just signed up for the{' '}
          <Link href={SITE_URL} style={link}><strong>{SITE_NAME}</strong></Link>{' '}
          beta waitlist.
        </Text>
        <Section style={detailsBox}>
          <Text style={detailLabel}>Name</Text>
          <Text style={detailValue}>{name}</Text>
          <Text style={detailLabel}>Email</Text>
          <Text style={detailValue}>{email}</Text>
        </Section>
        <Text style={footer}>
          — {SITE_NAME} Notifications
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: SignupOwnerNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New Beta Signup: ${data.name || 'someone'} — ${SITE_NAME}`,
  to: 'Kim.wyatt@artsupplytracker.com',
  displayName: 'Signup owner notification',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "Georgia, 'Times New Roman', serif" }
const container = { padding: '20px 25px' }
const h1 = {
  fontSize: '22px',
  fontWeight: 'bold' as const,
  color: '#2B0F22',
  margin: '0 0 20px',
}
const text = {
  fontSize: '14px',
  color: '#55575d',
  lineHeight: '1.6',
  margin: '0 0 25px',
}
const link = { color: '#2B0F22', textDecoration: 'underline' }
const detailsBox = {
  padding: '16px 20px',
  backgroundColor: '#faf5f8',
  borderRadius: '12px',
  borderLeft: '4px solid #8B3A6B',
  marginBottom: '25px',
}
const detailLabel = {
  fontSize: '11px',
  color: '#999999',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '12px 0 2px',
}
const detailValue = {
  fontSize: '14px',
  color: '#2B0F22',
  margin: '0 0 4px',
  lineHeight: '1.5',
}
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0' }
