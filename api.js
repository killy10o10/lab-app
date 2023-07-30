export const patientArray = [
  "Nana Kojo", "Lilly Mensah", "Samuel Addo", "Quami Kily",
  "Nana Yaw", "Nancy Mensah", "Pappy Joey", "Bernice Offei",
  "Nana Kwame", "Abena Mensah", "Adjoa Agbozo", "Chevy Cadilac",
  "Nana Akwasi", "Alex Grover", "Yesutor Dzibordi", "Kesse Mimi",
  "Nana Kwamena", "Lilly Mensah", "Mamavi Esther", "Quami Kily",
  "Nana Kwaku", "Lilly Mensah", "Eli Sampson", "Kwadwo Atinga",
  "Nana Kwaw", "Lilly Mensah", "Ato Abban", "Esi Lilliana",
  "Nana Yaa", "Jay Beyonce", "Samuel Addo", "Iniesta Kwaw",
];


export async function getNames() {
  const res = await fetch("https://randomuser.me/api/")
  if(!res.ok) {
    throw {
      message: "Failed to fetch patient names", 
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data;
}