export default function manifest() {
    return {
      name: 'Next.js App',
      short_name: 'Next.js App',
      description: 'Next.js App',
      start_url: '/',
      display: 'standalone',
      icons: [
        {
          src: '/favicon.ico',
          type: 'image/ico',
        },
      ],
    }
  }