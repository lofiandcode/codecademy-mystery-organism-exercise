// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate () {
      const randBaseIndex = Math.floor(Math.random() * this.dna.length)
      let newBase = returnRandBase();
      while (newBase === this.dna[randBaseIndex]) {
        newBase = returnRandBase();
      }
      this.dna[randBaseIndex] = newBase;
    },
    compare (object) {
      const sharedBases = object.dna.filter((base, index) => {
        return base === this.dna[index];
      })
      const percentSharedBases = Math.round((sharedBases.length/this.dna.length) * 100);
      return `Specimen #${this.specimenNum} and specimen #${object.specimenNum} have ${percentSharedBases}% DNA in common.`;
    },
    willLikelySurvive () {
      const onlyCGBases = this.dna.filter(base => (base === 'C' || base === 'G'));
      const percentCG = Math.round((onlyCGBases.length/this.dna.length) * 100);
      console.log(percentCG);
      return percentCG >= 60;
    }
  };
};
const newPAequor1 = pAequorFactory(1, mockUpStrand())
const newPAequor2 = pAequorFactory(2, mockUpStrand())
// console.log(newPAequor1.compare(newPAequor2));

console.log(newPAequor1.willLikelySurvive());
console.log(newPAequor1);
// console.log(newPAequor2);
// newPAequor1.mutate();
// console.log(newPAequor1);








