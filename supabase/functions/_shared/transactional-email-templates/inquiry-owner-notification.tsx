import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Link, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'ArtSupplyTracker'
const SITE_URL = 'https://artsupplytracker.com'

interface InquiryNotificationProps {
  inquiryType?: string
  senderName?: string
  senderEmail?: string
  senderMessage?: string
}

const InquiryOwnerNotificationEmail = ({
  inquiryType = 'partner',
  senderName = 'Someone',
  senderEmail = 'unknown',
  senderMessage = '',
}: InquiryNotificationProps) => {
  const label = inquiryType === 'investor' ? 'Investor' : 'Partner'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New {label.toLowerCase()} inquiry from {senderName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New {label} Inquiry</Heading>
          <Text style={text}>
            You have a new {label.toLowerCase()} inquiry on{' '}
            <Link href={SITE_URL} style={link}><strong>{SITE_NAME}</strong></Link>.
          </Text>
          <Section style={detailsBox}>
            <Text style={detailLabel}>Name</Text>
            <Text style={detailValue}>{senderName}</Text>
            <Text style={detailLabel}>Email</Text>
            <Text style={detailValue}>{senderEmail}</Text>
            <Text style={detailLabel}>Message</Text>
            <Text style={detailValue}>{senderMessage}</Text>
          </Section>
          <Text style={text}>
            Reply directly to the sender at{' '}
            <Link href={`mailto:${senderEmail}`} style={link}>{senderEmail}</Link>.
          </Text>
          <Text style={footer}>
            — {SITE_NAME} Notifications
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: InquiryOwnerNotificationEmail,
  subject: (data: Record<string, any>) => {
    const label = data.inquiryType === 'investor' ? 'Investor' : 'Partner'
    return `New ${label} Inquiry from ${data.senderName || 'someone'} — ${SITE_NAME}`
  },
  to: 'Kim.wyatt@artsupplytracker.com',
  displayName: 'Owner inquiry notification',
  previewData: {
    inquiryType: 'partner',
    senderName: 'Jane Doe',
    senderEmail: 'jane@example.com',
    senderMessage: 'Hi, I'd love to explore a partnership opportunity.',
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
