import {
    Bug,
    LayoutDashboard,
    Lock,
    ServerOff,
    Settings,
    User,
    UserCog,
    Users,
  } from 'lucide-react'
  import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
  import { type SidebarData } from '../types'
  
  export const sidebarData: SidebarData = {
    user: {
      name: 'satnaing',
      email: 'satnaingdev@gmail.com',
      avatar: '/avatars/shadcn.jpg',
    },
    teams: [
      {
        name: 'Shadcn Admin',
        logo: Command,
        plan: 'Vite + ShadcnUI',
      },
      {
        name: 'Acme Inc',
        logo: GalleryVerticalEnd,
        plan: 'Enterprise',
      },
      {
        name: 'Acme Corp.',
        logo: AudioWaveform,
        plan: 'Startup',
      },
    ],
    navGroups: [
      {
        title: 'General',
        items: [
          {
            title: 'Dashboard',
            url: '/',
            icon: LayoutDashboard,
          },
          {
            title: 'Tasks',
            url: '/tasks',
            icon: Bug,
          },
          {
            title: 'Apps',
            url: '/apps',
            icon: Bug,
          },
          {
            title: 'Chats',
            url: '/chats',
            badge: '3',
            icon: Bug,
          },
          {
            title: 'Users',
            url: '/users',
            icon: Users,
          },
        ],
      },
      {
        title: 'Pages',
        items: [
          {
            title: 'Auth',
            icon: Lock,
            items: [
              {
                title: 'Sign In',
                url: '/sign-in',
              },
              {
                title: 'Sign In (2 Col)',
                url: '/sign-in-2',
              },
              {
                title: 'Sign Up',
                url: '/sign-up',
              },
              {
                title: 'Forgot Password',
                url: '/forgot-password',
              },
              {
                title: 'OTP',
                url: '/otp',
              },
            ],
          },
          {
            title: 'Errors',
            icon: Bug,
            items: [
              {
                title: 'Unauthorized',
                url: '/401',
                icon: Lock,
              },
              {
                title: 'Forbidden',
                url: '/403',
                icon: User,
              },
              {
                title: 'Not Found',
                url: '/404',
                icon: Bug,
              },
              {
                title: 'Internal Server Error',
                url: '/500',
                icon: Bug,
              },
              {
                title: 'Maintenance Error',
                url: '/503',
                icon: Bug,
              },
            ],
          },
        ],
      },
      {
        title: 'Other',
        items: [
          {
            title: 'Settings',
            icon: Settings,
            items: [
              {
                title: 'Profile',
                url: '/settings',
                icon: Bug,
              },
              {
                title: 'Account',
                url: '/settings/account',
                icon: Bug,
              },
              {
                title: 'Appearance',
                url: '/settings/appearance',
                icon: Bug,
              },
              {
                title: 'Notifications',
                url: '/settings/notifications',
                icon: Bug,
              },
              {
                title: 'Display',
                url: '/settings/display',
                icon: Bug,
              },
            ],
          },
          {
            title: 'Help Center',
            url: '/help-center',
            icon: Bug,
          },
        ],
      },
    ],
  }