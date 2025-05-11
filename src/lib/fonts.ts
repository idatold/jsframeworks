// src/lib/fonts.ts
import { Chango, Roboto_Mono } from 'next/font/google'

/** Extend the stock NextFont type to include our CSS-variable className */
interface NextFontWithVariable {
  className: string
  variable: string
}

export const chango = Chango({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-chango',
}) as NextFontWithVariable

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-mono',
}) as NextFontWithVariable
