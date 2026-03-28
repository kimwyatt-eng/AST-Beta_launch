import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Link, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'ArtSupplyTracker'
const SITE_URL = 'https://artsupplytracker.com'

interface PartnerInquiryProps {
  name?: string
}

const PartnerInquiryConfirmationEmail = ({ name }: PartnerInquiryProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>We received your partner inquiry — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Thank you, ${name}!` : 'Thank you for reaching out!'}
        </Heading>
        <Text style={text}>
          We've received your partnership inquiry and appreciate your interest in{' '}
          <Link href={SITE_URL} style={link}>
            <strong>{SITE_NAME}</strong>
          </Link>
          .
        </Text>
        <Text style={text}>
          Our team will review your message and get back to you as soon as possible.
          We're excited to explore how we can grow together in the creative community.
        </Text>
        <Section style={highlight}>
          <Text style={highlightTitle}>Partner with purpose.</Text>
          <Text style={highlightBody}>
            We believe in ethical, artist-first partnerships that create real value for creative communities.
          </Text>
        </Section>
        <Text style={footer}>
          — The {SITE_NAME} Team
          <br />
          <Link href={`${SITE_URL}/partners`} style={link}>{SITE_URL.replace('https://', '')}/partners</Link>
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: PartnerInquiryConfirmationEmail,
  subject: `We received your partner inquiry — ${SITE_NAME}`,
  displayName: 'Partner inquiry confirmation',
  previewData: { name: 'Jane' },
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
const highlight = {
  marginTop: '30px',
  padding: '20px',
  backgroundColor: '#f0fdfa',
  borderRadius: '12px',
  borderLeft: '4px solid #2dd4bf',
}
const highlightTitle = {
  color: '#2B0F22',
  fontWeight: 'bold' as const,
  margin: '0',
  fontSize: '14px',
}
const highlightBody = {
  color: '#666666',
  margin: '8px 0 0',
  fontSize: '14px',
}
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0' }
