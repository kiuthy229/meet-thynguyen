export interface MeetingType {
  name: string;
  desc: string;
  bgColor: string;
  textColor: string;
}

export const meetingTypes: MeetingType[] = [
  {
    name: 'Small Talk',
    desc: 'Engage in meaningful conversations and share your thoughts.',
    bgColor: 'rgba(254, 182, 13, .2)',
    textColor: '#FEB60D',
  },
  {
    name: 'Blahblah Reader',
    desc: 'Read and discuss interesting articles, books, or topics of interest.',
    bgColor: 'rgba(255, 113, 113, .2)',
    textColor: '#000000',
  },
  {
    name: 'Tech Support',
    desc: 'Get assistance with technical issues and troubleshooting.',
    bgColor: 'rgba(151, 113, 255, .2)',
    textColor: '#9771FF',
  },
  {
    name: 'Entertainment',
    desc: 'Enjoy fun and engaging activities to relax and unwind. Such as playing games, watching movies, etc.',
    bgColor: 'rgba(1, 181, 197, .2)',
    textColor: '#01B5C5',
  },
  {
    name: 'Career Coaching',
    desc: 'Receive guidance and advice to advance your career or explore new opportunities.',
    bgColor: 'rgba(34, 197, 94, .2)',
    textColor: '#22C55E',
  },
  {
    name: 'Health & Wellness',
    desc: 'Discuss and share tips on maintaining a healthy lifestyle and mental well-being.',
    bgColor: 'rgba(239, 68, 68, .2)',
    textColor: '#EF4444',
  },
];
