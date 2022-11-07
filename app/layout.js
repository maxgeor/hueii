import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hueii</title>
        <meta name="description" content="Create your own JS themes for VSCode" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className='min-h-screen bg-black text-white'>{children}</body>
    </html>
  );
}