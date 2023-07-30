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
  { name: 'Nana Kojo', branch: 'Tafo', patient_id: '1', gender: "Male", hospital: "bestLab", age: 25, doctor: "Dr. Anane", tel_no: "026654668542", date: "30-07-2023", balance: "2.89", address: "Kumasi"  },
  { name: 'Ampadu Yaw', branch: 'Madina', patient_id: '2', gender: "Male", hospital: "bestLab", age: 18, doctor: "Dr. Anane", tel_no: "0244446444", date: "30-07-2023", balance: "2.89", address: "Kumasi"  },
  { name: 'Asamoah Kwame', branch: 'Tafo', patient_id: '3', gender: "Female", hospital: "KATH", age: 32, doctor: "Dr. Anane", tel_no: "02046379628", date: "30-07-2023", balance: "2.89", address: "Kumasi"  },
  { name: 'Sampson Akwasi', branch: 'Kronum', patient_id: '4', gender: "Female", hospital: "KATH", age: 5, doctor: "Dr. Anane", tel_no: "02046379628", date: "30-07-2023", balance: "2.89", address: "Kumasi"  },
  { name: 'Bawa Kwamena', branch: 'Ahodwo', patient_id: '5', gender: "Female", hospital: "KATH", age: 15, doctor: "Dr. Francis", tel_no: "02046379628", date: "30-07-2023", balance: "2.89", address: "Accra"  },
  { name: 'Kwaku Bonsam', branch: 'Madina', patient_id: '6', gender: "Male", hospital: "Korle Bu", age: 26, doctor: "Dr. Francis", tel_no: "02046379628", date: "30-07-2023", balance: "2.89", address: "Accra"  },
  { name: 'Nana Kwaw', branch: 'Kronum', patient_id: '7', gender: "Male", hospital: "Korle Bu", age: 20, doctor: "Dr. Francis", tel_no: "02736456764", date: "30-07-2023", balance: "2.89", address: "Accra"  },
  { name: 'Nana Yaa', branch: 'Ahodwo', patient_id: '8', gender: "Female", hospital: "Korle Bu", age: 45, doctor: "Dr. Linda", tel_no: "02736456764", date: "30-07-2023", balance: "2.89", address: "Accra"  },
  { name: 'Nana Kojo', branch: 'Tafo', patient_id: '1', gender: "Female", hospital: "Korle Bu", age: 25, doctor: "Dr. Linda", tel_no: "02736456764", date: "25-04-2002", balance: "2.89", address: "Accra"  },
  { name: 'Ampadu Yaw', branch: 'Madina', patient_id: '2', gender: "Female", hospital: "Asafo Boakye", age: 18, doctor: "Dr. Linda", tel_no: "02736456764", date: "2-04-2019", balance: "2.89", address: "Sunyani"  },
  { name: 'Asamoah Kwame', branch: 'Tafo', patient_id: '3', gender: "Female", hospital: "Asafo Boakye", age: 32, doctor: "Dr. Linda", tel_no: "42548829920", date: "2-04-2019", balance: "2.89", address: "Sunyani"  },
  { name: 'Sampson Akwasi', branch: 'Kronum', patient_id: '4', gender: "Male", hospital: "Asafo Boakye", age: 5, doctor: "Dr. David", tel_no: "42548829920", date: "2-04-2019", balance: "2.89", address: "Sunyani"  },
  { name: 'Bawa Kwamena', branch: 'Ahodwo', patient_id: '5', gender: "Male", hospital: "Asafo Boakye", age: 15, doctor: "Dr. David", tel_no: "42548829920", date: "2-04-2019", balance: "2.89", address: "Sunyani"  },
  { name: 'Kwaku Bonsam', branch: 'Madina', patient_id: '6', gender: "Male", hospital: "37 Military", age: 26, doctor: "Dr. David", tel_no: "42548829920", date: "14-10-2010", balance: "2.89", address: "Tamale"  },
  { name: 'Nana Kwaw', branch: 'Kronum', patient_id: '7', gender: "Male", hospital: "37 Military", age: 20, doctor: "Dr. David", tel_no: "05543275465", date: "14-10-2010", balance: "2.89", address: "Tamale"  },
  { name: 'Nana Yaa', branch: 'Ahodwo', patient_id: '8', gender: "Female", hospital: "37 Military", age: 45, doctor: "Dr. Asantewaa", tel_no: "05543275465", date: "14-10-2010", balance: "2.89", address: "Tamale"  },
  { name: 'Nana Kojo', branch: 'Tafo', patient_id: '1', gender: "Male", hospital: "37 Military", age: 25, doctor: "Dr. Asantewaa", tel_no: "05543275465", date: "25-04-2002", balance: "2.89", address: "Tamale"  },
  { name: 'Ampadu Yaw', branch: 'Madina', patient_id: '2', gender: "Male", hospital: "ST. Thomas", age: 18, doctor: "Dr. Asantewaa", tel_no: "05543275465", date: "25-04-2002", balance: "2.89", address: "Takoradi"  },
  { name: 'Asamoah Kwame', branch: 'Tafo', patient_id: '3', gender: "Female", hospital: "ST. Thomas", age: 32, doctor: "Dr. Asantewaa", tel_no: "02777646463", date: "25-04-2002", balance: "2.89", address: "Takoradi"  },
  { name: 'Sampson Akwasi', branch: 'Kronum', patient_id: '4', gender: "Female", hospital: "ST. Thomas", age: 5, doctor: "Dr. Samuel", tel_no: "02777646463", date: "31-07-2023", balance: "2.89", address: "Takoradi"  },
  { name: 'Bawa Kwamena', branch: 'Ahodwo', patient_id: '5', gender: "Female", hospital: "Bomso Clinic", age: 15, doctor: "Dr. Samuel", tel_no: "02777646463", date: "31-07-2023", balance: "2.89", address: "Takoradi"  },
  { name: 'Kwaku Bonsam', branch: 'Madina', patient_id: '6', gender: "Female", hospital: "Bomso Clinic", age: 26, doctor: "Dr. Samuel", tel_no: "02777646463", date: "31-07-2023", balance: "2.89", address: "Volta"  },
  { name: 'Nana Kwaw', branch: 'Kronum', patient_id: '7', gender: "Male", hospital: "Bomso Clinic", age: 20, doctor: "Dr. Samuel", tel_no: "026654668542", date: "31-07-2023", balance: "2.89", address: "Volta"  },
  { name: 'Nana Yaa', branch: 'Ahodwo', patient_id: '8', gender: "Female", hospital: "bestLab", age: 45, doctor: "Dr. Killy", tel_no: "026654668542", date: "31-07-2023", balance: "2.89", address: "Volta"  },
];
