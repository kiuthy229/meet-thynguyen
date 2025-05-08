export interface MeetingType {
  name: string;
  desc: string;
  bgColor: string;
  textColor: string;
}

export const meetingTypes: MeetingType[] = [
  {
    name: "Small Talk",
    desc: "Engage in meaningful conversations and share your thoughts.",
    bgColor: "rgba(254, 182, 13, .2)",
    textColor: "#FEB60D",
  },
  {
    name: "Tech Support",
    desc: "Get assistance with technical issues and troubleshooting.",
    bgColor: "rgba(151, 113, 255, .2)",
    textColor: "#9771FF",
  },
  {
    name: "Entertainment",
    desc: "Enjoy fun and engaging activities to relax and unwind. Such as playing games, watching movies, etc.",
    bgColor: "rgba(1, 181, 197, .2)",
    textColor: "#01B5C5",
  },
];
