export const patientArray = [
  'Nana Kojo',
  'Lilly Mensah',
  'Samuel Addo',
  'Quami Kily',
  'Nana Yaw',
  'Nancy Mensah',
  'Pappy Joey',
  'Bernice Offei',
  'Nana Kwame',
  'Abena Mensah',
  'Adjoa Agbozo',
  'Chevy Cadilac',
  'Nana Akwasi',
  'Alex Grover',
  'Yesutor Dzibordi',
  'Kesse Mimi',
  'Nana Kwamena',
  'Lilly Mensah',
  'Mamavi Esther',
  'Quami Kily',
  'Nana Kwaku',
  'Lilly Mensah',
  'Eli Sampson',
  'Kwadwo Atinga',
  'Nana Kwaw',
  'Lilly Mensah',
  'Ato Abban',
  'Esi Lilliana',
  'Nana Kojo',
  'Jay Beyonce',
  'Samuel Addo',
  'Iniesta Kwaw',
];

export async function getNames() {
  const res = await fetch('https://randomuser.me/api/');
  if (!res.ok) {
    throw {
      message: 'Failed to fetch patient names',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
}
export const newPatientArr = [
  { name: 'Nana Kojo', branch: 'Tafo', patient_id: '1', gender: "Male", hospital: "bestLab", age: 25, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Ampadu Yaw', branch: 'Madina', patient_id: '2', gender: "Male", hospital: "bestLab", age: 18, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Asamoah Kwame', branch: 'Tafo', patient_id: '3', gender: "Male", hospital: "bestLab", age: 32, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Sampson Akwasi', branch: 'Kronum', patient_id: '4', gender: "Male", hospital: "bestLab", age: 5, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Bawa Kwamena', branch: 'Ahodwo', patient_id: '5', gender: "Male", hospital: "bestLab", age: 15, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Kwaku Bonsam', branch: 'Madina', patient_id: '6', gender: "Male", hospital: "bestLab", age: 26, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Nana Kwaw', branch: 'Kronum', patient_id: '7', gender: "Male", hospital: "bestLab", age: 20, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Nana Yaa', branch: 'Ahodwo', patient_id: '8', gender: "Female", hospital: "bestLab", age: 45, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Nana Kojo', branch: 'Tafo', patient_id: '1', gender: "Male", hospital: "bestLab", age: 25, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Ampadu Yaw', branch: 'Madina', patient_id: '2', gender: "Male", hospital: "bestLab", age: 18, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Asamoah Kwame', branch: 'Tafo', patient_id: '3', gender: "Male", hospital: "bestLab", age: 32, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Sampson Akwasi', branch: 'Kronum', patient_id: '4', gender: "Male", hospital: "bestLab", age: 5, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Bawa Kwamena', branch: 'Ahodwo', patient_id: '5', gender: "Male", hospital: "bestLab", age: 15, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Kwaku Bonsam', branch: 'Madina', patient_id: '6', gender: "Male", hospital: "bestLab", age: 26, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Nana Kwaw', branch: 'Kronum', patient_id: '7', gender: "Male", hospital: "bestLab", age: 20, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Nana Yaa', branch: 'Ahodwo', patient_id: '8', gender: "Female", hospital: "bestLab", age: 45, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Nana Kojo', branch: 'Tafo', patient_id: '1', gender: "Male", hospital: "bestLab", age: 25, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Ampadu Yaw', branch: 'Madina', patient_id: '2', gender: "Male", hospital: "bestLab", age: 18, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Asamoah Kwame', branch: 'Tafo', patient_id: '3', gender: "Male", hospital: "bestLab", age: 32, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Sampson Akwasi', branch: 'Kronum', patient_id: '4', gender: "Male", hospital: "bestLab", age: 5, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Bawa Kwamena', branch: 'Ahodwo', patient_id: '5', gender: "Male", hospital: "bestLab", age: 15, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Kwaku Bonsam', branch: 'Madina', patient_id: '6', gender: "Male", hospital: "bestLab", age: 26, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Nana Kwaw', branch: 'Kronum', patient_id: '7', gender: "Male", hospital: "bestLab", age: 20, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
  { name: 'Nana Yaa', branch: 'Ahodwo', patient_id: '8', gender: "Female", hospital: "bestLab", age: 45, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-23023", balance: "2.89", address: "ghana"  },
];
