import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Link, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'ArtSupplyTracker'
const SITE_URL = 'https://artsupplytracker.com'

interface BetaWelcomeProps {
  name?: string
}

const BetaWelcomeEmail = ({ name }: BetaWelcomeProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Welcome to the {SITE_NAME} Beta!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          Welcome to the Beta{name ? `, ${name}` : ''}! 🎨
        </Heading>
        <Text style={text}>
          You're officially on the list for early access to{' '}
          <Link href={SITE_URL} style={link}>
            <strong>{SITE_NAME}</strong>
          </Link>{' '}
          — the studio hub that tracks supplies, manages projects, and protects your art.
        </Text>
        <Text style={text}>
          We'll send you updates on how to use the app as we get closer to launch,
          so you'll be ready to hit the ground running.
        </Text>
        <Section style={highlight}>
          <Text style={highlightTitle}>Made for artists, by artists.</Text>
          <Text style={highlightBody}>Know what you have. Create more. Waste less.</Text>
        </Section>
        <Text style={footer}>
          — The {SITE_NAME} Team
          <br />
          <Link href={SITE_URL} style={link}>{SITE_URL.replace('https://', '')}</Link>
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: BetaWelcomeEmail,
  subject: `Welcome to the ${SITE_NAME} Beta!`,
  displayName: 'Beta welcome',
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
