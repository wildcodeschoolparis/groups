const users = [
  "alex.bui",
  "alexis.theyssier",
  "amel.braiek",
  "aurelio.lima.ferreira",
  "benoit.rameau",
  "bogdan.ceu",
  "capucine.leclerc",
  "carlos.facchin",
  "charles.chiacchia",
  "charlotte.guerin",
  "christian.lim",
  "christopher.fremond",
  "constance.henrot",
  "daniel.deutsch",
  "edouard.de.laage",
  "francesca.ringot",
  "frederic.olive",
  "frederic.paquet",
  "gaelle.fougre",
  "guillaume.nobis",
  "helena.domlan",
  "helene.blanchard",
  "joffrey.chauleau",
  "kim.spychalski",
  "leila.rhazaoui",
  "lorraine.chastang",
  "louise.foussat",
  "ludivine.pellissier",
  "marie.malarme",
  "mehdi.chtira",
  "mikael.verdu",
  "hedi.kochad",
  "mohand.hassam",
  "nadia.djellali",
  "pany.soukaloun",
  "philippe.maguer",
  "pierre.langevin",
  "pierre.poretti",
  "quentin.roiseux",
  "romain.reslinger",
  "sabrina.berguer",
  "samy.kacemi",
  "samuel.sarano",
  "samuel.lambert",
  "sichelle.chiffert",
  "smain.khaldi",
  "sophie.michaudel",
  "souhail.souid",
  "valery.chin",
  "yann.coulleau",
  "yvan.latorre",
]

const shuffle = (array, shouldShuffleInPlace = false) => {
  let n = array.length
  let i, tmp

  if (!shouldShuffleInPlace) {
    array = [ ...array ]
  }
  while (n) {
    i = Math.floor(Math.random() * n--)

    tmp = array[i]
    array[i] = array[n]
    array[n] = tmp
  }

  return array
}

const splitArrayInChunks = (array, chunkSize) => {
  const chunks = []

  for (i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }

  return chunks
}

const splitArrayInBalancedChunks = (array, n) => {
  const sizes = []
  const chunks = []

  const each = Math.floor(array.length / n)
  const rest = array.length % n

  for (let i = 0; i < n; i++) {
    sizes.push(each + (i < rest ? 1 : 0))
  }
  let i = 0
  for (size of sizes) {
    chunks.push(array.slice(i, i + size))
    i += size
  }

  return chunks
}

const groups = splitArrayInBalancedChunks(shuffle(users), 6)
const groupSizes = groups.map(g => g.length)

console.log(`${groups.length} groups: ${groupSizes}`)
