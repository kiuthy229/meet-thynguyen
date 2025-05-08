import avatar01 from "../images/avatarImg01.jpeg";

export interface MemberType {
  id: string;
  name: string;
  specialty: string;
  avgRating: number;
  totalRating: number;
  photo: string;
  totalAppointments: number;
  company: string;
}

export const members: MemberType[] = [
  {
    id: "01",
    name: "Thy Nguyen",
    specialty: "Web Dev",
    avgRating: 4.8,
    totalRating: 272,
    photo: avatar01,
    totalAppointments: 100,
    company: "Tech Company",
  },
];
