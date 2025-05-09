// src/lib/fonts.ts
import { Chango, Roboto_Mono } from 'next/font/google';

export const chango = Chango({
  subsets: ['latin'],
  weight: '400',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400','700'],
});
