import './globals.css'
import type { Metadata } from 'next'
import { raleway } from './lib/fonts'
import { sharedMetaData } from '@/shared-metadata'


export const metadata: Metadata = {
  ...sharedMetaData
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${raleway.className} flex min-h-screen'}>{children}</body>
    </html>
  )
}
