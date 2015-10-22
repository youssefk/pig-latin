describe('pigLatin', function() {
  it("adds 'ay' to the end of all words starting with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });
  /*it("takes all words that start with one or more consonants, move all of the first consecutive consonants to the end and add 'ay'", function() {
    expect(pigLatin("tree")).to.equal(true);
  });
  it("takes all 'qu' words and moves the qu to the end together", function() {
    expect(pigLatin("quail")).to.equal(true);
  });
  it("treats the letter y as a consonant for words that start with the letter", function() {
    expect(pigLatin("yesterday")).to.equal(true);
  });*/
});
