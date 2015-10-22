describe('pigLatin', function() {
  it("adds 'ay' to the end of all words starting with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });
  it("fails the spec for all words that do not start with a vowel", function() {
    expect(pigLatin("trunk")).to.equal("");
  });
  it("takes all words that start with one or more consonants, move all of the first consecutive consonants to the end and add 'ay'", function() {
    expect(pigLatin("tree")).to.equal("eetray");
  });
  /*it("takes all 'qu' words and moves the qu to the end together", function() {
    expect(pigLatin("quail")).to.equal("ailqu");
  });
  it("treats the letter y as a consonant for words that start with the letter", function() {
    expect(pigLatin("yesterday")).to.equal("esterdayay");
  });*/
});
