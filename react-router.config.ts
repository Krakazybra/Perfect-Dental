import type { Config } from '@react-router/dev/config';

export default {
  appDirectory: 'src',
  buildDirectory: 'build',
  ssr: false,
  prerender: [
    '/',
    '/services',
    '/services/microscope-treatment',
    '/services/implantation',
    '/services/surgery',
    '/services/orthopedics',
    '/services/orthodontics',
    '/services/periodontology',
    '/services/gnathology',
    '/services/diagnostics',
    '/services/emergency',
    '/doctors',
    '/equipment',
    '/results',
    '/reviews',
    '/contacts',
    '/privacy',
  ],
} satisfies Config;
